let index = 0;

export function generationId(): string {
  return `N${Math.random().toString(36).substr(2, 9)}${index++}`;
}
