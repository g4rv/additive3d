'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';

interface StlViewerProps {
  url?: string; // Optional now
  file?: File; // Accept File directly
  className?: string;
  useGrid?: boolean;
  voidColor?: string;
  modelPosition?: { x: number; y: number; z: number };
  modelRotation?: { x: number; y: number; z: number };
  modelColor?: string;
}

export default function StlViewer({
  url,
  file,
  className = '',
  useGrid = true,
  voidColor = '#2d2d2d',
  modelPosition = { x: 0, y: 0, z: 0 },
  modelRotation = { x: 0, y: 0, z: 0 },
  modelColor = '#ffd231',
}: StlViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: OrbitControls;
    animationId?: number;
  } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(voidColor);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
    camera.position.set(0, 0, 200);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 10;
    controls.maxDistance = 1000;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(3, 3, 3);
    directionalLight1.castShadow = true;
    directionalLight1.shadow.mapSize.width = 2048;
    directionalLight1.shadow.mapSize.height = 2048;
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
    directionalLight2.position.set(-1, -1, -1);
    scene.add(directionalLight2);

    // Grid helper - darker colors for better contrast
    if (useGrid) {
      const gridHelper = new THREE.GridHelper(200, 20, 0x555555, 0x888888);
      gridHelper.receiveShadow = true;
      scene.add(gridHelper);
    }

    // Axis helper - subtle colors
    const axesHelper = new THREE.AxesHelper(50);
    axesHelper.material.opacity = 0.5;
    axesHelper.material.transparent = true;
    scene.add(axesHelper);

    // Store scene reference
    sceneRef.current = { scene, camera, renderer, controls };

    // Load STL - prefer File object over URL to avoid fetch issues
    const loader = new STLLoader();

    const loadGeometry = (buffer: ArrayBuffer) => {
      // Parse the STL data directly
      const geometry = loader.parse(buffer);

      // Remove previous mesh if exists
      const existingMesh = scene.children.find((child) => child.type === 'Mesh');
      if (existingMesh) {
        scene.remove(existingMesh);
      }

      // Create material - Gold/Yellow color matching primary brand color
      const material = new THREE.MeshPhongMaterial({
        color: modelColor,
        specular: 0x444444,
        shininess: 150,
      });

      // Create mesh
      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;

      // Auto-center and fit to view
      geometry.computeBoundingBox();
      const boundingBox = geometry.boundingBox!;
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);
      geometry.translate(-center.x, -center.y, -center.z);

      // Calculate optimal camera distance
      const size = new THREE.Vector3();
      boundingBox.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const cameraDistance = Math.abs(maxDim / Math.sin(fov / 2)) * 1.2;

      camera.position.set(cameraDistance, cameraDistance, cameraDistance);
      camera.lookAt(0, 0, 0);
      controls.target.set(0, 0, 0);
      controls.update();

      // Apply custom position and rotation (after auto-centering)
      mesh.position.set(modelPosition.x, modelPosition.y, modelPosition.z);
      mesh.rotation.set(modelRotation.x, modelRotation.y, modelRotation.z);

      scene.add(mesh);
    };

    // Load file directly if provided (more reliable than blob URLs)
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          loadGeometry(e.target.result as ArrayBuffer);
        }
      };
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
      };
      reader.readAsArrayBuffer(file);
    } else if (url) {
      // Fallback to URL if file not provided
      fetch(url)
        .then((response) => response.arrayBuffer())
        .then(loadGeometry)
        .catch((error) => {
          console.error('Error loading STL:', error);
        });
    }

    // Animation loop
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      if (sceneRef.current) {
        sceneRef.current.animationId = animationId;
      }
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current?.animationId) {
        cancelAnimationFrame(sceneRef.current.animationId);
      }
      controls.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [url]);

  return <div ref={containerRef} className={className} />;
}
