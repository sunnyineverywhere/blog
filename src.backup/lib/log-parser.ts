import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { LogEntry, LogData } from './log-utils';

export async function parseLogFile(): Promise<LogData | null> {
  try {
    const logPath = path.join(process.cwd(), 'posts', 'log.md');
    
    if (!fs.existsSync(logPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(logPath, 'utf8');
    const matterResult = matter(fileContents);
    
    // Parse the markdown content to extract log entries
    const content = matterResult.content;
    const entries = await parseLogEntries(content);

    return {
      title: matterResult.data.title || 'Development Log',
      date: matterResult.data.date || new Date().toISOString(),
      excerpt: matterResult.data.excerpt || '',
      category: matterResult.data.category || 'Log',
      tags: matterResult.data.tags || [],
      entries,
    };
  } catch (error) {
    console.error('Error parsing log file:', error);
    return null;
  }
}

async function parseLogEntries(content: string): Promise<LogEntry[]> {
  const entries: LogEntry[] = [];
  
  // Split content by ## headers (log entries)
  const sections = content.split(/^## /gm).filter(section => section.trim());
  
  for (const section of sections) {
    const lines = section.trim().split('\n');
    const headerLine = lines[0];
    
    // Parse header: "2025-01-23 | Title"
    const headerMatch = headerLine.match(/^(.+?)\s*\|\s*(.+)$/);
    
    if (headerMatch) {
      const [, dateStr, title] = headerMatch;
      const restContent = lines.slice(1).join('\n').trim();
      
      // Process markdown content for this entry
      const processedContent = await remark()
        .use(html)
        .process(restContent);
      
      let htmlContent = processedContent.toString();
      
      // Enhance content processing similar to posts
      htmlContent = htmlContent.replace(/<p>/g, '<p class="prose-paragraph">');
      htmlContent = htmlContent.replace(/<ul>/g, '<ul class="enhanced-list">');
      htmlContent = htmlContent.replace(/<ol>/g, '<ol class="enhanced-list numbered">');
      htmlContent = htmlContent.replace(/<code>/g, '<code class="inline-code">');
      
      entries.push({
        date: dateStr.trim(),
        title: title.trim(),
        content: htmlContent,
        id: generateEntryId(dateStr.trim(), title.trim()),
      });
    }
  }
  
  // Sort entries by date (newest first)
  return entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function generateEntryId(date: string, title: string): string {
  const cleanTitle = title.toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-');
  return `${date}-${cleanTitle}`;
}

