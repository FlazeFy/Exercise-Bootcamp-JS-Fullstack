export function convertFormatTimestamp(timestamp: number) {
    if (!timestamp) return '-'
    
    const date = new Date(timestamp)
    
    const formatted = date.toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    }).replace(',', '') 
  
    return formatted
}
  