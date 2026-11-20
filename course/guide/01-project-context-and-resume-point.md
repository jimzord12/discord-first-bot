# Project context and resume point

**Snapshot updated: 17 November 2026. Session 02 is complete; begin Session 03 next.** This section records the confirmed starting state for future chats. It is a dated snapshot, not a claim that the repository will remain unchanged. A later explicit checkpoint supersedes its progress and version details. The teaching guidance and all 13 sessions in the [course index](../README.md) remain in effect.

## Read this before continuing

1. Read the [course guide](../README.md) and any newer checkpoint provided in the current chat. Resume from Session 03 unless the learner requests another topic or supplies newer progress. Do not repeat project setup by default.
2. Use the public repository for read-only code inspection before requesting copied files. Read the current branch/commit and relevant files when access is available. Repository access in an earlier chat does not guarantee access now; say what was actually inspected. If access fails, request only the smallest relevant excerpt.
3. Distinguish published code from locally reported changes. The snapshot below explicitly records a difference between them. Missing newer code on GitHub does not mean the learner has not written it.
4. Retain the working versions and Bun runtime. Research current official documentation when a changing API or compatibility question arises; do not repeat dependency selection or upgrade simply because a new session starts.
5. Teach the next manageable step and let the learner type and run it. The learner authorized creation of this course document; that does not authorize implementing the bot on their behalf.

## Repository and development environment

| Item | Confirmed context |
| --- | --- |
| Public GitHub repository | https://github.com/jimzord12/discord-first-bot |
| Repository owner | `jimzord12` |
| Branch / remote | `main`, tracking `origin/main` |
| Local project folder | `C:/Users/jimzord12/Documents/GitHub/discord-first-bot` |
| Operating system / shell / editor | Windows / PowerShell / VS Code |
| Application runtime, package manager, test runner | Bun |
| Bun version | `1.4.4`, reported by the learner's terminal |
| TypeScript | `7.0.2`, pinned in `devDependencies` |
| Bun type declarations | `@types/bun` `1.4.4`, pinned in `devDependencies` |
| Discord library | `discord.js` `14.28.1`, pinned in `dependencies` |
| Package format | ES modules; `"type": "module"`; `"module": "index.ts"`; `"private": true` |
| Lockfile | `bun.lock`, committed; use frozen installs for CI/deployment |
| GitHub CLI | `gh` is installed and authenticated as `jimzord12`; learner prefers CLI instructions for repository operations |
| Time zone for future scheduling lessons | `Europe/Athens`; do not assume a fixed UTC offset |

These are retained working versions, not an assertion that they are the latest releases. TypeScript belongs in `devDependencies`; the earlier generated `peerDependencies` section was removed. No separate `@types/discord.js` package was needed.

## Code and configuration already written

The repository was read directly while preparing this guide. The inspected `main` head was **`8cf9566bdef600035d4809b070022d291e1ea48c`** (`8cf9566`), message **“Successfully first connection with Discord”**. This supersedes the earlier published setup commit `1a2c1e8` as the latest inspected remote checkpoint. Refresh the remote state in a later chat rather than assuming either hash is still its head.

| File | Purpose and known state |
| --- | --- |
| `index.ts` | Imports `config`, destructures its `token`, constructs a Discord `Client` with only `GatewayIntentBits.Guilds`, registers `Events.ClientReady` with `.once()`, prints bot identity, and logs in. The learner's newer local code also has a startup log and shard lifecycle/error listeners. |
| `config.ts` | `requireEnv(name: string): string` reads `process.env[name]?.trim()`, throws for missing/empty/whitespace-only values, and returns a validated string. Exports `config.token`, `config.applicationId`, and `config.guildId`. Checks run when the module is imported. It validates presence, not whether Discord will accept a credential or ID. |
| `.env.example` | Empty entries for `DISCORD_TOKEN`, `DISCORD_APPLICATION_ID`, and `DISCORD_GUILD_ID`; safe to commit. |
| `.env` | Learner's local values are populated and Git-ignored. No values belong in this guide. |
| `.gitignore` | Excludes `node_modules`, `.env`, and `.env.*`, with `!.env.example` allowing the template. The learner verified `.env` was ignored and absent from the proposed commit. |
| `package.json` | Exact dependencies above; `typecheck` invokes `bun check`. Newer local startup/development scripts are described below. |
| `bun.lock` | Records direct and transitive dependency resolutions; do not edit manually. |
| `tsconfig.json` | Bun-style configuration with `strict: true`, `noUncheckedIndexedAccess: true`, `noEmit: true`, `module: "Preserve"`, `moduleResolution: "bundler"`, `allowImportingTsExtensions: true`, `verbatimModuleSyntax: true`, and Bun types. Inspect the file for the remaining options rather than replacing it from memory. |
| `.vscode/settings.json` | At the inspected commit: `"js/ts.tsdk.path": "node_modules\\typescript"` and `"js/ts.experimental.useTsgo": true`. TypeScript 7 editor integration was configured and the learner selected workspace version `7.0.2`. |
| `README.md` | Present in the initial commit; not yet established as a maintained course checkpoint. |

The exact `config.ts` behavior was inspected on GitHub. The learner tested both successful loading and the deliberate missing-value failure using `bun --env-file=.env.example index.ts`. Do not request the real `.env` to repeat this check.

**Local versus published state:** at the inspected remote commit, `package.json` contained only the `typecheck` script, and `index.ts` had the first-connection handler and `client.login(token)`. It did not yet contain the newer startup log or recovery listeners shown in this chat. The learner subsequently confirmed that watch-mode restart works locally. Publication of those final changes has not been confirmed. Suggest committing and pushing them; do not claim they are already on GitHub.

The final agreed local scripts are:

```json
"scripts": {
  "typecheck": "bun check",
  "start": "bun run index.ts",
  "dev": "bun check && bun --watch index.ts"
}
```

`dev` checks types once before launching watch mode. That command does not run a new type check on every restart. `--watch` restarts the process when imported source files change; the learner casually called this “hot reload,” but Bun's separate `--hot` mode was not used. Put Bun runtime flags before the filename.

The latest local code shown registered `ShardReconnecting`, `ShardReady`, `ShardResume`, `ShardDisconnect`, and `ShardError` with `.on()`. Two small corrections were recommended before closing Session 02:

- Use `(event, shardId)` for `ShardDisconnect`; its first argument is a close-event object, not the shard ID. Logging `event.code` is useful. A parameter's name does not determine the value or inferred type it receives.
- Use `await client.login(token)` for explicit top-level waiting and initial login-error propagation.

The subsequent watch-mode test passed. The final local file contents for those two corrections were not pasted or independently inspected; verify them from the next pushed commit or relevant excerpt when needed. This is a documentation/publication follow-up, not an unresolved connection failure.

## Discord setup and verification

| Item | Confirmed state / evidence |
| --- | --- |
| Test guild | `bot_testing_grounds` |
| Bot user | `first_bot`; successful login printed `first_bot#4695` |
| Developer Mode | Learner enabled it and copied the server ID. Their Discord UI placed it under **Developer**, rather than the previously suggested **Advanced** location. |
| Local configuration | All three required environment variables were filled in; token kept private. |
| Requested Gateway intents | Only `GatewayIntentBits.Guilds` in the code. No privileged intent is needed for the current work. |
| Portal toggles / install details | Exact current privileged-intent toggle states and installation scopes/permission bitfield were not independently inspected. Do not invent them. Check the relevant setup only if needed for the next feature. |
| Gateway connections | One connection, shard `0`; no explicit multi-shard infrastructure. |
| Commands / persistence / deployment | No `/ping` implementation or registration has been completed in the course yet. No database, automated test suite, CI, or deployment has been introduced. |

The learner reported and/or supplied terminal output confirming:

