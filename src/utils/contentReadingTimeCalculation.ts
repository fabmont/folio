export function contentReadingTimeCalculation(content: string): number {
  const wordCount = content.trim().split(/\s+/).length;
  const wordsPerMinute = 225;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
}
