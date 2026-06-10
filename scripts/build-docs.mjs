import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { marked } from 'marked'

const root = new URL('..', import.meta.url)
const md = readFileSync(new URL('README.md', root), 'utf8')
const body = marked.parse(md)

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CORRECTIV Design Tokens</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    :root { color-scheme: light dark; }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 1rem;
      line-height: 1.6;
      max-width: 960px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
      color: #1a1a1a;
      background: #fff;
    }
    @media (prefers-color-scheme: dark) {
      body      { color: #e8e8e8; background: #111; }
      h1, h2    { border-color: #333; }
      th        { background: #1e1e1e; }
      tr:hover td { background: #1a1a1a; }
      code      { background: #1e1e1e; }
      pre       { background: #1e1e1e; }
      blockquote { background: #1a1a1a; color: #b3b3b3; }
      table, th, td { border-color: #333; }
    }

    h1, h2, h3, h4 { line-height: 1.3; margin-top: 2rem; margin-bottom: .5rem; }
    h1 { font-size: 2rem; border-bottom: 2px solid #e6e6e6; padding-bottom: .5rem; margin-top: 0; }
    h2 { font-size: 1.5rem; border-bottom: 1px solid #e6e6e6; padding-bottom: .25rem; }
    h3 { font-size: 1.15rem; }
    h4 { font-size: 1rem; }

    p { margin: .75rem 0; }

    a { color: #ff5064; }

    code {
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
      font-size: .875em;
      background: #f0f0f0;
      padding: .15em .35em;
      border-radius: 3px;
    }
    pre {
      background: #f0f0f0;
      padding: 1rem;
      border-radius: 5px;
      overflow-x: auto;
      line-height: 1.5;
    }
    pre code { background: none; padding: 0; font-size: .875rem; }

    table {
      border-collapse: collapse;
      width: 100%;
      margin: 1rem 0;
      font-size: .875rem;
    }
    th, td {
      border: 1px solid #e6e6e6;
      padding: .4rem .7rem;
      text-align: left;
      vertical-align: middle;
    }
    th { background: #f8f8f8; font-weight: 600; white-space: nowrap; }
    tr:hover td { background: #fafafa; }

    blockquote {
      border-left: 3px solid #ff5064;
      margin: 1rem 0;
      padding: .5rem 1rem;
      color: #707070;
      background: #f8f8f8;
      border-radius: 0 4px 4px 0;
    }

    hr { border: none; border-top: 1px solid #e6e6e6; margin: 2rem 0; }

    ul, ol { padding-left: 1.5rem; }
    li { margin: .25rem 0; }
  </style>
</head>
<body>
${body}
</body>
</html>`

mkdirSync(new URL('docs', root), { recursive: true })
writeFileSync(new URL('docs/index.html', root), html, 'utf8')
console.log('docs/index.html written')
