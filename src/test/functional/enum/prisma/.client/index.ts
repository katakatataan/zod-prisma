/**
 * Utility Types
 */

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON object.
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
 */
export type JsonObject = { [Key in string]?: JsonValue }

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
export interface JsonArray extends Array<JsonValue> {}

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches any valid JSON value.
 */
export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

/**
 * Model User
 *
 */
export type User = {
	id: number
	meta: JsonValue
}

/**
 * Model Post
 *
 */
export type Post = {
	id: number
	authorId: number
}

export const Gender = {
	Man: 'Man',
	Woman: 'Woman',
}

export type Status = typeof Gender[keyof typeof Gender]