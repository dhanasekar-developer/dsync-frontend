export const capitalize = (content: string) => {
    return content.trim().split(/\s+/).map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}