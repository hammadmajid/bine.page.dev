export const slugify = (s: string): string => {
	return s.trim().toLowerCase().replace(/\s+/g, '-')
}
