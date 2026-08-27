export function createPageUrl(pageName: string): string {
    if (!pageName) return '/';
    
    return '/' + pageName
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-'); // جایگزینی هر تعداد فاصله با یک خط تیره
}
