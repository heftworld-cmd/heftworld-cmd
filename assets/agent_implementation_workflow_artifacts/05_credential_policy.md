# Agent Credential Policy

## Policy Statement

Agents must use short-lived, scoped, unique, revocable credentials. Static API keys, embedded credentials, shared service-account passwords, and secrets stored in prompts, code, logs, or configuration files are prohibited for production agents.

## Credential Requirements

| Requirement | Foundation | Enterprise | Advanced |
|---|---|---|---|
| Unique agent identity | Required | Required | Required |
| Short-lived token | Required | Required | Required |
| Central revocation | Required | Required | Required |
| Certificate-based identity | Recommended | Required | Required |
| ABAC/contextual authorization | Recommended | Required | Required |
| JIT/JEA access | Recommended for privileged actions | Required for privileged actions | Required |
| Hardware-bound credential | Recommended for high risk | Recommended | Required for high risk |

## Token Lifetime Standard

| Operation type | Maximum lifetime | Renewal | Notes |
|---|---:|---|---|
| Low-risk read | 60 minutes | Allowed if policy passes | No bulk access |
| Confidential read | 15 minutes | Step-up required | Log reason |
| Write action | 10 minutes | No silent renewal | Human approval for high risk |
| Privileged action | 5 minutes | No renewal | JIT only |
| Emergency break-glass | 15 minutes | No renewal | Security approval and post-review |

## Secret Handling

- [ ] Secrets are issued at runtime.
- [ ] Secrets are never committed to repositories.
- [ ] Secrets are never included in model prompts.
- [ ] Secrets are masked in logs.
- [ ] Secrets are scoped to one agent identity.
- [ ] Secrets are scoped to one task or narrow capability where possible.
- [ ] Revocation path is tested.

## Revocation Runbook

Trigger:

Affected agent identities:

Affected credentials:

Immediate actions:

1. Pause agent sessions.
2. Revoke active credentials.
3. Block affected tool scopes.
4. Preserve logs and memory state.
5. Rotate downstream credentials only if required.
6. Run post-incident review.

Owner:

Maximum revocation time:

Evidence location:

## Policy Exceptions

Exception request:

Business justification:

Compensating controls:

Expiration date:

Approver:
