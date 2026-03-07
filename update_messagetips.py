import re

with open('src/renderer/messages/MessageTips.tsx', 'r') as f:
    content = f.read()

import_statement = "import DOMPurify from 'dompurify';\n"
content = import_statement + content

content = re.sub(
    r'dangerouslySetInnerHTML=\{\{\s*__html:\s*displayContent\s*,?\s*\}\}',
    r'dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(displayContent) }}',
    content
)

with open('src/renderer/messages/MessageTips.tsx', 'w') as f:
    f.write(content)
