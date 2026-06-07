# Agent Implementation Workflow Artifacts

This pack contains implementation-ready working documents for building and governing AI agents.

Use the files in this order:

1. `01_master_checklist.md` - end-to-end phase checklist and acceptance gates.
2. `02_agent_boundary_spec.md` - define what each agent may do, must not do, and when it escalates.
3. `03_ai_bom_template.csv` - AI bill of materials for models, datasets, tools, prompts, and dependencies.
4. `04_tool_access_matrix.csv` - tool allow-list, capability limits, parameter validation, and sandboxing.
5. `05_credential_policy.md` - short-lived, scoped, revocable credential policy.
6. `06_memory_context_policy.md` - memory isolation, retention, context integrity, and poisoning controls.
7. `07_security_test_plan.md` - prompt injection, tool misuse, credential, memory, and supply-chain test cases.
8. `08_metrics_dashboard.md` - dwell time, alert coverage, explainability, detection speed, and behavior conformance.
9. `09_raci_and_stage_gates.md` - owners, reviewers, approvals, and go/no-go gates.

Core rule for every control:

> Does this make the attack impossible, or only tedious?

Prefer controls that remove capability, isolate trust boundaries, expire credentials, or cryptographically verify identity. Treat friction-only controls as temporary compensating controls.
