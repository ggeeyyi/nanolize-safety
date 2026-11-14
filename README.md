# nanolize safety review

A review of agent-hacking risks in nanolize: what a rewriting agent, and the code it writes, can read, forge and
reach today, with local reproductions and a fix path. Published with GitHub Pages.

| Language | Page |
| --- | --- |
| English | <https://ggeeyyi.github.io/nanolize-safety/> |
| Chinese | <https://ggeeyyi.github.io/nanolize-safety/zh/> |

The review covers nanolize `main` at `fe9b3bb` (14 November 2026). File references on the page point into that
private repository. The findings were open when the page was written; check them against the code before acting on
them.

## Layout

- `index.html` is the English page and `zh/index.html` the Chinese one. Both share `style.css`, `site.js` and
  `favicon.svg`, and use relative links only, so the site works under any URL prefix and when opened from disk.
- There is no build step: Pages serves the `main` branch as it is (`.nojekyll` turns Jekyll off).
- The two pages hold the same content. Change both when you change one.

## Preview locally

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080/>.
