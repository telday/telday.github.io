import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // TODO: Update 'site' to your GitHub Pages URL before deploying.
  //   User/org site  → 'https://YOUR-USERNAME.github.io'
  //   Project site   → 'https://YOUR-USERNAME.github.io' + add base: '/REPO-NAME'
  site: 'https://your-username.github.io',
});
