// src/utils/contentLoader.ts

export async function loadMarkdownContent(filename: string): Promise<string> {
    const response = await fetch(`/mock/content/${filename}`);
    return response.text();
  }