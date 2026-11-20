# 09 — Persistent reminders, time zones, and recovery

## Content

`/remind`; unambiguous time input; UTC instants and time-zone conversion; persisted due times; a polling scheduler; missed work after downtime; delivery failures and duplicate-delivery tradeoffs.

## Completion checkpoint

Reminders survive restarts, and overdue or failed deliveries follow an explicit, tested policy.
