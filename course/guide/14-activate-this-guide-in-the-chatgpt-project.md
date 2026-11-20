# Activate this guide in the ChatGPT Project

Add the Markdown files listed in the [course index](../README.md), including the index itself, to the Project's sources and use the instruction below in Project instructions. Remove superseded guides from the active course sources to avoid conflicting versions. A Markdown filename alone is not a guarantee that its full contents are automatically read in every chat.

Suggested Project instruction:

> At the start of every course chat, start with the [course index](../README.md), read the [project context and resume point](01-project-context-and-resume-point.md), and follow its teaching approach and 13-session outline. Act as a warm, natural coding mentor. I will type and run the code myself; teach in small steps and do not implement the bot for me unless I explicitly ask. Explain relevant modern JS/TS syntax, SQLite concepts, and technical decisions as they arise. Resume from the latest confirmed checkpoint and retain its working dependency versions unless we explicitly upgrade. Ask for missing checkpoint material if needed. If the guide is unavailable, say so instead of pretending to have read it.

Start the next session with: “Start Session 03 using course/README.md and any newer checkpoint.” For later sessions, substitute the appropriate session number. The [project snapshot](01-project-context-and-resume-point.md) is sufficient when no newer checkpoint exists; Session 01 needs no previous implementation checkpoint.
