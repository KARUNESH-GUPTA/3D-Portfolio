// Portfolio Data with Interactive Demonstrations
const portfolioData = {
  personalInfo: {
    name: "Karunesh Gupta",
    institution: "Allenhouse Institute of Technology, Kanpur",
    contact: {
      phone: "+91-7607545587",
      email: "karuneshgupta67@gmail.com",
      linkedin: "https://www.linkedin.com/in/karunesh-gupta-507b242a9/",
      location: "Koyala nagar, Kanpur"
    }
  },
  skills: {
    python: {
      name: "Python",
      icon: "🐍",
      level: 85,
      demoType: "code_executor",
      capabilities: [
        "Cybersecurity Automation",
        "Penetration Testing Scripts", 
        "Security Tool Development",
        "Data Analysis"
      ],
      sampleCode: `# Port Scanner Example
import socket
import threading
from datetime import datetime

def scan_port(host, port):
    try:
        sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        sock.settimeout(1)
        result = sock.connect_ex((host, port))
        if result == 0:
            print(f'Port {port}: OPEN')
        sock.close()
    except:
        pass

print("=== Port Scanner Demo ===")
print(f"Scanning localhost at {datetime.now()}")
print("Common ports: 21, 22, 80, 443, 3389")

# Simulate scanning common ports
common_ports = [21, 22, 80, 443, 3389, 8080]
for port in common_ports:
    if port in [80, 443]:  # Simulate some open ports
        print(f'Port {port}: OPEN')
    else:
        print(f'Port {port}: CLOSED')

print("\\nScan completed successfully!")`
    },
    java: {
      name: "Java",
      icon: "☕",
      level: 80,
      demoType: "class_visualizer",
      capabilities: [
        "Enterprise Security Applications",
        "Secure Software Development", 
        "Object-Oriented Programming",
        "Web Application Security"
      ],
      sampleCode: `// Secure Authentication System
public class SecureAuth {
    private String username;
    private String hashedPassword;
    private int failedAttempts;
    private boolean isLocked;
    
    public SecureAuth(String username, String password) {
        this.username = username;
        this.hashedPassword = hashPassword(password);
        this.failedAttempts = 0;
        this.isLocked = false;
    }
    
    public boolean authenticate(String password) {
        if (isLocked) {
            System.out.println("Account locked due to failed attempts");
            return false;
        }
        
        if (verifyPassword(password, hashedPassword)) {
            resetFailedAttempts();
            System.out.println("Authentication successful");
            return true;
        } else {
            incrementFailedAttempts();
            System.out.println("Authentication failed");
            return false;
        }
    }
    
    private void incrementFailedAttempts() {
        failedAttempts++;
        if (failedAttempts >= 3) {
            isLocked = true;
            System.out.println("Account locked after 3 failed attempts");
        }
    }
    
    private String hashPassword(String password) {
        // SHA-256 hashing simulation
        return "hashed_" + password.hashCode();
    }
    
    private boolean verifyPassword(String input, String hashed) {
        return hashed.equals(hashPassword(input));
    }
    
    private void resetFailedAttempts() {
        failedAttempts = 0;
    }
}`
    },
    c: {
      name: "C",
      icon: "⚡", 
      level: 75,
      demoType: "memory_visualizer",
      capabilities: [
        "System-Level Programming",
        "Memory Management",
        "Low-Level Security",
        "Performance Optimization"
      ],
      sampleCode: `// Secure Memory Management
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct {
    char* data;
    size_t size;
    size_t capacity;
} SecureBuffer;

SecureBuffer* create_buffer(size_t initial_capacity) {
    SecureBuffer* buf = malloc(sizeof(SecureBuffer));
    if (!buf) return NULL;
    
    buf->data = calloc(initial_capacity, sizeof(char));
    if (!buf->data) {
        free(buf);
        return NULL;
    }
    
    buf->size = 0;
    buf->capacity = initial_capacity;
    printf("Buffer created: %zu bytes\\n", initial_capacity);
    return buf;
}

void secure_copy(SecureBuffer* buf, const char* src) {
    size_t len = strlen(src);
    if (len >= buf->capacity) {
        printf("Warning: Truncating input to prevent overflow\\n");
        len = buf->capacity - 1;
    }
    strncpy(buf->data, src, len);
    buf->data[len] = '\\0';
    buf->size = len;
    printf("Copied %zu bytes securely\\n", len);
}

void destroy_buffer(SecureBuffer* buf) {
    if (buf) {
        if (buf->data) {
            memset(buf->data, 0, buf->capacity); // Clear sensitive data
            free(buf->data);
        }
        free(buf);
        printf("Buffer destroyed and memory cleared\\n");
    }
}

int main() {
    printf("=== Secure Memory Management Demo ===\\n");
    SecureBuffer* buffer = create_buffer(256);
    secure_copy(buffer, "Sensitive security data");
    destroy_buffer(buffer);
    return 0;
}`
    },
    html: {
      name: "HTML",
      icon: "🌐",
      level: 90,
      demoType: "live_editor",
      capabilities: [
        "Semantic Web Structure",
        "Accessibility Implementation", 
        "Security-Focused Markup",
        "Progressive Enhancement"
      ]
    },
    css: {
      name: "CSS",
      icon: "🎨", 
      level: 85,
      demoType: "style_mixer",
      capabilities: [
        "Advanced Styling Techniques",
        "Responsive Design",
        "Animation & Transitions",
        "Performance Optimization"
      ]
    },
    "network-security": {
      name: "Network Security",
      icon: "🛡️",
      level: 70,
      demoType: "network_topology",
      capabilities: [
        "Network Architecture Design",
        "Firewall Configuration",
        "Intrusion Detection",
        "Threat Analysis"
      ]
    },
    "threat-analysis": {
      name: "Threat Analysis", 
      icon: "🔍",
      level: 65,
      demoType: "threat_dashboard",
      capabilities: [
        "Vulnerability Assessment",
        "Risk Evaluation",
        "Security Monitoring", 
        "Incident Response"
      ]
    },
    "data-structures": {
      name: "Data Structures",
      icon: "📊",
      level: 80, 
      demoType: "algorithm_visualizer",
      capabilities: [
        "Algorithm Optimization",
        "Complexity Analysis",
        "Performance Tuning",
        "System Design"
      ]
    }
  },
  certifications: [
    {
      name: "Google Cloud Cybersecurity",
      duration: "2024-25", 
      type: "1-year training",
      status: "ongoing",
      skills: ["Cloud Security", "Threat Analysis", "Incident Response"]
    },
    {
      name: "Fundamentals of Cybersecurity",
      issuer: "Infosys Springboard",
      year: "2024",
      status: "completed",
      skills: ["Network Security", "Cyber Threats", "Defense Mechanisms"]
    },
    {
      name: "Data Structures Training", 
      issuer: "Allenhouse Institute",
      duration: "2023-24",
      status: "completed",
      skills: ["Algorithm Optimization", "Problem Solving", "Complexity Analysis"]
    },
    {
      name: "Project Charter with Google Docs",
      issuer: "Coursera", 
      year: "2024",
      status: "completed",
      skills: ["Project Management", "Documentation", "Professional Processes"]
    }
  ]
};

// DOM Elements
const modal = document.getElementById('skillModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// Navigation functionality
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
      
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Update active navigation based on scroll position
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    { threshold: 0.6, rootMargin: '-10% 0px -60% 0px' }
  );

  sections.forEach(section => observer.observe(section));
}

// Scroll to section function
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Modal functionality
function openModal(content) {
  modalBody.innerHTML = content;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

// Interactive Skill Demonstrations
function generatePythonDemo() {
  return `
    <div class="demo-container">
      <div class="demo-header">
        <div class="demo-icon">🐍</div>
        <h2>Python Cybersecurity Demo</h2>
        <div class="demo-category">Interactive Code Executor</div>
      </div>
      
      <div class="code-editor-container">
        <div class="editor-header">
          <span class="editor-title">Python Security Scanner</span>
          <button class="run-btn" onclick="runPythonCode()">▶ Run Code</button>
        </div>
        <textarea id="pythonEditor" class="code-editor">${portfolioData.skills.python.sampleCode}</textarea>
      </div>
      
      <div class="output-container">
        <div class="output-header">Output Terminal</div>
        <div id="pythonOutput" class="terminal-output"></div>
      </div>
      
      <div class="capabilities-grid">
        ${portfolioData.skills.python.capabilities.map(cap => 
          `<div class="capability-item">
            <span class="capability-icon">✓</span>
            <span>${cap}</span>
          </div>`
        ).join('')}
      </div>
    </div>
  `;
}

function generateJavaDemo() {
  return `
    <div class="demo-container">
      <div class="demo-header">
        <div class="demo-icon">☕</div>
        <h2>Java Security Architecture</h2>
        <div class="demo-category">Class Structure Visualizer</div>
      </div>
      
      <div class="java-visualizer">
        <div class="class-diagram">
          <div class="java-class" onclick="expandClass('auth')">
            <div class="class-header">SecureAuth</div>
            <div class="class-fields">
              <div class="field private">- username: String</div>
              <div class="field private">- hashedPassword: String</div>
              <div class="field private">- failedAttempts: int</div>
              <div class="field private">- isLocked: boolean</div>
            </div>
            <div class="class-methods">
              <div class="method public">+ authenticate(password: String): boolean</div>
              <div class="method private">- incrementFailedAttempts(): void</div>
              <div class="method private">- hashPassword(password: String): String</div>
            </div>
          </div>
        </div>
        
        <div class="code-preview">
          <div class="code-header">Java Security Implementation</div>
          <pre id="javaCodePreview" class="code-display">${portfolioData.skills.java.sampleCode}</pre>
        </div>
      </div>
      
      <div class="oop-concepts">
        <h3>OOP Security Concepts Demonstrated</h3>
        <div class="concept-grid">
          <div class="concept-item">
            <div class="concept-title">Encapsulation</div>
            <div class="concept-desc">Private fields protect sensitive data</div>
          </div>
          <div class="concept-item">
            <div class="concept-title">Data Validation</div>
            <div class="concept-desc">Input validation prevents injection attacks</div>
          </div>
          <div class="concept-item">
            <div class="concept-title">Access Control</div>
            <div class="concept-desc">Account locking mechanism for security</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function generateCDemo() {
  return `
    <div class="demo-container">
      <div class="demo-header">
        <div class="demo-icon">⚡</div>
        <h2>C Memory Management</h2>
        <div class="demo-category">Memory Visualizer & System Programming</div>
      </div>
      
      <div class="memory-visualizer">
        <div class="memory-section">
          <h3>Memory Layout</h3>
          <div class="memory-blocks">
            <div class="memory-block stack">
              <div class="block-title">Stack</div>
              <div class="block-content">
                <div class="stack-frame">main()</div>
                <div class="stack-frame">create_buffer()</div>
              </div>
            </div>
            <div class="memory-block heap">
              <div class="block-title">Heap</div>
              <div class="block-content">
                <div class="heap-alloc">SecureBuffer*</div>
                <div class="heap-alloc">data[256]</div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="memory-controls">
          <button class="mem-btn" onclick="simulateAllocation()">Allocate Memory</button>
          <button class="mem-btn" onclick="simulateCopy()">Secure Copy</button>
          <button class="mem-btn" onclick="simulateCleanup()">Cleanup Memory</button>
        </div>
        
        <div class="memory-output">
          <div class="output-header">Memory Operations Log</div>
          <div id="memoryLog" class="memory-log"></div>
        </div>
      </div>
      
      <div class="code-preview">
        <pre class="code-display">${portfolioData.skills.c.sampleCode}</pre>
      </div>
      
      <div class="security-features">
        <h3>Security Features Implemented</h3>
        <div class="security-grid">
          <div class="security-item">
            <span class="security-icon">🛡️</span>
            <span>Buffer Overflow Prevention</span>
          </div>
          <div class="security-item">
            <span class="security-icon">🔒</span>
            <span>Memory Cleanup & Zeroing</span>
          </div>
          <div class="security-item">
            <span class="security-icon">⚡</span>
            <span>Bounds Checking</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function generateHTMLDemo() {
  return `
    <div class="demo-container">
      <div class="demo-header">
        <div class="demo-icon">🌐</div>
        <h2>HTML Live Editor</h2>
        <div class="demo-category">Real-time Code Preview</div>
      </div>
      
      <div class="live-editor">
        <div class="editor-pane">
          <div class="editor-header">HTML Editor</div>
          <textarea id="htmlEditor" class="code-editor" oninput="updateHTMLPreview()"><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Secure Web Form</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .form-container { max-width: 400px; margin: 0 auto; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; }
        .submit-btn { background: #007bff; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; }
        .security-note { background: #f8f9fa; padding: 10px; border-radius: 4px; margin-top: 10px; font-size: 14px; }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Secure Contact Form</h2>
        <form>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px;" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Secure Message</button>
        </form>
        <div class="security-note">
            <strong>Security Features:</strong><br>
            • Input validation with required attributes<br>
            • Email type validation<br>
            • Accessible form structure<br>
            • Semantic HTML5 elements
        </div>
    </div>
</body>
</html></textarea>
        </div>
        <div class="preview-pane">
          <div class="preview-header">Live Preview</div>
          <iframe id="htmlPreview" class="html-preview"></iframe>
        </div>
      </div>
    </div>
  `;
}

function generateCSSDemo() {
  return `
    <div class="demo-container">
      <div class="demo-header">
        <div class="demo-icon">🎨</div>
        <h2>CSS Style Mixer</h2>
        <div class="demo-category">Interactive Design Tools</div>
      </div>
      
      <div class="css-controls">
        <div class="control-group">
          <label>Background Color:</label>
          <input type="color" id="bgColor" value="#1a1f2e" onchange="updateCSSPreview()">
        </div>
        <div class="control-group">
          <label>Text Color:</label>
          <input type="color" id="textColor" value="#ffffff" onchange="updateCSSPreview()">
        </div>
        <div class="control-group">
          <label>Border Radius:</label>
          <input type="range" id="borderRadius" min="0" max="30" value="8" onchange="updateCSSPreview()">
          <span id="radiusValue">8px</span>
        </div>
        <div class="control-group">
          <label>Animation Speed:</label>
          <input type="range" id="animSpeed" min="0.5" max="3" step="0.1" value="1" onchange="updateCSSPreview()">
          <span id="speedValue">1s</span>
        </div>
      </div>
      
      <div class="css-preview-container">
        <div id="cssPreviewBox" class="css-preview-box">
          <h3>Interactive CSS Demo</h3>
          <p>Adjust the controls above to see real-time CSS changes</p>
          <div class="demo-element">Hover over me!</div>
        </div>
      </div>
      
      <div class="generated-css">
        <div class="css-header">Generated CSS</div>
        <pre id="cssCode" class="css-code-display"></pre>
      </div>
    </div>
  `;
}

function generateNetworkDemo() {
  return `
    <div class="demo-container">
      <div class="demo-header">
        <div class="demo-icon">🛡️</div>
        <h2>Network Security Topology</h2>
        <div class="demo-category">Interactive Network Simulation</div>
      </div>
      
      <div class="network-topology">
        <div class="network-node router" onclick="showNodeInfo('router')">
          <div class="node-icon">🔀</div>
          <div class="node-label">Router</div>
          <div class="node-status online"></div>
        </div>
        <div class="network-node firewall" onclick="showNodeInfo('firewall')">
          <div class="node-icon">🛡️</div>
          <div class="node-label">Firewall</div>
          <div class="node-status online"></div>
        </div>
        <div class="network-node server" onclick="showNodeInfo('server')">
          <div class="node-icon">🖥️</div>
          <div class="node-label">Web Server</div>
          <div class="node-status online"></div>
        </div>
        <div class="network-node client" onclick="showNodeInfo('client')">
          <div class="node-icon">💻</div>
          <div class="node-label">Client</div>
          <div class="node-status online"></div>
        </div>
        
        <svg class="network-connections">
          <line x1="100" y1="100" x2="200" y2="100" class="connection"></line>
          <line x1="200" y1="100" x2="300" y2="100" class="connection"></line>
          <line x1="300" y1="100" x2="400" y2="100" class="connection"></line>
        </svg>
      </div>
      
      <div class="threat-simulation">
        <h3>Threat Simulation</h3>
        <div class="threat-controls">
          <button class="threat-btn" onclick="simulateThreat('ddos')">Simulate DDoS Attack</button>
          <button class="threat-btn" onclick="simulateThreat('intrusion')">Intrusion Attempt</button>
          <button class="threat-btn" onclick="simulateThreat('malware')">Malware Detection</button>
        </div>
        
        <div class="threat-log">
          <div class="log-header">Security Events Log</div>
          <div id="securityLog" class="security-log"></div>
        </div>
      </div>
    </div>
  `;
}

function generateThreatDashboard() {
  return `
    <div class="demo-container">
      <div class="demo-header">
        <div class="demo-icon">🔍</div>
        <h2>Real-time Security Dashboard</h2>
        <div class="demo-category">Threat Analysis & Monitoring</div>
      </div>
      
      <div class="dashboard-metrics">
        <div class="metric-card">
          <div class="metric-title">Threats Blocked</div>
          <div class="metric-value" id="threatsBlocked">1,247</div>
          <div class="metric-change positive">+12% from last hour</div>
        </div>
        <div class="metric-card">
          <div class="metric-title">Active Connections</div>
          <div class="metric-value" id="activeConnections">156</div>
          <div class="metric-change neutral">Normal levels</div>
        </div>
        <div class="metric-card">
          <div class="metric-title">Risk Level</div>
          <div class="metric-value risk-low" id="riskLevel">LOW</div>
          <div class="metric-change positive">All systems secure</div>
        </div>
      </div>
      
      <div class="threat-analysis">
        <div class="threat-types">
          <h3>Threat Distribution</h3>
          <div class="threat-chart">
            <div class="threat-bar" style="height: 60%;">
              <div class="threat-label">Malware</div>
              <div class="threat-percentage">35%</div>
            </div>
            <div class="threat-bar" style="height: 40%;">
              <div class="threat-label">Phishing</div>
              <div class="threat-percentage">25%</div>
            </div>
            <div class="threat-bar" style="height: 30%;">
              <div class="threat-label">DDoS</div>
              <div class="threat-percentage">20%</div>
            </div>
            <div class="threat-bar" style="height: 25%;">
              <div class="threat-label">Intrusion</div>
              <div class="threat-percentage">20%</div>
            </div>
          </div>
        </div>
        
        <div class="recent-threats">
          <h3>Recent Threat Activity</h3>
          <div class="threat-timeline">
            <div class="threat-event">
              <div class="event-time">14:32</div>
              <div class="event-type malware">Malware Blocked</div>
              <div class="event-source">192.168.1.45</div>
            </div>
            <div class="threat-event">
              <div class="event-time">14:28</div>
              <div class="event-type phishing">Phishing Detected</div>
              <div class="event-source">suspicious-link.com</div>
            </div>
            <div class="threat-event">
              <div class="event-time">14:25</div>
              <div class="event-type intrusion">Login Attempt Failed</div>
              <div class="event-source">10.0.0.32</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function generateAlgorithmDemo() {
  return `
    <div class="demo-container">
      <div class="demo-header">
        <div class="demo-icon">📊</div>
        <h2>Algorithm Visualizer</h2>
        <div class="demo-category">Data Structures & Complexity Analysis</div>
      </div>
      
      <div class="algorithm-controls">
        <select id="algorithmSelect" onchange="changeAlgorithm()">
          <option value="bubble">Bubble Sort</option>
          <option value="quick">Quick Sort</option>
          <option value="merge">Merge Sort</option>
          <option value="binary">Binary Search</option>
        </select>
        <button class="algo-btn" onclick="startVisualization()">Start Visualization</button>
        <button class="algo-btn" onclick="resetVisualization()">Reset</button>
      </div>
      
      <div class="visualization-container">
        <div id="arrayVisualization" class="array-visualization">
          <div class="array-element" style="height: 60px;">45</div>
          <div class="array-element" style="height: 30px;">23</div>
          <div class="array-element" style="height: 80px;">67</div>
          <div class="array-element" style="height: 40px;">34</div>
          <div class="array-element" style="height: 90px;">89</div>
          <div class="array-element" style="height: 20px;">12</div>
          <div class="array-element" style="height: 70px;">56</div>
          <div class="array-element" style="height: 50px;">78</div>
        </div>
      </div>
      
      <div class="complexity-analysis">
        <h3>Complexity Analysis</h3>
        <div class="complexity-table">
          <div class="complexity-row">
            <div class="complexity-label">Time Complexity:</div>
            <div class="complexity-value" id="timeComplexity">O(n²)</div>
          </div>
          <div class="complexity-row">
            <div class="complexity-label">Space Complexity:</div>
            <div class="complexity-value" id="spaceComplexity">O(1)</div>
          </div>
          <div class="complexity-row">
            <div class="complexity-label">Best Case:</div>
            <div class="complexity-value" id="bestCase">O(n)</div>
          </div>
          <div class="complexity-row">
            <div class="complexity-label">Worst Case:</div>
            <div class="complexity-value" id="worstCase">O(n²)</div>
          </div>
        </div>
      </div>
      
      <div class="algorithm-steps">
        <h3>Algorithm Steps</h3>
        <div id="algorithmSteps" class="steps-container">
          <div class="step">1. Compare adjacent elements</div>
          <div class="step">2. Swap if they are in wrong order</div>
          <div class="step">3. Continue until no swaps needed</div>
          <div class="step">4. Array is now sorted</div>
        </div>
      </div>
    </div>
  `;
}

// Interactive Functions
function runPythonCode() {
  const output = document.getElementById('pythonOutput');
  output.innerHTML = '<div class="output-line">>>> Running Python security scanner...</div>';
  
  // Simulate code execution with delay
  setTimeout(() => {
    const lines = [
      '=== Port Scanner Demo ===',
      `Scanning localhost at ${new Date().toLocaleTimeString()}`,
      'Common ports: 21, 22, 80, 443, 3389',
      'Port 21: CLOSED',
      'Port 22: CLOSED', 
      'Port 80: OPEN',
      'Port 443: OPEN',
      'Port 3389: CLOSED',
      '',
      'Scan completed successfully!',
      '',
      '>>> Security analysis complete. 2 open ports found.'
    ];
    
    output.innerHTML = lines.map(line => `<div class="output-line">${line}</div>`).join('');
  }, 1500);
}

function updateHTMLPreview() {
  const htmlCode = document.getElementById('htmlEditor').value;
  const preview = document.getElementById('htmlPreview');
  const previewDoc = preview.contentDocument || preview.contentWindow.document;
  previewDoc.open();
  previewDoc.write(htmlCode);
  previewDoc.close();
}

function updateCSSPreview() {
  const bgColor = document.getElementById('bgColor').value;
  const textColor = document.getElementById('textColor').value;
  const borderRadius = document.getElementById('borderRadius').value;
  const animSpeed = document.getElementById('animSpeed').value;
  
  document.getElementById('radiusValue').textContent = borderRadius + 'px';
  document.getElementById('speedValue').textContent = animSpeed + 's';
  
  const previewBox = document.getElementById('cssPreviewBox');
  previewBox.style.background = bgColor;
  previewBox.style.color = textColor;
  previewBox.style.borderRadius = borderRadius + 'px';
  previewBox.style.animationDuration = animSpeed + 's';
  
  const cssCode = `
.css-preview-box {
    background: ${bgColor};
    color: ${textColor};
    border-radius: ${borderRadius}px;
    animation-duration: ${animSpeed}s;
    transition: all 0.3s ease;
    padding: 2rem;
    border: 2px solid #00F5FF;
}

.demo-element {
    background: rgba(0, 245, 255, 0.1);
    padding: 1rem;
    border-radius: ${Math.max(0, borderRadius - 4)}px;
    transition: transform 0.3s ease;
}

.demo-element:hover {
    transform: scale(1.05);
    background: rgba(0, 245, 255, 0.2);
}`;
  
  document.getElementById('cssCode').textContent = cssCode;
}

function simulateAllocation() {
  const log = document.getElementById('memoryLog');
  log.innerHTML += '<div class="log-entry">malloc(sizeof(SecureBuffer)) - SUCCESS: 0x7fff5fbff8a0</div>';
  log.innerHTML += '<div class="log-entry">calloc(256, sizeof(char)) - SUCCESS: 0x7f8b8bc00000</div>';
  log.scrollTop = log.scrollHeight;
}

function simulateCopy() {
  const log = document.getElementById('memoryLog');
  log.innerHTML += '<div class="log-entry">secure_copy() - Input length: 24 bytes</div>';
  log.innerHTML += '<div class="log-entry">strncpy() - Copying 24 bytes safely</div>';
  log.innerHTML += '<div class="log-entry">Buffer bounds check: PASSED</div>';
  log.scrollTop = log.scrollHeight;
}

function simulateCleanup() {
  const log = document.getElementById('memoryLog');
  log.innerHTML += '<div class="log-entry">memset() - Clearing sensitive data</div>';
  log.innerHTML += '<div class="log-entry">free() - Deallocating buffer memory</div>';
  log.innerHTML += '<div class="log-entry">Memory cleanup: COMPLETE</div>';
  log.scrollTop = log.scrollHeight;
}

function simulateThreat(threatType) {
  const log = document.getElementById('securityLog');
  const timestamp = new Date().toLocaleTimeString();
  const threats = {
    ddos: { type: 'DDoS Attack', severity: 'HIGH', action: 'Traffic filtered, connections rate-limited' },
    intrusion: { type: 'Intrusion Attempt', severity: 'MEDIUM', action: 'Access blocked, IP blacklisted' },
    malware: { type: 'Malware Detection', severity: 'HIGH', action: 'File quarantined, system scan initiated' }
  };
  
  const threat = threats[threatType];
  log.innerHTML += `<div class="log-entry threat-${threatType}">
    <span class="log-time">[${timestamp}]</span>
    <span class="log-type">${threat.type}</span>
    <span class="log-severity ${threat.severity.toLowerCase()}">${threat.severity}</span>
    <span class="log-action">${threat.action}</span>
  </div>`;
  log.scrollTop = log.scrollHeight;
}

function startVisualization() {
  const elements = document.querySelectorAll('.array-element');
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.style.background = '#00F5FF';
      el.style.transform = 'scale(1.1)';
      setTimeout(() => {
        el.style.background = '#39FF14';
        el.style.transform = 'scale(1)';
      }, 300);
    }, index * 200);
  });
}

function resetVisualization() {
  const elements = document.querySelectorAll('.array-element');
  elements.forEach(el => {
    el.style.background = 'rgba(0, 245, 255, 0.3)';
    el.style.transform = 'scale(1)';
  });
}

// Skill modal generation
function generateSkillModal(skillKey) {
  const skill = portfolioData.skills[skillKey];
  if (!skill) return '';

  switch (skill.demoType) {
    case 'code_executor':
      return generatePythonDemo();
    case 'class_visualizer':
      return generateJavaDemo();
    case 'memory_visualizer':
      return generateCDemo();
    case 'live_editor':
      return generateHTMLDemo();
    case 'style_mixer':
      return generateCSSDemo();
    case 'network_topology':
      return generateNetworkDemo();
    case 'threat_dashboard':
      return generateThreatDashboard();
    case 'algorithm_visualizer':
      return generateAlgorithmDemo();
    default:
      return `<div class="demo-container">
        <div class="demo-header">
          <div class="demo-icon">${skill.icon}</div>
          <h2>${skill.name}</h2>
          <div class="demo-category">Interactive Demonstration</div>
        </div>
        <div class="capabilities-grid">
          ${skill.capabilities.map(cap => 
            `<div class="capability-item">
              <span class="capability-icon">✓</span>
              <span>${cap}</span>
            </div>`
          ).join('')}
        </div>
      </div>`;
  }
}

// Event listeners
function initEventListeners() {
  // Modal close events
  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Skill orb events
  document.querySelectorAll('.skill-orb').forEach(orb => {
    orb.addEventListener('click', () => {
      const skillKey = orb.getAttribute('data-skill');
      const content = generateSkillModal(skillKey);
      openModal(content);
      
      // Initialize HTML preview if it's HTML demo
      setTimeout(() => {
        if (skillKey === 'html') {
          updateHTMLPreview();
        } else if (skillKey === 'css') {
          updateCSSPreview();
        }
      }, 100);
    });
  });

  // Project architecture interaction
  document.querySelectorAll('.arch-layer').forEach(layer => {
    layer.addEventListener('click', () => {
      const layerType = layer.getAttribute('data-layer');
      layer.style.transform = 'translateZ(200px) scale(1.2)';
      setTimeout(() => {
        layer.style.transform = layer.classList.contains('frontend-layer') ? 'translateZ(100px)' :
          layer.classList.contains('backend-layer') ? 'translateZ(0px)' : 'translateZ(-100px)';
      }, 1000);
    });
  });

  // Animate metrics on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateMetrics();
      }
    });
  });
  
  const metricsSection = document.querySelector('.project-metrics');
  if (metricsSection) observer.observe(metricsSection);
}

function animateMetrics() {
  document.querySelectorAll('.metric-value[data-animate]').forEach(metric => {
    const targetValue = parseInt(metric.getAttribute('data-animate'));
    let currentValue = 0;
    const increment = targetValue / 50;
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(timer);
      }
      metric.textContent = Math.floor(currentValue);
    }, 30);
  });
}

// Parallax effects
function initParallaxEffects() {
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax for particles
    document.querySelectorAll('.particle').forEach((particle, index) => {
      const speed = 0.5 + (index * 0.1);
      particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    // Parallax for holographic shapes
    document.querySelectorAll('.holo-shape').forEach((shape, index) => {
      const speed = 0.3 + (index * 0.05);
      shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
  });
}

// Scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  document.querySelectorAll('section, .skill-orb, .achievement-card, .info-card').forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(element);
  });
}

// Add dynamic styles for demo components
function addDemoStyles() {
  const styles = `
    <style>
      .demo-container { max-width: 900px; }
      .demo-header { text-align: center; margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 1px solid var(--glass-border); }
      .demo-icon { font-size: 4rem; margin-bottom: 1rem; }
      .demo-category { color: var(--neon-green); font-size: 1rem; text-transform: uppercase; font-weight: 500; }
      
      .code-editor-container, .live-editor { margin-bottom: 2rem; }
      .editor-header { display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: var(--cyber-gray); border-radius: 8px 8px 0 0; }
      .editor-title { color: var(--text-primary); font-weight: 600; }
      .run-btn { background: var(--neon-green); color: var(--cyber-dark); border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-weight: 600; }
      
      .code-editor { width: 100%; min-height: 300px; background: #1a1f2e; color: #ffffff; border: 1px solid var(--glass-border); border-radius: 0 0 8px 8px; padding: 1rem; font-family: 'Courier New', monospace; font-size: 14px; resize: vertical; }
      
      .output-container { margin-top: 2rem; }
      .output-header { padding: 0.5rem 1rem; background: var(--cyber-gray); color: var(--text-primary); font-weight: 600; border-radius: 8px 8px 0 0; }
      .terminal-output { background: #000; color: #00ff00; padding: 1rem; border-radius: 0 0 8px 8px; min-height: 200px; font-family: 'Courier New', monospace; font-size: 14px; border: 1px solid var(--glass-border); border-top: none; }
      .output-line { margin-bottom: 0.5rem; }
      
      .capabilities-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; margin-top: 2rem; }
      .capability-item { display: flex; align-items: center; gap: 0.5rem; padding: 1rem; background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 8px; }
      .capability-icon { color: var(--neon-green); font-weight: bold; }
      
      .java-visualizer { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem; }
      .class-diagram { padding: 2rem; }
      .java-class { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 8px; padding: 1.5rem; cursor: pointer; transition: transform 0.3s ease; }
      .java-class:hover { transform: translateY(-5px); }
      .class-header { font-size: 1.2rem; font-weight: bold; color: var(--neon-blue); margin-bottom: 1rem; text-align: center; }
      .class-fields, .class-methods { margin-bottom: 1rem; }
      .field, .method { padding: 0.3rem 0; font-family: 'Courier New', monospace; font-size: 0.9rem; }
      .field.private, .method.private { color: #ff6b6b; }
      .method.public { color: var(--neon-green); }
      
      .code-preview { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 8px; padding: 1rem; }
      .code-header { color: var(--text-primary); font-weight: 600; margin-bottom: 1rem; }
      .code-display { background: #1a1f2e; color: #ffffff; padding: 1rem; border-radius: 4px; font-family: 'Courier New', monospace; font-size: 12px; overflow-x: auto; }
      
      .oop-concepts { margin-top: 2rem; }
      .concept-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1rem; }
      .concept-item { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 8px; padding: 1rem; text-align: center; }
      .concept-title { font-weight: bold; color: var(--neon-blue); margin-bottom: 0.5rem; }
      .concept-desc { font-size: 0.9rem; color: var(--text-secondary); }
      
      .memory-visualizer { margin-bottom: 2rem; }
      .memory-section { margin-bottom: 2rem; }
      .memory-blocks { display: flex; gap: 2rem; justify-content: center; }
      .memory-block { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 8px; padding: 1rem; min-width: 150px; }
      .block-title { font-weight: bold; color: var(--neon-blue); text-align: center; margin-bottom: 1rem; }
      .block-content { display: flex; flex-direction: column; gap: 0.5rem; }
      .stack-frame, .heap-alloc { background: rgba(0, 245, 255, 0.2); padding: 0.5rem; border-radius: 4px; text-align: center; font-size: 0.9rem; }
      
      .memory-controls { display: flex; gap: 1rem; justify-content: center; margin: 2rem 0; }
      .mem-btn { background: var(--neon-blue); color: var(--cyber-dark); border: none; padding: 0.7rem 1.2rem; border-radius: 4px; cursor: pointer; font-weight: 600; }
      .mem-btn:hover { background: var(--neon-green); }
      
      .memory-output { margin-top: 2rem; }
      .memory-log { background: #000; color: #00ff00; padding: 1rem; border-radius: 8px; min-height: 150px; font-family: 'Courier New', monospace; font-size: 14px; max-height: 200px; overflow-y: auto; }
      .log-entry { margin-bottom: 0.5rem; }
      
      .live-editor { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
      .editor-pane, .preview-pane { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 8px; }
      .preview-header { padding: 0.5rem 1rem; background: var(--cyber-gray); color: var(--text-primary); font-weight: 600; border-radius: 8px 8px 0 0; }
      .html-preview { width: 100%; height: 400px; border: none; border-radius: 0 0 8px 8px; }
      
      .css-controls { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem; }
      .control-group { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 8px; padding: 1rem; }
      .control-group label { display: block; margin-bottom: 0.5rem; color: var(--text-primary); font-weight: 600; }
      .control-group input { width: 100%; }
      
      .css-preview-container { margin: 2rem 0; }
      .css-preview-box { background: var(--cyber-gray); color: var(--text-primary); padding: 2rem; border-radius: 8px; border: 2px solid var(--neon-blue); text-align: center; animation: pulse 2s infinite; }
      .demo-element { background: rgba(0, 245, 255, 0.1); padding: 1rem; margin: 1rem auto; border-radius: 4px; transition: transform 0.3s ease; max-width: 200px; cursor: pointer; }
      .demo-element:hover { transform: scale(1.05); background: rgba(0, 245, 255, 0.2); }
      
      .generated-css { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 8px; padding: 1rem; }
      .css-code-display { background: #1a1f2e; color: #ffffff; padding: 1rem; border-radius: 4px; font-family: 'Courier New', monospace; font-size: 12px; white-space: pre; }
      
      @keyframes pulse {
        0%, 100% { border-color: var(--neon-blue); }
        50% { border-color: var(--neon-green); }
      }
      
      @media (max-width: 768px) {
        .java-visualizer, .live-editor { grid-template-columns: 1fr; }
        .memory-blocks { flex-direction: column; align-items: center; }
        .css-controls { grid-template-columns: 1fr; }
      }
    </style>
  `;
  document.head.insertAdjacentHTML('beforeend', styles);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initEventListeners();
  initParallaxEffects();
  initScrollAnimations();
  addDemoStyles();
  
  console.log('🚀 Interactive Cybersecurity Portfolio Initialized');
});

// Make scrollToSection available globally
window.scrollToSection = scrollToSection;