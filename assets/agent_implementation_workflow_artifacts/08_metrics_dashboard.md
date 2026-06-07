# Agent Security Metrics Dashboard

## Core Metrics

| Metric | Definition | Target | Owner | Data source | Review cadence |
|---|---|---:|---|---|---|
| Dwell time | Time from abnormal behavior to human awareness | Critical: under 1 hour | Security operations | Alerts and case system | Weekly |
| Alert coverage | Percent of generated alerts investigated | 95%+ for high severity | Security operations | SIEM/SOAR | Weekly |
| Explainability coverage | Percent of agent actions traceable to triggering input | 100% for high-risk actions | Engineering | Audit logs/traces | Weekly |
| Detection speed | Time from abnormal behavior to alert creation | Define per system | Detection engineering | SIEM/SOAR | Weekly |
| Behavioral conformance | Percent of actions aligned to expected policy/tool patterns | Define baseline | Security engineering | Tool logs | Weekly |
| Unauthorized tool attempts | Count of denied unapproved tool calls | Trending down | App security | Tool gateway logs | Weekly |
| Credential revocation time | Time to revoke affected credentials | Under target | IAM/security | IdP/secrets logs | Monthly |
| Memory quarantine rate | Suspicious memory writes quarantined | Monitor trend | Platform team | Memory service logs | Weekly |

## Minimum Audit Fields

Every security-relevant action should log:

- Agent identity
- User identity
- Tenant or organization
- Session ID
- Request ID
- Tool name
- Tool parameters or safe parameter summary
- Data classification
- Authorization decision
- Policy version
- Credential ID or token family, not the secret
- Memory read/write reference
- Triggering input reference
- Output/action result
- Human approver, if any
- Timestamp

## Weekly Review

Date:

Reviewer:

Systems reviewed:

Open high-risk findings:

Metrics outside target:

Control drift observed:

New risks:

Actions assigned:

## One-Hour Detection Question

For each critical agent, answer:

- [ ] Can we detect abnormal behavior within one hour?
- [ ] Can we identify the affected agent identity?
- [ ] Can we identify the triggering input?
- [ ] Can we identify tools and data accessed?
- [ ] Can we pause the agent?
- [ ] Can we revoke credentials?
- [ ] Can we quarantine or rollback memory?

If any answer is "No" or "Unknown", basic controls are not ready for production.
