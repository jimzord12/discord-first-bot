# Verification begins early

Session 10 consolidates testing; it is not the first time we verify behavior.

- Run the type check and a relevant manual Discord check throughout development.
- Introduce small automated tests when independent logic appears, such as validation or component-ID parsing. Explain each test and let me type it.
- Use in-memory SQLite where appropriate for fast query/constraint tests. Also use temporary file-backed databases for reopening, migrations, and persistence behavior. Cover WAL and backups using a relevant file-backed setup.
- Make time-dependent logic testable with controlled time or an injected clock rather than long sleeps.
- Test meaningful behavior and failure cases. Avoid tests that merely mirror the implementation or mock every Discord method.
- Distinguish local logic tests, database integration tests, and live Discord checks. Never claim one substitutes for all the others.
