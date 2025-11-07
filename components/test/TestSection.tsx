/* eslint-disable @typescript-eslint/no-explicit-any */
/* @ts-nocheck */
'use client';

import { useState } from 'react';

const themes = [
  {
    name: "Logo Match Perfect",
    colors: {
      primary: "#FFC300",
      background: "#1A1A1A",
      surface: "#2D2D2D",
      text: "#F5F5F5",
      success: "#00C896",
      error: "#FF5252",
      warning: "#FFB800"
    }
  }
];

export default function TestSection() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [activeTab, setActiveTab] = useState('overview');

  const applyTheme = (theme: typeof themes[0]) => {
    return {
      backgroundColor: theme.colors.background,
      color: theme.colors.text,
      primaryColor: theme.colors.primary,
      surfaceColor: theme.colors.surface,
      successColor: theme.colors.success,
      errorColor: theme.colors.error,
      warningColor: theme.colors.warning
    };
  };

  const theme = applyTheme(selectedTheme);

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.color, minHeight: '100vh', padding: '20px' }}>

      {/* Theme Selector */}
      <div style={{
        backgroundColor: theme.surfaceColor,
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '32px',
        border: `1px solid ${theme.primaryColor}33`
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Logo in Header */}
            <img
              src="/logo.png"
              alt="Additive3D Logo"
              style={{
                width: '96px',
                height: '30px',
                objectFit: 'contain'
              }}
            />
            <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>Additive3D Platform Test</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <label style={{ fontSize: '14px', fontWeight: '500' }}>Theme:</label>
            <select
              value={selectedTheme.name}
              onChange={(e) => setSelectedTheme(themes.find(t => t.name === e.target.value) || themes[0])}
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                border: `1px solid ${theme.primaryColor}`,
                padding: '8px 12px',
                borderRadius: '4px',
                fontSize: '14px'
              }}
            >
              {themes.map((theme) => (
                <option key={theme.name} value={theme.name}>{theme.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{
        display: 'flex',
        gap: '4px',
        marginBottom: '24px',
        backgroundColor: theme.surfaceColor,
        padding: '4px',
        borderRadius: '8px'
      }}>
        {['overview', 'calculator', 'materials', 'account', 'components'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              backgroundColor: activeTab === tab ? theme.primaryColor : 'transparent',
              color: activeTab === tab ? theme.backgroundColor : theme.color,
              border: 'none',
              padding: '8px 16px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: activeTab === tab ? '600' : '400',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Area */}
      {activeTab === 'overview' && <OverviewSection theme={theme} />}
      {activeTab === 'calculator' && <CalculatorSection theme={theme} />}
      {activeTab === 'materials' && <MaterialsSection theme={theme} />}
      {activeTab === 'account' && <AccountSection theme={theme} />}
      {activeTab === 'components' && <ComponentsTest theme={theme} />}

    </div>
  );
}

function OverviewSection({ theme }: { theme: any }) {
  return (
    <div style={{ display: 'grid', gap: '24px' }}>

      {/* Hero Section */}
      <div style={{
        backgroundColor: theme.surfaceColor,
        padding: '48px',
        borderRadius: '12px',
        textAlign: 'center'
      }}>
        {/* Logo in Hero */}
        <img
          src="/logo.png"
          alt="Additive3D Logo"
          style={{
            width: '280px',
            height: '88px',
            margin: '0 auto 32px auto',
            objectFit: 'contain'
          }}
        />
        <h2 style={{ fontSize: '36px', margin: '0 0 16px 0' }}>Precision Manufacturing Excellence</h2>
        <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: '24px' }}>
          Transform your digital designs into high-precision physical parts with our advanced additive manufacturing solutions
        </p>
        <button style={{
          backgroundColor: theme.primaryColor,
          color: theme.backgroundColor,
          border: 'none',
          padding: '12px 24px',
          borderRadius: '6px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Get Instant Quote
        </button>
      </div>

      {/* Feature Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
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
          <div key={idx} style={{
            backgroundColor: theme.surfaceColor,
            padding: '24px',
            borderRadius: '8px',
            border: `1px solid ${theme.primaryColor}22`
          }}>
            {/* Logo Icon */}
            <img
              src="/logo.png"
              alt="Additive3D Logo"
              style={{
                width: '84px',
                height: '26px',
                marginBottom: '16px'
              }}
            />
            <h3 style={{ margin: '0 0 12px 0', color: theme.primaryColor }}>{feature.title}</h3>
            <p style={{ margin: 0, opacity: 0.8, lineHeight: '1.5' }}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CalculatorSection({ theme }: { theme: any }) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{
        backgroundColor: theme.surfaceColor,
        padding: '32px',
        borderRadius: '12px'
      }}>
        <h2 style={{ margin: '0 0 24px 0' }}>Instant Cost Calculator</h2>

        {/* Upload Area */}
        <div style={{
          border: `2px dashed ${theme.primaryColor}`,
          padding: '40px',
          borderRadius: '8px',
          textAlign: 'center',
          marginBottom: '24px'
        }}>
          <p style={{ margin: '0 0 16px 0' }}>Drop your 3D model files here</p>
          <button style={{
            backgroundColor: theme.primaryColor,
            color: theme.backgroundColor,
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}>
            Browse Files
          </button>
        </div>

        {/* Cost Breakdown */}
        <div style={{ backgroundColor: theme.backgroundColor, padding: '20px', borderRadius: '8px', marginBottom: '24px' }}>
          <h3 style={{ margin: '0 0 16px 0' }}>Cost Breakdown</h3>
          <div style={{ display: 'grid', gap: '12px' }}>
            {[
              { item: 'Material Cost (PLA)', amount: '$12.50' },
              { item: 'Print Time (2.5 hours @ $8/hr)', amount: '$20.00' },
              { item: 'Post-Processing', amount: '$5.00' },
              { item: 'Service Fee', amount: '$7.50' },
              { item: 'Total', amount: '$45.00', bold: true }
            ].map((line, idx) => (
              <div key={idx} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderTop: idx > 0 ? `1px solid ${theme.surfaceColor}` : 'none'
              }}>
                <span style={{ fontWeight: line.bold ? 'bold' : 'normal' }}>{line.item}</span>
                <span style={{
                  fontWeight: line.bold ? 'bold' : 'normal',
                  color: line.bold ? theme.primaryColor : theme.color
                }}>{line.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{
            backgroundColor: theme.primaryColor,
            color: theme.backgroundColor,
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            cursor: 'pointer',
            flex: 1
          }}>
            Proceed to Order
          </button>
          <button style={{
            backgroundColor: 'transparent',
            color: theme.color,
            border: `1px solid ${theme.color}`,
            padding: '12px 24px',
            borderRadius: '6px',
            cursor: 'pointer',
            flex: 1
          }}>
            Save Quote
          </button>
        </div>
      </div>
    </div>
  );
}

function MaterialsSection({ theme }: { theme: any }) {
  return (
    <div>
      <h2 style={{ marginBottom: '24px' }}>Material Specifications</h2>

      {/* Material Comparison Table */}
      <div style={{
        backgroundColor: theme.surfaceColor,
        padding: '24px',
        borderRadius: '12px',
        overflowX: 'auto'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${theme.primaryColor}` }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>Material</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Strength</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Temperature</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Cost/kg</th>
            </tr>
          </thead>
          <tbody>
            {[
              { material: 'PLA', strength: 'High', temp: '60°C', cost: '$25' },
              { material: 'ABS', strength: 'Very High', temp: '100°C', cost: '$35' },
              { material: 'PETG', strength: 'Very High', temp: '80°C', cost: '$30' },
              { material: 'Carbon Fiber', strength: 'Ultra High', temp: '120°C', cost: '$120' }
            ].map((row, idx) => (
              <tr key={idx} style={{ borderBottom: `1px solid ${theme.primaryColor}33` }}>
                <td style={{ padding: '12px', fontWeight: '600' }}>{row.material}</td>
                <td style={{ padding: '12px' }}>{row.strength}</td>
                <td style={{ padding: '12px' }}>{row.temp}</td>
                <td style={{ padding: '12px', color: theme.primaryColor, fontWeight: '500' }}>{row.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Status Messages */}
      <div style={{ marginTop: '24px', display: 'grid', gap: '16px' }}>
        <div style={{
          backgroundColor: `${theme.successColor}22`,
          border: `1px solid ${theme.successColor}`,
          padding: '16px',
          borderRadius: '6px',
          color: theme.successColor
        }}>
          ✓ Material in stock - Ready to print
        </div>
        <div style={{
          backgroundColor: `${theme.warningColor}22`,
          border: `1px solid ${theme.warningColor}`,
          padding: '16px',
          borderRadius: '6px',
          color: theme.warningColor
        }}>
          ⚠ Limited quantity available - Order soon
        </div>
        <div style={{
          backgroundColor: `${theme.errorColor}22`,
          border: `1px solid ${theme.errorColor}`,
          padding: '16px',
          borderRadius: '6px',
          color: theme.errorColor
        }}>
          ✗ Currently out of stock - Expected delivery: 2 weeks
        </div>
      </div>
    </div>
  );
}

function AccountSection({ theme }: { theme: any }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>

      {/* Sidebar */}
      <div style={{
        backgroundColor: theme.surfaceColor,
        padding: '24px',
        borderRadius: '12px'
      }}>
        {/* Logo in Sidebar */}
        <img
          src="/logo.png"
          alt="Additive3D Logo"
          style={{
            width: '140px',
            height: '44px',
            margin: '0 auto 24px auto',
            objectFit: 'contain'
          }}
        />
        <h3 style={{ margin: '0 0 20px 0', textAlign: 'center' }}>Account Menu</h3>
        <div style={{ display: 'grid', gap: '8px' }}>
          {[
            { icon: '👤', label: 'Profile Settings', active: true },
            { icon: '📁', label: 'My Projects' },
            { icon: '📦', label: 'Order History' },
            { icon: '💳', label: 'Billing' },
            { icon: '⚙️', label: 'Preferences' }
          ].map((item, idx) => (
            <button
              key={idx}
              style={{
                backgroundColor: item.active ? theme.primaryColor : 'transparent',
                color: item.active ? theme.backgroundColor : theme.color,
                border: 'none',
                padding: '12px 16px',
                borderRadius: '6px',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%'
              }}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        backgroundColor: theme.surfaceColor,
        padding: '32px',
        borderRadius: '12px'
      }}>
        <h3 style={{ margin: '0 0 24px 0' }}>Current Orders</h3>

        <div style={{ display: 'grid', gap: '16px' }}>
          {[
            { id: 'AM-2024-0876', status: 'printing', progress: 65, material: 'PLA' },
            { id: 'AM-2024-0875', status: 'completed', progress: 100, material: 'ABS' },
            { id: 'AM-2024-0874', status: 'quality-check', progress: 95, material: 'PETG' }
          ].map((order, idx) => (
            <div key={idx} style={{
              backgroundColor: theme.backgroundColor,
              padding: '20px',
              borderRadius: '8px',
              border: `1px solid ${theme.primaryColor}33`
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h4 style={{ margin: 0, color: theme.primaryColor }}>{order.id}</h4>
                <span style={{
                  backgroundColor: order.status === 'completed' ? `${theme.successColor}22` :
                                 order.status === 'printing' ? `${theme.warningColor}22` :
                                 `${theme.primaryColor}22`,
                  color: order.status === 'completed' ? theme.successColor :
                         order.status === 'printing' ? theme.warningColor :
                         theme.primaryColor,
                  padding: '4px 12px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: '600'
                }}>
                  {order.status.toUpperCase()}
                </span>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{
                  width: '100%',
                  height: '8px',
                  backgroundColor: theme.surfaceColor,
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${order.progress}%`,
                    height: '100%',
                    backgroundColor: theme.primaryColor,
                    transition: 'width 0.3s ease'
                  }} />
                </div>
                <p style={{ margin: '8px 0 0 0', fontSize: '14px', opacity: 0.7 }}>
                  {order.progress}% Complete • {order.material}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComponentsTest({ theme }: { theme: any }) {
  return (
    <div style={{ display: 'grid', gap: '24px' }}>

      {/* Form Elements */}
      <div style={{
        backgroundColor: theme.surfaceColor,
        padding: '24px',
        borderRadius: '12px'
      }}>
        <h3 style={{ margin: '0 0 20px 0' }}>Form Elements</h3>

        <div style={{ display: 'grid', gap: '16px' }}>
          {/* Text Input */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Text Input</label>
            <input
              type="text"
              placeholder="Enter your name..."
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                border: `1px solid ${theme.primaryColor}33`,
                borderRadius: '6px',
                fontSize: '14px'
              }}
            />
          </div>

          {/* Select Dropdown */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Material Selection</label>
            <select
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                border: `1px solid ${theme.primaryColor}33`,
                borderRadius: '6px',
                fontSize: '14px',
                cursor: 'pointer'
              }}
            >
              <option value="">Select material...</option>
              <option value="pla">PLA - Eco-friendly</option>
              <option value="abs">ABS - Durable</option>
              <option value="petg">PETG - Chemical resistant</option>
              <option value="tpu">TPU - Flexible</option>
              <option value="carbon">Carbon Fiber - Ultra strong</option>
            </select>
          </div>

          {/* Multi-Select */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Post-Processing Options</label>
            <select
              multiple
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                border: `1px solid ${theme.primaryColor}33`,
                borderRadius: '6px',
                fontSize: '14px',
                minHeight: '100px',
                cursor: 'pointer'
              }}
            >
              <option value="sanding">Surface Sanding</option>
              <option value="polishing">Polishing</option>
              <option value="painting">Painting</option>
              <option value="coating">Protective Coating</option>
              <option value="assembly">Assembly</option>
            </select>
          </div>

          {/* Textarea */}
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Special Requirements</label>
            <textarea
              placeholder="Enter any special requirements..."
              rows={4}
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                border: `1px solid ${theme.primaryColor}33`,
                borderRadius: '6px',
                fontSize: '14px',
                resize: 'vertical'
              }}
            />
          </div>
        </div>
      </div>

      {/* Buttons & States */}
      <div style={{
        backgroundColor: theme.surfaceColor,
        padding: '24px',
        borderRadius: '12px'
      }}>
        <h3 style={{ margin: '0 0 20px 0' }}>Button Variations</h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
          {/* Primary Button */}
          <button style={{
            backgroundColor: theme.primaryColor,
            color: theme.backgroundColor,
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Primary Action
          </button>

          {/* Secondary Button */}
          <button style={{
            backgroundColor: 'transparent',
            color: theme.color,
            border: `1px solid ${theme.color}`,
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            Secondary Action
          </button>

          {/* Success Button */}
          <button style={{
            backgroundColor: theme.successColor,
            color: theme.backgroundColor,
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            ✓ Success
          </button>

          {/* Warning Button */}
          <button style={{
            backgroundColor: theme.warningColor,
            color: theme.backgroundColor,
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            ⚠ Warning
          </button>

          {/* Error Button */}
          <button style={{
            backgroundColor: theme.errorColor,
            color: theme.backgroundColor,
            border: 'none',
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
            ✗ Delete
          </button>

          {/* Disabled Button */}
          <button disabled style={{
            backgroundColor: `${theme.color}22`,
            color: `${theme.color}66`,
            border: `1px solid ${theme.color}11`,
            padding: '12px 24px',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'not-allowed'
          }}>
            Disabled
          </button>
        </div>
      </div>

      {/* Toggle and Checkbox */}
      <div style={{
        backgroundColor: theme.surfaceColor,
        padding: '24px',
        borderRadius: '12px'
      }}>
        <h3 style={{ margin: '0 0 20px 0' }}>Toggle & Selection</h3>

        <div style={{ display: 'grid', gap: '16px' }}>
          {/* Toggle Switch */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <label style={{ fontSize: '14px', cursor: 'pointer' }}>Enable notifications</label>
            <div style={{
              width: '48px',
              height: '24px',
              backgroundColor: `${theme.primaryColor}33`,
              borderRadius: '12px',
              position: 'relative',
              cursor: 'pointer'
            }}>
              <div style={{
                width: '20px',
                height: '20px',
                backgroundColor: theme.primaryColor,
                borderRadius: '50%',
                position: 'absolute',
                top: '2px',
                left: '2px',
                transition: 'transform 0.2s ease'
              }} />
            </div>
          </div>

          {/* Radio Buttons */}
          <div>
            <label style={{ display: 'block', marginBottom: '12px', fontSize: '14px', fontWeight: '500' }}>Print Quality</label>
            <div style={{ display: 'flex', gap: '20px' }}>
              {['Standard', 'High', 'Ultra'].map((option) => (
                <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: `2px solid ${theme.primaryColor}`,
                    borderRadius: '50%',
                    position: 'relative'
                  }}>
                    <div style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: theme.primaryColor,
                      borderRadius: '50%',
                      position: 'absolute',
                      top: '2px',
                      left: '2px'
                    }} />
                  </div>
                  <span style={{ fontSize: '14px' }}>{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Checkboxes */}
          <div>
            <label style={{ display: 'block', marginBottom: '12px', fontSize: '14px', fontWeight: '500' }}>Additional Services</label>
            <div style={{ display: 'grid', gap: '12px' }}>
              {[
                'Express processing',
                'Quality certification',
                'Design review',
                'Technical support'
              ].map((option) => (
                <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                  <div style={{
                    width: '16px',
                    height: '16px',
                    border: `2px solid ${theme.primaryColor}`,
                    borderRadius: '3px',
                    position: 'relative',
                    backgroundColor: theme.primaryColor
                  }}>
                    <span style={{
                      position: 'absolute',
                      top: '-2px',
                      left: '2px',
                      color: theme.backgroundColor,
                      fontSize: '12px',
                      fontWeight: 'bold'
                    }}>✓</span>
                  </div>
                  <span style={{ fontSize: '14px' }}>{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Status Indicators */}
      <div style={{
        backgroundColor: theme.surfaceColor,
        padding: '24px',
        borderRadius: '12px'
      }}>
        <h3 style={{ margin: '0 0 20px 0' }}>Status Indicators</h3>

        <div style={{ display: 'grid', gap: '16px' }}>
          {[
            { label: 'Order Confirmed', status: 'success' },
            { label: 'Processing', status: 'warning' },
            { label: 'Payment Required', status: 'error' },
            { label: 'Shipped', status: 'success' },
            { label: 'Quality Check', status: 'warning' }
          ].map((item, idx) => (
            <div key={idx} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              backgroundColor: `${item.status === 'success' ? theme.successColor :
                              item.status === 'warning' ? theme.warningColor :
                              theme.errorColor}22`,
              border: `1px solid ${item.status === 'success' ? theme.successColor :
                            item.status === 'warning' ? theme.warningColor :
                            theme.errorColor}44`,
              borderRadius: '6px'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: item.status === 'success' ? theme.successColor :
                              item.status === 'warning' ? theme.warningColor :
                              theme.errorColor
              }} />
              <span style={{
                color: item.status === 'success' ? theme.successColor :
                      item.status === 'warning' ? theme.warningColor :
                      theme.errorColor,
                fontSize: '14px',
                fontWeight: '500'
              }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}