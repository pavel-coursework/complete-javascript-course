/*
━ Regular ━
• If script is at HEAD
Parsing HTML → Fetch Script → Execute → Wait for HTML → Finish Parsing HTML (DOMContentLoaded)

• If script is at BODY END
Parsing HTML → Fetch Script → Execute
Scripts are fetched and executed after the HTML is completely parsed


━ Async ━
Parsing HTML → Waiting → Finish Parsing HTML (DOMContentLoaded)
Fetch Script → Execute
- 2 asynchronous task is executed
- Scripts are fetched asynchronously and executed immediately
- Scripts are not guaranteed to execute in order
- Use for 3rd-party scripts where order doesn't matter (e.g Google Analytics)


━ Defer ━
Parsing HTML → Execute
Fetch Script
- No interruption in Parsing HTML
- Scripts are fetched asynchronously and executed after the HTML is completely parsed
- Scripts are executed in order
- This is overall the best solution! Use for your own scrips, and when order matters (e.g. including a library)
*/
