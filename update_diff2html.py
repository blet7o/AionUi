import re

with open('src/renderer/components/Diff2Html.tsx', 'r') as f:
    content = f.read()

# Add import DOMPurify from 'dompurify';
import_statement = "import DOMPurify from 'dompurify';\n"
content = import_statement + content

# Replace dangerouslySetInnerHTML={{ __html: diffHtmlContent }} with dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(diffHtmlContent) }}
content = re.sub(
    r'dangerouslySetInnerHTML=\{\{\s*__html:\s*diffHtmlContent\s*,?\s*\}\}',
    r'dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(diffHtmlContent) }}',
    content
)

with open('src/renderer/components/Diff2Html.tsx', 'w') as f:
    f.write(content)
