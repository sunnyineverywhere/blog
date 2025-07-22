import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { highlightCode } from './syntax-highlighter';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags?: string[];
}

export async function getAllPosts(): Promise<Post[]> {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        const processedContent = await remark()
          .use(html)
          .process(matterResult.content);
        
        let content = processedContent.toString();
        
        // Enhanced content processing for better readability
        
        // Add better paragraph spacing and breaks
        content = content.replace(/<p>/g, '<p class="prose-paragraph">');
        
        // Enhance headings with better IDs for navigation
        content = content.replace(/<h([1-6])>/g, (match, level) => {
          return `<h${level} class="heading-${level}">`;
        });
        
        // Enhanced code block processing with syntax highlighting
        content = content.replace(
          /<pre><code(?:\s+class="language-(\w+)")?>([\s\S]*?)<\/code><\/pre>/g,
          (match, language, code) => {
            const decodedCode = code
              .replace(/&lt;/g, '<')
              .replace(/&gt;/g, '>')
              .replace(/&amp;/g, '&')
              .replace(/&quot;/g, '"')
              .replace(/&#39;/g, "'");
            
            if (language) {
              const highlightedCode = highlightCode(decodedCode, language);
              return `<div class="code-block-wrapper"><div class="code-block-header"><span class="code-block-language">${language}</span><button class="copy-button" data-code="${encodeURIComponent(decodedCode)}">Copy</button></div><pre class="language-${language}"><code class="language-${language}">${highlightedCode}</code></pre></div>`;
            }
            
            return `<div class="code-block-wrapper"><pre><code>${decodedCode}</code></pre></div>`;
          }
        );
        
        // Improve list formatting
        content = content.replace(/<ul>/g, '<ul class="enhanced-list">');
        content = content.replace(/<ol>/g, '<ol class="enhanced-list numbered">');
        
        // Better blockquote formatting
        content = content.replace(/<blockquote>/g, '<blockquote class="enhanced-blockquote">');

        return {
          slug,
          title: matterResult.data.title || slug,
          date: matterResult.data.date || new Date().toISOString(),
          excerpt: matterResult.data.excerpt || '',
          content,
          tags: matterResult.data.tags || [],
        };
      })
  );

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    
    let content = processedContent.toString();
    
    // Enhanced content processing for better readability
    
    // Add better paragraph spacing and breaks
    content = content.replace(/<p>/g, '<p class="prose-paragraph">');
    
    // Enhance headings with better IDs for navigation
    content = content.replace(/<h([1-6])>/g, (match, level) => {
      return `<h${level} class="heading-${level}">`;
    });
    
    // Enhanced code block processing with syntax highlighting
    content = content.replace(
      /<pre><code(?:\s+class="language-(\w+)")?>([\s\S]*?)<\/code><\/pre>/g,
      (match, language, code) => {
        const decodedCode = code
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&amp;/g, '&')
          .replace(/&quot;/g, '"')
          .replace(/&#39;/g, "'");
        
        if (language) {
          const highlightedCode = highlightCode(decodedCode, language);
          return `<div class="code-block-wrapper"><div class="code-block-header"><span class="code-block-language">${language}</span><button class="copy-button" data-code="${encodeURIComponent(decodedCode)}">Copy</button></div><pre class="language-${language}"><code class="language-${language}">${highlightedCode}</code></pre></div>`;
        }
        
        return `<div class="code-block-wrapper"><pre><code>${decodedCode}</code></pre></div>`;
      }
    );
    
    // Improve list formatting
    content = content.replace(/<ul>/g, '<ul class="enhanced-list">');
    content = content.replace(/<ol>/g, '<ol class="enhanced-list numbered">');
    
    // Better blockquote formatting
    content = content.replace(/<blockquote>/g, '<blockquote class="enhanced-blockquote">');

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || new Date().toISOString(),
      excerpt: matterResult.data.excerpt || '',
      content,
      tags: matterResult.data.tags || [],
    };
  } catch {
    return null;
  }
}