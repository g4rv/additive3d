/* eslint-disable @typescript-eslint/no-explicit-any */
/* @ts-nocheck */
'use client';

import React, { useState, useEffect } from 'react';

const currentTheme = {
  name: 'dark',
  label: 'Custom Dark Theme',
  description: 'Amber Glow with Carbon Dark background'
};

export default function TestSection() {
  const [activeTab, setActiveTab] = useState('overview');

  // Set the theme when component mounts
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme.name);
  }, []);

  return (
    <div data-theme={currentTheme.name} className="min-h-screen p-5 bg-base-100 text-base-content">

      {/* Header */}
      <div className="navbar bg-base-200 rounded-lg mb-8 border border-primary/20">
        <div className="navbar-start">
          <div className="flex items-center gap-4">
            {/* Logo in Header */}
            <img
              src="/logo.png"
              alt="Additive3D Logo"
              className="w-24 h-8 object-contain"
            />
            <h1 className="text-2xl font-bold">Additive3D Platform Test</h1>
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-3">
            <div className="badge badge-primary">
              {currentTheme.label}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="tabs tabs-boxed bg-base-200 mb-6">
        {['overview', 'calculator', 'materials', 'account', 'components'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab tab-md ${
              activeTab === tab ? 'tab-active' : ''
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Area */}
      {activeTab === 'overview' && <OverviewSection />}
      {activeTab === 'calculator' && <CalculatorSection />}
      {activeTab === 'materials' && <MaterialsSection />}
      {activeTab === 'account' && <AccountSection />}
      {activeTab === 'components' && <ComponentsTest />}

    </div>
  );
}

function OverviewSection() {
  return (
    <div className="space-y-6">

      {/* Hero Section */}
      <div className="hero bg-base-200 rounded-xl text-center">
        <div className="hero-content text-center py-16">
          <div className="max-w-2xl">
            {/* Logo in Hero */}
            <img
              src="/logo.png"
              alt="Additive3D Logo"
              className="w-70 h-22 mx-auto mb-8 object-contain"
            />
            <h2 className="text-4xl font-bold mb-4">Precision Manufacturing Excellence</h2>
            <p className="text-lg opacity-80 mb-6">
              Transform your digital designs into high-precision physical parts with our advanced additive manufacturing solutions
            </p>
            <button className="btn btn-primary btn-lg">
              Get Instant Quote
            </button>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          {
            title: 'Precision Engineering',
            desc: 'Achieve tolerances as tight as ±0.1mm with our advanced manufacturing processes',
            icon: '🔧'
          },
          {
            title: 'Material Excellence',
            desc: 'Wide range of industrial-grade materials including metals, polymers, and composites',
            icon: '⚗️'
          },
          {
            title: 'Rapid Production',
            desc: 'From prototype to production in days, not weeks. Scale as your needs grow',
            icon: '🚀'
          }
        ].map((feature, idx) => (
          <div key={idx} className="card bg-base-200 shadow-xl border border-primary/20">
            <div className="card-body">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="card-title text-primary">{feature.title}</h3>
              <p className="opacity-80">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CalculatorSection() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-6">Instant Cost Calculator</h2>

          {/* Upload Area */}
          <div className="border-2 border-dashed border-primary p-10 rounded-lg text-center mb-6">
            <p className="mb-4">Drop your 3D model files here</p>
            <button className="btn btn-primary">
              Browse Files
            </button>
          </div>

          {/* Cost Breakdown */}
          <div className="bg-base-100 p-5 rounded-lg mb-6">
            <h3 className="font-semibold mb-4">Cost Breakdown</h3>
            <div className="space-y-3">
              {[
                { item: 'Material Cost (PLA)', amount: '$12.50' },
                { item: 'Print Time (2.5 hours @ $8/hr)', amount: '$20.00' },
                { item: 'Post-Processing', amount: '$5.00' },
                { item: 'Service Fee', amount: '$7.50' },
                { item: 'Total', amount: '$45.00', bold: true }
              ].map((line, idx) => (
                <div key={idx} className={`flex justify-between items-center py-2 ${
                  idx > 0 ? 'border-t border-base-300' : ''
                }`}>
                  <span className={line.bold ? 'font-bold' : 'font-normal'}>{line.item}</span>
                  <span className={`${
                    line.bold ? 'font-bold text-primary' : 'font-normal'
                  }`}>{line.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="btn btn-primary flex-1">
              Proceed to Order
            </button>
            <button className="btn btn-outline flex-1">
              Save Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function MaterialsSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Material Specifications</h2>

      {/* Material Comparison Table */}
      <div className="card bg-base-200 shadow-xl overflow-x-auto">
        <div className="card-body p-6">
          <table className="table table-zebra w-full">
            <thead>
              <tr className="border-b-2 border-primary">
                <th className="text-left p-3">Material</th>
                <th className="text-left p-3">Strength</th>
                <th className="text-left p-3">Temperature</th>
                <th className="text-left p-3">Cost/kg</th>
              </tr>
            </thead>
            <tbody>
              {[
                { material: 'PLA', strength: 'High', temp: '60°C', cost: '$25' },
                { material: 'ABS', strength: 'Very High', temp: '100°C', cost: '$35' },
                { material: 'PETG', strength: 'Very High', temp: '80°C', cost: '$30' },
                { material: 'Carbon Fiber', strength: 'Ultra High', temp: '120°C', cost: '$120' }
              ].map((row, idx) => (
                <tr key={idx} className="border-b border-primary/20">
                  <td className="p-3 font-semibold">{row.material}</td>
                  <td className="p-3">{row.strength}</td>
                  <td className="p-3">{row.temp}</td>
                  <td className="p-3 text-primary font-medium">{row.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Status Messages */}
      <div className="mt-6 space-y-4">
        <div className="alert alert-success">
          <span>✓ Material in stock - Ready to print</span>
        </div>
        <div className="alert alert-warning">
          <span>⚠ Limited quantity available - Order soon</span>
        </div>
        <div className="alert alert-error">
          <span>✗ Currently out of stock - Expected delivery: 2 weeks</span>
        </div>
      </div>
    </div>
  );
}

function AccountSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            {/* Logo in Sidebar */}
            <img
              src="/logo.png"
              alt="Additive3D Logo"
              className="w-35 h-11 mx-auto mb-6 object-contain"
            />
            <h3 className="card-title text-center mb-5">Account Menu</h3>
            <div className="space-y-2">
              {[
                { icon: '👤', label: 'Profile Settings', active: true },
                { icon: '📁', label: 'My Projects' },
                { icon: '📦', label: 'Order History' },
                { icon: '💳', label: 'Billing' },
                { icon: '⚙️', label: 'Preferences' }
              ].map((item, idx) => (
                <button
                  key={idx}
                  className={`btn btn-block justify-start ${
                    item.active ? 'btn-primary' : 'btn-ghost'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:col-span-2">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h3 className="card-title mb-6">Current Orders</h3>

            <div className="space-y-4">
              {[
                { id: 'AM-2024-0876', status: 'printing', progress: 65, material: 'PLA' },
                { id: 'AM-2024-0875', status: 'completed', progress: 100, material: 'ABS' },
                { id: 'AM-2024-0874', status: 'quality-check', progress: 95, material: 'PETG' }
              ].map((order, idx) => (
                <div key={idx} className="card bg-base-100 border border-primary/20">
                  <div className="card-body p-5">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="text-primary font-semibold">{order.id}</h4>
                      <div className={`badge ${
                        order.status === 'completed' ? 'badge-success' :
                        order.status === 'printing' ? 'badge-warning' :
                        'badge-info'
                      }`}>
                        {order.status.toUpperCase()}
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="w-full bg-base-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${order.progress}%` }}
                        />
                      </div>
                      <p className="text-sm opacity-70 mt-2">
                        {order.progress}% Complete • {order.material}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ComponentsTest() {
  return (
    <div className="space-y-6">

      {/* Form Elements */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h3 className="card-title mb-5">Form Elements</h3>

          <div className="space-y-4">
            {/* Text Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Text Input</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="input input-bordered w-full"
              />
            </div>

            {/* Select Dropdown */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Material Selection</span>
              </label>
              <select className="select select-bordered w-full">
                <option value="" disabled selected>Select material...</option>
                <option value="pla">PLA - Eco-friendly</option>
                <option value="abs">ABS - Durable</option>
                <option value="petg">PETG - Chemical resistant</option>
                <option value="tpu">TPU - Flexible</option>
                <option value="carbon">Carbon Fiber - Ultra strong</option>
              </select>
            </div>

            {/* Multi-Select */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Post-Processing Options</span>
              </label>
              <select className="select select-bordered w-full h-24" multiple>
                <option value="sanding">Surface Sanding</option>
                <option value="polishing">Polishing</option>
                <option value="painting">Painting</option>
                <option value="coating">Protective Coating</option>
                <option value="assembly">Assembly</option>
              </select>
            </div>

            {/* Textarea */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Special Requirements</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Enter any special requirements..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Buttons & States */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h3 className="card-title mb-5">Button Variations</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button className="btn btn-primary">Primary Action</button>
            <button className="btn btn-secondary">Secondary Action</button>
            <button className="btn btn-success">✓ Success</button>
            <button className="btn btn-warning">⚠ Warning</button>
            <button className="btn btn-error">✗ Delete</button>
            <button className="btn btn-disabled" disabled>Disabled</button>
          </div>
        </div>
      </div>

      {/* Toggle and Checkbox */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h3 className="card-title mb-5">Toggle & Selection</h3>

          <div className="space-y-4">
            {/* Toggle Switch */}
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Enable notifications</span>
                <input type="checkbox" className="toggle toggle-primary" defaultChecked />
              </label>
            </div>

            {/* Radio Buttons */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Print Quality</span>
              </label>
              <div className="flex gap-4">
                {['Standard', 'High', 'Ultra'].map((option, idx) => (
                  <label key={option} className="label cursor-pointer">
                    <input
                      type="radio"
                      name="quality"
                      className="radio radio-primary"
                      defaultChecked={idx === 0}
                    />
                    <span className="label-text ml-2">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Checkboxes */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Additional Services</span>
              </label>
              <div className="space-y-2">
                {[
                  'Express processing',
                  'Quality certification',
                  'Design review',
                  'Technical support'
                ].map((option) => (
                  <label key={option} className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      defaultChecked={option === 'Express processing'}
                    />
                    <span className="label-text ml-2">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="card bg-base-200 shadow-xl">
        <div className="card-body">
          <h3 className="card-title mb-5">Status Indicators</h3>

          <div className="space-y-3">
            {[
              { label: 'Order Confirmed', type: 'success' },
              { label: 'Processing', type: 'warning' },
              { label: 'Payment Required', type: 'error' },
              { label: 'Shipped', type: 'success' },
              { label: 'Quality Check', type: 'warning' }
            ].map((item, idx) => (
              <div key={idx} className={`alert alert-${item.type}`}>
                <div className="w-2 h-2 rounded-full bg-current mr-2" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}