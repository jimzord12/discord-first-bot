# Explain concepts when they become useful

Give brief refreshers immediately before unfamiliar concepts appear: what it is, why we need it here, and a minimal example. Expand when needed, without front-loading unrelated theory.

## JavaScript and TypeScript

Explain relevant syntax on first meaningful use, especially:

- ES modules, named versus default exports, and `import type`.
- Destructuring, rest/spread, optional chaining (`?.`), nullish coalescing (`??`), and how `??` differs from `||`.
- Promises, `async`/`await`, error propagation, event emitters/listeners, and asynchronous callbacks.
- Type inference, interfaces and type aliases, unions, narrowing, discriminated unions, and basic generics.
- `unknown` versus `any`, type assertions (`as`) versus runtime checks, `as const`, and `satisfies`.
- Compile-time types versus runtime values. Explain where runtime validation is needed, such as environment variables and user input; do not confuse a type annotation with validation.
- The event loop and why slow synchronous work can disrupt a Gateway-connected bot.

Use modern syntax because it improves clarity or safety. Avoid type-level gymnastics and premature abstractions. Verify support for version-sensitive features before teaching them.

## SQLite and persistence

Explain SQLite as an embedded relational database that typically stores data in a local file. Contrast it briefly with in-memory state and a client-server database such as PostgreSQL.

Introduce tables, rows, primary/foreign keys, constraints, CRUD, parameterized queries, transactions, indexes, and migrations as features need them. Explain enough SQL for me to understand what I type.

- Start with Bun's built-in `bun:sqlite` and a small data-access layer. Teach SQL before considering an ORM.
- Explain prepared statements and parameter binding. Binding protects against SQL injection through bound values; it does not replace input validation or database constraints. Open databases with `strict: true` so a missing named parameter throws instead of silently binding `NULL`.
- Enable foreign-key enforcement on each connection right after opening it (the pragma has no effect inside a transaction). Explain the relationships it enforces.
- Introduce WAL mode for the deployed file-backed database, explaining its benefits, sidecar files, and tradeoffs. Do not try to reproduce WAL behavior with a purely in-memory database.
- Store Discord snowflake IDs as `TEXT` and handle them as strings. Scope server-specific data and queries by `guild_id`.
- Use straightforward, versioned SQL migrations. Test upgrading an existing database as well as creating a new one.
- Cover durable disk paths, safe backups of a live database, and a restore check. Do not teach copying only the main database file during live WAL writes as a safe backup method.

## Discord and deployment

Define Discord terminology as it appears: application versus bot user, guild, channel, member versus user, roles, snowflakes, Gateway intents, OAuth2 scopes, permissions, and interaction tokens.

Before a learner's first Gateway connection in Session 02, give a brief WebSocket introduction: persistent bidirectional communication, connection lifecycle, and how it differs from HTTP request/response. For this learner, that introduction is already complete as recorded in [the project snapshot](01-project-context-and-resume-point.md#communication-and-concepts-already-practiced). The learner explicitly requested a dedicated tutorial; Session 13 expands this into hands-on practice. Build on the confirmed introduction without assuming hands-on WebSocket experience.

Explain Linux processes, SSH, `systemd`, environment files, logs, file permissions, and backups at the point we use them. Give enough context for me to operate the deployment independently.
