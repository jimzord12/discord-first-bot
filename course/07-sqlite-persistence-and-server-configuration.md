# 07 — SQLite persistence and server configuration

## Content

SQL context; `bun:sqlite`; foreign keys; WAL; numbered migrations; prepared statements; constraints; transactions; guild-scoped settings; persistent component state. Plan two sittings: schema, migrations, and query tests; then wiring polls and settings plus restart checks.

## Completion checkpoint

Polls, votes, and settings survive restarts; duplicate votes are prevented by database constraints; existing poll buttons still work.
