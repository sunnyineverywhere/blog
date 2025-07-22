import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';

export function highlightCode(code: string, language: string = 'javascript'): string {
  const normalizedLanguage = language.toLowerCase();
  
  // Map some common aliases
  const languageMap: Record<string, string> = {
    'js': 'javascript',
    'ts': 'typescript',
    'py': 'python',
    'sh': 'bash',
    'shell': 'bash',
  };
  
  const finalLanguage = languageMap[normalizedLanguage] || normalizedLanguage;
  
  if (Prism.languages[finalLanguage]) {
    try {
      return Prism.highlight(code, Prism.languages[finalLanguage], finalLanguage);
    } catch (error) {
      console.warn(`Failed to highlight code with language: ${finalLanguage}`, error);
      return code;
    }
  }
  
  return code;
}