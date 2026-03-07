import re

with open('src/renderer/pages/conversation/preview/components/viewers/MarkdownViewer.tsx', 'r') as f:
    content = f.read()

import_statement = "import DOMPurify from 'dompurify';\n"
content = import_statement + content

content = re.sub(
    r'dangerouslySetInnerHTML=\{\{\s*__html:\s*html\s*,?\s*\}\}',
    r'dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}',
    content
)

with open('src/renderer/pages/conversation/preview/components/viewers/MarkdownViewer.tsx', 'w') as f:
    f.write(content)
