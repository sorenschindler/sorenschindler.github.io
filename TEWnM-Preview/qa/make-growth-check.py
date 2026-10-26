from pathlib import Path

root = Path(__file__).resolve().parent.parent
html = (root / 'option-1.html').read_text(encoding='utf-8')
html = html.replace('<head>', '<head><base href="../">')
html = html.replace('<script src="leaf-topics.js" defer></script>', '<script src="leaf-topics.js" defer></script><script src="qa/leaf-growth-check.js" defer></script>')
(root / 'qa/leaf-growth-check.html').write_text(html, encoding='utf-8')