- Bun loads discord.js and prints version `14.28.1`.
- Editor diagnostics and `bun check` both reject a deliberate string-to-number assignment; corrected code passes. `bun run typecheck` invokes the same checker.
- Required environment validation succeeds with local configuration and fails with the empty template.
- The first Discord login succeeds; the bot appears online and the open connection keeps the process running.
- Ctrl+C returns the PowerShell prompt, and starting the bot again succeeds. This verifies ordinary process stop/start; it does not establish a complete application-level graceful-shutdown implementation.
- During a deliberate network interruption, the same process repeatedly logs connection errors and reconnect attempts, then prints `Gateway 0: session resumed`. That confirms session recovery on this tested Bun setup. No restart was needed to recover.
- Saving a source edit in watch mode restarts the bot and reconnects.

These runtime checks were performed on the learner's Windows computer, not rerun by the agent preparing this guide. The agent directly inspected the published source files and dependency declarations. Successful manual checks establish this baseline; they do not prove compatibility under every condition.

## Communication and concepts already practiced

Retain [the mentoring style](03-teaching-relationship-and-tone.md). The learner prefers concise, direct answers, with context and reasoning for complex matters. They ask conceptual follow-ups before proceeding; answer those questions at their pace and then resume the active lesson. Do not mistake a short “done” or a conceptual question for a request to skip the course.

- The learner types and runs code locally and shares relevant terminal output. Give one meaningful step at a time; let the learner verify it before moving to dependent work.
- Use PowerShell examples and explain the command and expected outcome. Prefer Git/`gh` CLI workflows when practical. The learner handles commits and pushes.
- Read pushed code to reduce copy/paste. Ask for local differences only when the remote snapshot does not contain the needed changes.
- Explain unfamiliar syntax and SDK terminology when it becomes useful. Preserve their reasonable naming and structure when reviewing code. Avoid unnecessary re-explanation of established concepts unless they request a refresher or a new task exposes a gap.
- Already discussed: exact dependency pins versus lockfiles; direct versus transitive dependencies; `dependencies`, `devDependencies`, and `peerDependencies`; deliberate upgrade-and-test workflow; named imports; environment validation and runtime versus static checks; callbacks versus event handlers; `.on()` versus `.once()`; inferred ready-client types.
- The learner understands that `readyClient` is the same client instance passed to the callback with a ready-state type, and that a callback used to respond to an event is an event handler.
- A brief WebSocket introduction is complete: persistent bidirectional transport, Gateway versus HTTP, identification/intents, heartbeats, reconnect/resume, and SDK responsibilities. Keep the dedicated hands-on workshop in Session 13; it may be taken after Session 03 if requested.
- Sharding was explained as distributing guild events across Gateway connections; separate processes/machines can distribute CPU and memory work. A guild is assigned to a shard; a busy guild's events are not split among shards. No sharding implementation is needed now.
- Do not equate ending `await client.login(...)` with ending the process: active network activity can keep the runtime alive afterward. Connection event listeners observe lifecycle changes; discord.js performs connection recovery.

## Exact next starting point

Begin **[Session 03 — Minimum working bot and local development](../03-minimum-working-bot-and-local-development.md)**. Briefly recap the working connection and explain command registration versus handling an incoming interaction. Introduce guild-scoped `/ping` registration as a separate, deliberate action, then build the small interaction handler through manageable steps. Explain any new SDK classes or Promise/error-handling syntax as used. Keep the bot running with Bun and verify `/ping` in `bot_testing_grounds` before moving to Session 04's modular structure.

At the start, refresh the repository snapshot if available and resolve the small local/published difference above. Do not ask for secrets or repeat setup. If the final changes remain local, request only the relevant updated scripts or lines when necessary; the successful connection/recovery baseline remains confirmed.

The learner asked for the public URL, retained versions, setup details, teaching preferences, and useful code context to live in the course guide so they do not have to repeat them across chats. This v5 snapshot fulfills that request. Keep routine subsequent progress in concise dated checkpoints; revise this snapshot deliberately when a new guide version is requested.
