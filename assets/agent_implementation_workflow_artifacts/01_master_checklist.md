# Agent Implementation Workflow - Master Checklist

## Phase 1 - Identify Needs

Goal: define why the agent exists, what constraints it operates under, and who accepts the risk.

- [ ] Business objective is documented in one or two concrete outcomes.
- [ ] Agent use case is specific enough to test. Avoid vague goals such as "help with support".
- [ ] Security requirements are documented.
- [ ] Legal and compliance requirements are documented.
- [ ] Data classes the agent may touch are identified.
- [ ] Operational constraints are documented, including latency, cost, availability, and human review expectations.
- [ ] Security, legal, compliance, business, engineering, and operations stakeholders have reviewed the scope.
- [ ] Target maturity tier is selected: Foundation, Enterprise, or Advanced.
- [ ] Risk acceptance owner is named.
- [ ] Go/no-go gate: stakeholders agree the use case is narrow enough to secure.

Deliverables:

- [ ] Use-case brief
- [ ] Compliance mapping
- [ ] Data classification map
- [ ] Initial risk register
- [ ] Stakeholder sign-off

Definition of done:

- The team can state exactly what the agent can do, what it cannot do, what data it can access, and who owns risk.

## Phase 2 - Manage Supply Chain Risk

Goal: know every AI and software component, verify provenance, and prevent tampered components from reaching production.

- [ ] AI-BOM is created for models, prompts, tools, datasets, fine-tunes, MCP servers, plugins, libraries, and infrastructure images.
- [ ] Model provenance is documented.
- [ ] Training or fine-tuning data lineage is documented where applicable.
- [ ] Prompt templates and system instructions are version controlled.
- [ ] Dependency health is checked using an automated scorecard or equivalent.
- [ ] Known-vulnerable dependencies are blocked in CI.
- [ ] Unmaintained dependencies have replacement, isolation, or acceptance decisions.
- [ ] Runtime artifacts are signed before production deployment.
- [ ] MCP servers and tools are reviewed before production use.
- [ ] Third-party vendors are assessed for AI-accelerated exploit readiness.
- [ ] Go/no-go gate: unsigned or unknown-provenance components cannot deploy.

Deliverables:

- [ ] AI-BOM
- [ ] Dependency score report
- [ ] Vendor security questionnaire
- [ ] Signed artifact evidence
- [ ] Approved component registry

Definition of done:

- Every production component can be traced to an owner, source, version, risk status, and approval.

## Phase 3 - Define Agent Boundaries

Goal: give every agent a precise identity, capability boundary, escalation path, and blast-radius limit.

- [ ] Each agent instance has a unique, cryptographically rooted identity.
- [ ] Each agent has unique credentials. No shared service account credentials.
- [ ] Approved actions are documented.
- [ ] Prohibited actions are documented.
- [ ] Escalation triggers are documented.
- [ ] Scope limits are documented by system, API, data type, environment, and operation.
- [ ] Blast radius is documented for credential compromise, prompt injection, tool compromise, and memory poisoning.
- [ ] Multi-agent trust boundaries are explicit.
- [ ] Delegation rules between agents are documented.
- [ ] Agent functionality is split when one agent has too much authority.
- [ ] Go/no-go gate: no agent can deploy with vague permissions.

Deliverables:

- [ ] Agent boundary spec
- [ ] Identity and credential map
- [ ] Blast-radius assessment
- [ ] Delegation policy
- [ ] Escalation matrix

Definition of done:

- A reviewer can determine whether any proposed agent action is allowed, denied, or requires human approval.

## Phase 4 - Defend Against Prompt Injection

Goal: treat natural-language input as untrusted and limit who or what can influence the agent.

- [ ] All user, document, web, email, ticket, chat, and tool-returned natural-language content is marked untrusted.
- [ ] Input schema validation is enforced before the model sees structured content.
- [ ] Trusted instructions are separated from untrusted content.
- [ ] Untrusted content is delimited, transformed, or otherwise isolated.
- [ ] Output is checked for secrets, PII, policy violations, and unsafe tool requests.
- [ ] Known injection patterns are tested.
- [ ] High-risk actions require human approval.
- [ ] The external attack surface is minimized.
- [ ] Trusted sources and untrusted sources are documented.
- [ ] Go/no-go gate: prompt injection tests cannot produce unauthorized tool use.

Deliverables:

- [ ] Input trust-boundary map
- [ ] Prompt-injection test suite
- [ ] Input and output validation policy
- [ ] Human approval rules
- [ ] Attack-surface review

Definition of done:

- An untrusted input cannot override system instructions, expand permissions, exfiltrate secrets, or trigger unauthorized tools.

## Phase 5 - Protect Tool Access

Goal: restrict the agent to approved tools, approved operations, valid parameters, and isolated execution.

- [ ] Tool allow-list is enforced deny-by-default.
- [ ] Tool permissions are enforced outside the model, not only by prompt instruction.
- [ ] Each tool has capability restrictions.
- [ ] Each tool call has schema validation before execution.
- [ ] Tool-side authorization repeats validation independently.
- [ ] High-risk tools require manual approval.
- [ ] Dangerous tool combinations are blocked.
- [ ] Tool execution is sandboxed where possible.
- [ ] Network access is restricted by default.
- [ ] File-system mounts are least privilege and read-only where possible.
- [ ] Rate limits are treated as supporting controls, not primary security boundaries.
- [ ] Go/no-go gate: unlisted tools and invalid parameters are blocked before execution.

Deliverables:

- [ ] Tool access matrix
- [ ] Tool schema registry
- [ ] Sandbox profile
- [ ] High-risk tool approval workflow
- [ ] Tool audit log evidence

Definition of done:

- The model cannot grant itself new tools, broaden tool capability, or bypass parameter validation.

## Phase 6 - Protect Agent Credentials

Goal: assume credentials will be targeted and make them short-lived, scoped, isolated, and revocable.

- [ ] Static API keys are removed from agent runtime paths.
- [ ] Credentials are issued by an identity provider or secrets platform.
- [ ] Token lifetime is measured in minutes for sensitive operations.
- [ ] Credentials are scoped to the task and agent identity.
- [ ] Credentials are never stored in code, prompts, logs, or configuration files.
- [ ] Each agent instance gets unique credentials.
- [ ] Secrets are injected at runtime.
- [ ] Credentials can be centrally revoked.
- [ ] JIT access is used for privileged operations.
- [ ] ABAC or contextual authorization is used for sensitive actions.
- [ ] Hardware-bound credentials are used for production high-risk systems where available.
- [ ] Human authentication is phishing resistant where possible.
- [ ] Go/no-go gate: no production agent runs with static, shared, or long-lived credentials.

Deliverables:

- [ ] Credential policy
- [ ] Token lifetime standard
- [ ] Secret injection design
- [ ] Revocation runbook
- [ ] Credential inventory

Definition of done:

- A stolen runtime token has minimal scope, expires quickly, and can be revoked without rotating unrelated systems.

## Phase 7 - Protect Agent Memory

Goal: prevent long-lived context from becoming a persistent attack channel.

- [ ] Memory is isolated by user, session, tenant, and agent identity.
- [ ] Cross-session memory writes require explicit authorization.
- [ ] Persisted context has source attribution.
- [ ] Persisted context has integrity hashes or equivalent tamper checks.
- [ ] Unverified memory expires automatically.
- [ ] Sensitive memory has stricter TTL.
- [ ] Memory retrieval is filtered by authorization and relevance.
- [ ] Memory poisoning tests are included in security testing.
- [ ] Rollback or checkpoint recovery is available.
- [ ] Go/no-go gate: one user/session cannot poison another user/session's context.

Deliverables:

- [ ] Memory and context policy
- [ ] Retention schedule
- [ ] Context integrity design
- [ ] Memory poisoning test cases
- [ ] Recovery procedure

Definition of done:

- Persisted memory cannot silently override trusted instructions, leak across users, or remain active indefinitely without verification.

## Phase 8 - Measure What Matters

Goal: know quickly whether the agent is behaving correctly or has been compromised.

- [ ] Dwell time is measured from abnormal behavior to human awareness.
- [ ] Critical systems target abnormal-behavior detection within one hour.
- [ ] Alert coverage is measured as the percentage of alerts actually investigated.
- [ ] Explainability is measured by traceability from action to triggering input.
- [ ] Behavioral conformance is measured against expected policy and tool-use patterns.
- [ ] Tool-call logs include agent identity, user, request ID, parameters, decision, and outcome.
- [ ] Credential issuance and revocation events are logged.
- [ ] Memory writes and reads are logged.
- [ ] High-risk action approvals are logged.
- [ ] Metrics are reviewed in security operations.
- [ ] Go/no-go gate: the team can detect, explain, and stop abnormal behavior fast enough for the system risk.

Deliverables:

- [ ] Metrics dashboard
- [ ] Audit log schema
- [ ] Alert routing rules
- [ ] Detection and response runbook
- [ ] Weekly control review

Definition of done:

- Security can answer: if this agent goes out of control, will we know within the required time window and can we stop it?

## Release Gate Summary

- [ ] Phase 1 scope approved.
- [ ] Phase 2 AI-BOM complete and artifacts signed.
- [ ] Phase 3 boundaries approved.
- [ ] Phase 4 prompt-injection tests passed.
- [ ] Phase 5 tool access tests passed.
- [ ] Phase 6 credential tests passed.
- [ ] Phase 7 memory isolation tests passed.
- [ ] Phase 8 monitoring live.
- [ ] Incident runbook approved.
- [ ] Rollback plan tested.
- [ ] Final risk acceptance recorded.
