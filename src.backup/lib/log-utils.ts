// Client-side utilities for log data
export interface LogEntry {
  date: string;
  title: string;
  content: string;
  id: string;
}

export interface LogData {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  tags: string[];
  entries: LogEntry[];
}

export function formatLogDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}. ${month}. ${day}`;
  } catch {
    return dateStr;
  }
}

export function getLogEntryTimestamp(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toISOString();
  } catch {
    return new Date().toISOString();
  }
}