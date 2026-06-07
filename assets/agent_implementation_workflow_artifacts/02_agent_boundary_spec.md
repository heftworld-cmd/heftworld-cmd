# Agent Boundary Specification

## Basic Information

Agent name:

Owner:

Business sponsor:

Security reviewer:

Environment:

Target tier: Foundation / Enterprise / Advanced

Risk rating: Low / Medium / High / Critical

## Purpose

Describe the concrete job this agent performs.

Good:

- Read customer records.
- Summarize support history.
- Draft a response for human approval.

Poor:

- Help customer service.

## Identity

Agent identity:

Identity provider:

Cryptographic identity type:

Certificate or key reference:

Credential source:

Credential lifetime:

Revocation owner:

## Approved Actions

| Action | System | Data classification | Conditions | Human approval required | Notes |
|---|---|---|---|---|---|
| Read customer profile | CRM | Confidential | Assigned queue only | No | Read-only |
| Draft customer reply | Ticketing | Confidential | No external send | Yes | Human sends |

## Prohibited Actions

| Action | Reason | Enforcement point |
|---|---|---|
| Delete customer record | Irreversible data impact | API policy |
| Export all records | Bulk exfiltration risk | Tool allow-list and ABAC |
| Send external email directly | External communication risk | Tool capability restriction |

## Escalation Triggers

| Trigger | Required approver | Max response time | Enforcement |
|---|---|---|---|
| High-value transaction | Business owner | 15 minutes | Workflow approval |
| Sensitive data access | Data owner | 30 minutes | ABAC step-up |
| External party communication | Human operator | Before send | Tool gate |

## Scope Limits

Allowed systems:

Blocked systems:

Allowed data classes:

Blocked data classes:

Allowed networks:

Blocked networks:

Allowed file paths or storage buckets:

Blocked file paths or storage buckets:

Allowed tools:

Blocked tools:

## Multi-Agent Boundaries

Can delegate tasks: Yes / No

Can receive delegated tasks: Yes / No

Required verification before accepting delegation:

Allowed delegating agents:

Blocked delegating agents:

## Blast-Radius Assessment

| Scenario | Maximum damage if compromised | Current control | Impossible or tedious | Required improvement |
|---|---|---|---|---|
| Agent credential stolen | | | | |
| Prompt injection succeeds | | | | |
| Tool output poisoned | | | | |
| Memory poisoned | | | | |
| Tool server compromised | | | | |

## Approval

Security approval:

Legal/compliance approval:

Business approval:

Engineering approval:

Residual risk accepted by:

Date:
