export function formatSlugToTitle(slug: string): string {
    return slug
      .split('-')                    // ['two', 'pointers']
      .map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )                              // ['Two', 'Pointers']
      .join(' ')                     // 'Two Pointers'
  }
  