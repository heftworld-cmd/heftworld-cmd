# Agent Memory and Context Policy

## Policy Statement

Agent memory must be isolated, attributable, integrity-checked, access-controlled, and time-bound. Unverified memory must not persist indefinitely or cross user, tenant, session, or agent boundaries.

## Memory Classes

| Memory class | Examples | Allowed retention | Integrity check | Approval required |
|---|---|---:|---|---|
| Session-only context | Current chat, current task state | Session duration | Request ID and trace | No |
| User preference | Formatting preference, workflow preference | 90 days | Source attribution | No |
| Business fact | Customer account detail, contract fact | 30 days | Hash and source link | Yes for sensitive |
| High-risk instruction | Access request, policy exception | 24 hours | Hash and approver | Yes |
| Unverified retrieved content | Web page, email, ticket comment | 24 hours or less | Source attribution | No write to long-term memory |

## Isolation Requirements

- [ ] Memory is partitioned by tenant.
- [ ] Memory is partitioned by user.
- [ ] Memory is partitioned by session where required.
- [ ] Memory is partitioned by agent identity.
- [ ] Cross-partition memory reads are denied by default.
- [ ] Cross-partition memory writes require explicit authorization.

## Context Integrity Requirements

- [ ] Persisted context stores source attribution.
- [ ] Persisted context stores creation timestamp.
- [ ] Persisted context stores creator identity.
- [ ] Persisted context stores integrity hash or equivalent tamper evidence.
- [ ] Context is validated before use.
- [ ] Untrusted context is clearly marked before model use.

## Memory Poisoning Controls

- [ ] Untrusted retrieved content cannot become trusted instruction.
- [ ] Retrieved content cannot modify policy or tool permissions.
- [ ] Memory writes are filtered for prompt-injection patterns.
- [ ] Memory writes are logged.
- [ ] Suspicious memory is quarantined.
- [ ] Checkpoint rollback is available.

## Retention Schedule

| Data type | TTL | Auto-delete | Review owner | Notes |
|---|---:|---|---|---|
| Session context | | Yes | | |
| Tool output | | Yes | | |
| User preference | | Yes | | |
| Sensitive business data | | Yes | | |
| Unverified external content | | Yes | | |

## Recovery

Rollback method:

Checkpoint location:

Forensic log location:

Recovery owner:

Maximum recovery time:
