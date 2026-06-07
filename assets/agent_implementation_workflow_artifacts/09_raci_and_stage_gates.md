# RACI and Stage Gates

## Roles

| Role | Responsibilities |
|---|---|
| Business owner | Defines business outcome and accepts residual business risk |
| Product owner | Maintains use case, workflow, and launch readiness |
| Engineering owner | Implements agent, tools, integrations, and rollback |
| Security architect | Defines control architecture and approves boundary design |
| Application security | Reviews code, tools, prompt-injection controls, and tests |
| IAM owner | Owns identity, credentials, token lifetime, and revocation |
| Data owner | Approves data access and retention |
| Legal/compliance | Maps regulatory requirements and policy obligations |
| Security operations | Owns monitoring, response, and escalation |
| Vendor risk | Reviews third-party model, tool, and service providers |

## RACI Matrix

| Activity | Business | Product | Eng | Sec Arch | AppSec | IAM | Data | Legal/Compliance | SecOps | Vendor Risk |
|---|---|---|---|---|---|---|---|---|---|---|
| Use-case approval | A | R | C | C | C | C | C | C | I | I |
| AI-BOM creation | I | C | R | C | C | I | C | I | I | C |
| Vendor review | I | C | C | C | C | I | I | C | I | R |
| Agent boundary spec | C | R | R | A | C | C | C | C | C | I |
| Tool access matrix | I | C | R | A | C | C | C | I | C | I |
| Credential policy | I | I | C | C | C | A | I | I | C | I |
| Memory policy | C | C | R | A | C | I | C | C | C | I |
| Security testing | I | C | R | C | A | C | C | I | C | I |
| Monitoring readiness | I | I | C | C | C | C | I | I | A | I |
| Production risk acceptance | A | R | C | C | C | C | C | C | C | C |

Legend:

- R = Responsible
- A = Accountable
- C = Consulted
- I = Informed

## Stage Gate 1 - Scope Approved

Required evidence:

- [ ] Use-case brief
- [ ] Data classification
- [ ] Compliance mapping
- [ ] Initial risk register
- [ ] Stakeholder approval

Decision:

- [ ] Go
- [ ] Conditional go
- [ ] No-go

## Stage Gate 2 - Design Approved

Required evidence:

- [ ] Agent boundary spec
- [ ] Tool access matrix
- [ ] Credential policy
- [ ] Memory/context policy
- [ ] AI-BOM draft
- [ ] Blast-radius assessment

Decision:

- [ ] Go
- [ ] Conditional go
- [ ] No-go

## Stage Gate 3 - Build Verified

Required evidence:

- [ ] Signed artifacts
- [ ] Dependency score report
- [ ] Prompt-injection tests
- [ ] Tool access tests
- [ ] Credential tests
- [ ] Memory isolation tests
- [ ] Rollback tested

Decision:

- [ ] Go
- [ ] Conditional go
- [ ] No-go

## Stage Gate 4 - Operations Ready

Required evidence:

- [ ] Metrics dashboard live
- [ ] Alert routing live
- [ ] Incident runbook approved
- [ ] Credential revocation tested
- [ ] Agent pause/kill switch tested
- [ ] Security operations handoff complete

Decision:

- [ ] Go
- [ ] Conditional go
- [ ] No-go

## Stage Gate 5 - Production Launch

Required evidence:

- [ ] Final risk acceptance
- [ ] Production AI-BOM
- [ ] Production policy versions
- [ ] Launch monitoring window
- [ ] Rollback owner on call
- [ ] Post-launch review scheduled

Decision:

- [ ] Go
- [ ] No-go
