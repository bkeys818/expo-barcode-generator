export const merge = <T>(old: T, replaceObj?: Partial<T>): T => ({ ...old, ...replaceObj });
