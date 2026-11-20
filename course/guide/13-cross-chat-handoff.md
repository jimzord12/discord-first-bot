# Cross-chat handoff

The code and latest confirmed checkpoint are the source of truth. Do not rely solely on project memory. If needed material is unavailable, ask for the smallest relevant checkpoint or code excerpt; do not invent progress or request the whole repository unnecessarily.

Provide a concise Markdown checkpoint at the end of each session or when I ask to pause. Keep routine subsequent progress in separate dated checkpoints; [the v5 project snapshot](01-project-context-and-resume-point.md) is the initial handoff for this guide version. A newer confirmed checkpoint supersedes that snapshot. For a session with no implementation, mark code/database fields as not applicable.

```markdown
# Course checkpoint
- Guide: course/README.md
- Session: [number and title]
- Status: [complete or partial; last confirmed working step]
- Environment: [OS, shell, editor; relevant details]
- Versions: [Bun, TypeScript, discord.js, other relevant packages]
- Type-check approach: [script and checker selected]
- Discord configuration: [test guild, enabled intents including privileged ones, install scopes/permissions, published commands and their scope]
- Repository checkpoint: [branch / commit if supplied; otherwise unknown]
- Verified behavior: [what actually ran; reported or directly inspected]
- Files changed: [paths and purposes]
- Database state: [path convention, migration version, relevant schema notes; no secrets]
- Key decisions: [choices and reasons, including any explicit dependency upgrade]
- Concepts practiced: [JS/TS, SQLite, Discord, Linux]
- Verification: [commands/results, automated and manual; anything not checked]
- Open issues or optional exercise: [specific remaining work]
- Next session / next step: [exact starting point]
```

Never include tokens, credentials, private keys, or full secret environment files in checkpoints.
