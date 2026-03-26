---
layout: default
title: Summit Booth Themes
---

<div class="notice">
  <strong>Important updates</strong>
  <ul>
    <li>The themes of the demo booth (8 pods) were finalized on 03/04.</li>
    <li>Naming is not finalized yet; review the "Booth Naming Options" working notes separately.</li>
    <li>The list of demos in each pod/booth is still in progress.</li>
  </ul>
</div>

<div class="tabs">
  <button class="tab-button" data-tab="theme-a">A: AIOps</button>
  <button class="tab-button" data-tab="theme-b">B: Workflows &amp; Orchestration</button>
  <button class="tab-button" data-tab="theme-c">C: Developer Experience</button>
  <button class="tab-button" data-tab="theme-d">D: Policy, Governance, Compliance</button>
  <button class="tab-button" data-tab="theme-e">E: Infrastructure &amp; Network</button>
  <button class="tab-button" data-tab="theme-f">F: AAP on Cloud</button>
  <button class="tab-button" data-tab="theme-g">G: Metrics &amp; Telemetry</button>
  <button class="tab-button" data-tab="theme-h">H: AAP 101</button>
</div>

<section class="tab-panel" id="theme-a">
  <h2>Theme A - AIOps</h2>
  <p class="owner">Owner: Anshul</p>
  <div class="split">
    <div class="card">
      <h3>Existing demos</h3>
      <ul>
        <li>Automation for AIOps</li>
        <li>Self Healing Infrastructure with Ansible</li>
      </ul>
    </div>
    <div class="card">
      <h3>New opportunities / What's New in AAP 2.7</h3>
      <ul>
        <li>Automation AI Infrastructure</li>
        <li>Automation Multi-Repo Deployments with EDA</li>
        <li>AAP MCP Server with telemetry</li>
        <li>Observability to Remediation (Tier-1)</li>
        <li>Splunk, ServiceNow, IBM Instana integrations</li>
        <li>Bring-your-own-knowledge ALIA RAG pipeline</li>
      </ul>
    </div>
    <div class="card">
      <h3>Proposed demos (arcades/videos)</h3>
      <ol>
        <li>Automation for AIOps (done)</li>
        <li>All Tier-1 AIOps arcades: Instana, SNOW, Splunk (in progress)</li>
        <li>Reserved for another showcase</li>
      </ol>
    </div>
  </div>
</section>

<section class="tab-panel" id="theme-b">
  <h2>Theme B - Automation Workflows and Orchestration</h2>
  <p class="owner">Owner: Roger</p>
  <div class="split">
    <div class="card">
      <h3>Existing demos</h3>
      <ul>
        <li>None (net new)</li>
      </ul>
    </div>
    <div class="card">
      <h3>New opportunities / What's New in AAP 2.7</h3>
      <ul>
        <li>Agentic-capable workflows</li>
        <li>Human-in-the-loop approvals</li>
        <li>Drag-and-drop canvas</li>
        <li>Use AAP workflows and job templates natively in canvas</li>
        <li>AI agents embedded in workflows</li>
      </ul>
    </div>
    <div class="card">
      <h3>Proposed demos (arcades/videos)</h3>
      <ol>
        <li>Single overview video (not started)</li>
      </ol>
    </div>
  </div>
</section>

<section class="tab-panel" id="theme-c">
  <h2>Theme C - Developer Experience</h2>
  <p class="owner">Owner: Leo</p>
  <div class="split">
    <div class="card">
      <h3>Existing demos</h3>
      <ul>
        <li>Installing Dev Container in VSCode</li>
        <li>Integrate Ansible with OpenShift in Developer Sandbox</li>
        <li>Provision AAP in Developer Sandbox</li>
        <li>Integrating AAP with Red Hat Developer Hub</li>
      </ul>
    </div>
    <div class="card">
      <h3>New opportunities / What's New in AAP 2.7</h3>
      <ul>
        <li>AI client support for AAP MCP Server (Claude, Cursor, Copilot, Bob, LibraChat)</li>
        <li>MCP Server for VS Code</li>
        <li>EE Builder with content discovery</li>
        <li>AAP MCP plugins with EEs</li>
        <li>AI infrastructure provider in VS Code Ansible extension</li>
        <li>Refreshed Molecule for enhanced collection testing</li>
        <li>Automation Code Assistant with pluggable LLMs</li>
      </ul>
    </div>
    <div class="card">
      <h3>Proposed demos (arcades/videos)</h3>
      <ol>
        <li>Anshul demo with Claude on Vertex and/or RHEL AI on Vertex inside VS Code extension (not started)</li>
        <li>Configure Cursor, Claude, Bob, and Copilot for AAP MCP Server (2/4 completed)</li>
        <li>MCP Server for Ansible DevTools (not started)</li>
      </ol>
    </div>
  </div>
</section>

<section class="tab-panel" id="theme-d">
  <h2>Theme D - Policy, Governance, and Compliance</h2>
  <p class="owner">Owner: Nuno</p>
  <div class="split">
    <div class="card">
      <h3>Existing demos</h3>
      <ul>
        <li>Manage Ansible Secrets with Hashicorp Vault</li>
        <li>AAP and Red Hat Insights</li>
        <li>Policy Enforcement with AAP</li>
      </ul>
    </div>
    <div class="card">
      <h3>New opportunities / What's New in AAP 2.7</h3>
      <ul>
        <li>Zero Trust</li>
        <li>API authorization via external OAuth token (for example, AzureAD)</li>
        <li>Compliance and governance improvements</li>
        <li>Post-quantum cryptography in AAP</li>
      </ul>
    </div>
    <div class="card">
      <h3>Proposed demos (arcades/videos)</h3>
      <ol>
        <li>Security Automation Overview (in progress)</li>
        <li>Manage Ansible Secrets with Hashicorp Vault (done?)</li>
        <li>Policy Enforcement with AAP (done)</li>
        <li>ZT topic (not started)</li>
        <li>Claude skill concept (not started)</li>
      </ol>
    </div>
  </div>
</section>

<section class="tab-panel" id="theme-e">
  <h2>Theme E - Infrastructure and Network Automation</h2>
  <p class="owner">Owner: Aubrey</p>
  <div class="split">
    <div class="card">
      <h3>Existing demos</h3>
      <ul>
        <li>Network automation: NetBox custom credential type, Cisco Meraki, AAP network automation</li>
        <li>Virtualization: VM migration to OpenShift, managing OpenShift VMs with AAP</li>
        <li>RHEL: patching VMs, deploy/remove apps</li>
        <li>Windows: AD automation, Day 2 VM operations, Windows updates</li>
      </ul>
    </div>
    <div class="card">
      <h3>New opportunities / What's New in AAP 2.7</h3>
      <ul>
        <li>Collection enhancements demos</li>
        <li>MECM integration</li>
        <li>Compliance and SCOM angles</li>
        <li>DR / EDB co-sell quick deck support</li>
      </ul>
      <p class="small">
        MECM reference:
        <a href="https://interact.redhat.com/share/idjdi8FjHr3O9jkQkhnf" target="_blank" rel="noopener">interactive link</a>
      </p>
    </div>
    <div class="card">
      <h3>Proposed demos (arcades/videos)</h3>
      <ol>
        <li>Overview arcade for Virtual Infrastructure Management (done)</li>
        <li>Overview arcade for RHEL (done)</li>
        <li>Automating Day 2 Windows VM Operations (done)</li>
        <li>Network automation with AAP (done)</li>
      </ol>
    </div>
  </div>
</section>

<section class="tab-panel" id="theme-f">
  <h2>Theme F - AAP on Cloud</h2>
  <p class="owner">Owner: Hicham</p>
  <div class="split">
    <div class="card">
      <h3>Existing demos</h3>
      <ul>
        <li>Automated Multi-Cloud Insights with AAP</li>
        <li>Ansible Automation on AWS</li>
        <li>Ansible on Azure</li>
        <li>Subscription activation, managed application, mesh configuration</li>
        <li>Ansible &amp; Terraform - Better Together</li>
      </ul>
    </div>
    <div class="card">
      <h3>New opportunities / What's New in AAP 2.7</h3>
      <ul>
        <li>Updated Ansible/Terraform content</li>
        <li>Updated AIOps arcades for AWS, Azure, Google Cloud</li>
        <li>AWS collection and amazon.ai updates (Bedrock AI)</li>
        <li>Google Cloud collection and Vertex AI updates</li>
      </ul>
    </div>
    <div class="card">
      <h3>Proposed demos (arcades/videos)</h3>
      <ol>
        <li><a href="https://interact.redhat.com/share/QIkx7TMuu22RDi0nUjRA" target="_blank" rel="noopener">Google Cloud</a></li>
        <li><a href="https://interact.redhat.com/share/qYeocEdiSCHFkKXytJMe" target="_blank" rel="noopener">AWS</a></li>
        <li><a href="https://interact.redhat.com/share/kfgU5BTwSlvBf9pCy0vP" target="_blank" rel="noopener">Azure</a></li>
      </ol>
    </div>
  </div>
</section>

<section class="tab-panel" id="theme-g">
  <h2>Theme G - Metrics and Telemetry</h2>
  <p class="owner">Owner: Alex</p>
  <div class="split">
    <div class="card">
      <h3>Existing demos</h3>
      <ul>
        <li>Automation dashboard</li>
        <li>Automation dashboard installation</li>
      </ul>
    </div>
    <div class="card">
      <h3>New opportunities / What's New in AAP 2.7</h3>
      <ul>
        <li>Automation dashboard as a native AAP experience (Tech Preview)</li>
        <li>New inventory plugins: Azure, VMware, Cisco ACI, Cisco Meraki</li>
        <li>Indirect node counting enhancements across vmware, google cloud, azure, aws, Meraki switches, Cisco Intersight</li>
        <li>Savings planner with metrics utility/metrics service</li>
      </ul>
    </div>
    <div class="card">
      <h3>Proposed demos (arcades/videos)</h3>
      <ol>
        <li>Automation dashboard (done)</li>
        <li>Automation dashboard installation (done)</li>
        <li>Using metrics-utility (net new)</li>
      </ol>
    </div>
  </div>
</section>

<section class="tab-panel" id="theme-h">
  <h2>Theme H - AAP 101 (Operator/Ops Team)</h2>
  <p class="owner">Owner: Sean</p>
  <div class="split">
    <div class="card">
      <h3>Existing demos</h3>
      <ul>
        <li>Self service automation portal (outdated, needs updating)</li>
        <li>Advance your Automation Maturity</li>
        <li>Automation intelligent assistant</li>
      </ul>
    </div>
    <div class="card">
      <h3>New opportunities / What's New in AAP 2.7</h3>
      <ul>
        <li>Intro to automation controller</li>
        <li>What's new with Automation Hub</li>
        <li>How to execute a playbook at scale for first time</li>
        <li>Intro to credentials and credential management</li>
        <li>Intro to RBAC</li>
        <li>Intro to inventory</li>
      </ul>
    </div>
    <div class="card">
      <h3>Proposed demos (arcades/videos)</h3>
      <ol>
        <li>Automation intelligent assistant (done) with potential BYOK adaptation (not started)</li>
        <li>Advance your automation maturity (done)</li>
        <li>Reserved for another showcase</li>
      </ol>
    </div>
  </div>
</section>
