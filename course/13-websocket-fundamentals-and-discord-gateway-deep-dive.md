# 13 — WebSocket fundamentals and Discord Gateway deep dive

## Content

HTTP request/response versus persistent bidirectional WebSocket communication; opening, sending, receiving, errors, and closing; a small local Bun echo server/client typed by the learner; transport-level ping/pong versus Discord application-level heartbeats; Gateway authentication, intents, event envelopes, sequence numbers, reconnect/resume, and what discord.js handles. Keep the echo exercise separate from the bot; continue using discord.js for the bot connection.

## Completion checkpoint

I can build and explain a local WebSocket exchange, observe disconnect behavior, and trace the Discord Gateway lifecycle while distinguishing SDK responsibilities from application responsibilities.
