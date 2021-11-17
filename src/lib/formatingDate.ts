export function formatingDateString(dateStr: string) {
    const date = new Date(dateStr);
    const options = { month: 'long', year: 'numeric' } as Intl.DateTimeFormatOptions;
    return date.toLocaleDateString('en-US', options);
}