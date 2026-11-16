PUBLIC MERGE MANSION TRADE VAULT - GITHUB PAGES

This edition is read-only for every visitor. It never reads or writes browser localStorage.
All visitors see the same published trade database from trades.json.

INSTALL IN AN EXISTING GITHUB PAGES SITE:
1. Extract this ZIP on your computer.
2. Open the folder where your GitHub Pages website is published.
3. Open the existing Merge_Mansion_Trade_Vault folder.
4. Replace index.html, sw.js, manifest.webmanifest, icon-192.png, and icon-512.png.
5. ADD trades.json in that same folder (this is required).
6. Commit and open your existing Merge Mansion URL.

To change trades for EVERYONE:
- Edit trades.json in the GitHub website or upload a revised trades.json.
- Each entry has give, giveLevel, receive, receiveLevel, giveChain, receiveChain, source, and notes.
- The list will update for visitors when GitHub Pages serves the new file, and the app is online.
- For major app updates, replace sw.js and increment CACHE to refresh installed/offline copies.

No separate server or backend is required. GitHub Pages serves these static files.
The page is also installable on Android from Chrome and works offline after caching.
When offline it displays the most recently downloaded published list.

IMPORTANT: Browser edits made with older app versions are deliberately NOT loaded.
A browser may still retain old storage, but this app ignores it completely.
