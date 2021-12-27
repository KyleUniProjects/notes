#!/usr/bin/env node

import { copyFileSync as copy, existsSync, mkdirSync } from "fs";
import { join } from "path";

const root = join(process.env.APPDATA, "marktext");

(() => {
	const themes = join(root, "themes", "export");
	if (!existsSync(themes)) mkdirSync(themes, { recursive: true });
	copy(join(".configs", "kyle.css"), join(themes, "kyle.css"));

	copy(join(".configs", "preferences.json"), join(root, "preferences.json"));
})();
