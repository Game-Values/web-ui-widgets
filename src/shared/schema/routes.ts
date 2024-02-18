/* eslint-disable */
/**
 * This file was generated by 'vite-plugin-kit-routes'
 *
 *      >> DO NOT EDIT THIS FILE MANUALLY <<
 */

/**
 * PAGES
 */
const PAGES = {
  "/": (params?: { locale?: (Parameters<typeof import('../../params/locale.ts').match>[0]) }) => {
    return `${params?.locale ? `/${params?.locale}`: '/'}`
  },
  "/favorites": (params?: { locale?: (Parameters<typeof import('../../params/locale.ts').match>[0]) }) => {
    return `${params?.locale ? `/${params?.locale}`: ''}/favorites`
  },
  "/funds": (params?: { locale?: (Parameters<typeof import('../../params/locale.ts').match>[0]) }) => {
    return `${params?.locale ? `/${params?.locale}`: ''}/funds`
  },
  "/lots": (params?: { locale?: (Parameters<typeof import('../../params/locale.ts').match>[0]) }) => {
    return `${params?.locale ? `/${params?.locale}`: ''}/lots`
  },
  "/lots/create": (params?: { locale?: (Parameters<typeof import('../../params/locale.ts').match>[0]) }) => {
    return `${params?.locale ? `/${params?.locale}`: ''}/lots/create`
  },
  "/messages": (params?: { locale?: (Parameters<typeof import('../../params/locale.ts').match>[0]) }) => {
    return `${params?.locale ? `/${params?.locale}`: ''}/messages`
  },
  "/purchases": (params?: { locale?: (Parameters<typeof import('../../params/locale.ts').match>[0]) }) => {
    return `${params?.locale ? `/${params?.locale}`: ''}/purchases`
  },
  "/referral": (params?: { locale?: (Parameters<typeof import('../../params/locale.ts').match>[0]) }) => {
    return `${params?.locale ? `/${params?.locale}`: ''}/referral`
  },
  "/sales": (params?: { locale?: (Parameters<typeof import('../../params/locale.ts').match>[0]) }) => {
    return `${params?.locale ? `/${params?.locale}`: ''}/sales`
  },
  "/blog": (params?: { locale?: (Parameters<typeof import('../../params/locale.ts').match>[0]) }) => {
    return `${params?.locale ? `/${params?.locale}`: ''}/blog`
  },
  "/g/[gameId]": (params: { gameId: (string | number), locale?: (Parameters<typeof import('../../params/locale.ts').match>[0]), gameSection?: (Parameters<typeof import('../../params/gameSection.ts').match>[0]) }) => {
    return `${params?.locale ? `/${params?.locale}`: ''}/g/${params.gameId}${params?.gameSection ? `/${params?.gameSection}`: ''}`
  },
  "/promotions": (params?: { locale?: (Parameters<typeof import('../../params/locale.ts').match>[0]) }) => {
    return `${params?.locale ? `/${params?.locale}`: ''}/promotions`
  },
  "/top-10": (params?: { locale?: (Parameters<typeof import('../../params/locale.ts').match>[0]) }) => {
    return `${params?.locale ? `/${params?.locale}`: ''}/top-10`
  },
  "/u/[userId]": (params: { userId: (string | number), locale?: (Parameters<typeof import('../../params/locale.ts').match>[0]) }) => {
    return `${params?.locale ? `/${params?.locale}`: ''}/u/${params.userId}`
  }
}

/**
 * SERVERS
 */
const SERVERS = {
  
}

/**
 * ACTIONS
 */
const ACTIONS = {
  
}

/**
 * LINKS
 */
const LINKS = {
  
}

type ParamValue = string | number | undefined

/**
 * Append search params to a string
 */
export const appendSp = (sp?: Record<string, ParamValue | ParamValue[]>, prefix: '?' | '&' = '?') => {
  if (sp === undefined) return ''

  const params = new URLSearchParams()
  const append = (n: string, v: ParamValue) => {
    if (v !== undefined) {
      params.append(n, String(v))
    }
  }

  for (const [name, val] of Object.entries(sp)) {
    if (Array.isArray(val)) {
      for (const v of val) {
        append(name, v)
      }
    } else {
      append(name, val)
    }
  }

  const formatted = params.toString()
  if (formatted) {
    return `${prefix}${formatted}`
  }
  return ''
}

/**
 * get the current search params
 * 
 * Could be use like this:
 * ```
 * route("/cities", { page: 2 }, { ...currentSP() })
 * ```
 */ 
export const currentSp = () => {
  const params = new URLSearchParams(window.location.search)
  const record: Record<string, string> = {}
  for (const [key, value] of params.entries()) {
    record[key] = value
  }
  return record
}

function StringOrUndefined(val: any) {
  if (val === undefined) {
    return undefined
  }

  return String(val)
}

// route function helpers
type NonFunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]
type FunctionKeys<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]
type FunctionParams<T> = T extends (...args: infer P) => any ? P : never

const AllObjs = { ...PAGES, ...ACTIONS, ...SERVERS, ...LINKS }
type AllTypes = typeof AllObjs

/**
 * To be used like this: 
 * ```ts
 * import { route } from './ROUTES'
 * 
 * route('site_id', { id: 1 })
 * ```
 */
export function route<T extends FunctionKeys<AllTypes>>(key: T, ...params: FunctionParams<AllTypes[T]>): string
export function route<T extends NonFunctionKeys<AllTypes>>(key: T): string
export function route<T extends keyof AllTypes>(key: T, ...params: any[]): string {
  if (AllObjs[key] as any instanceof Function) {
    const element = (AllObjs as any)[key] as (...args: any[]) => string
    return element(...params)
  } else {
    return AllObjs[key] as string
  }
}

/**
* Add this type as a generic of the vite plugin `kitRoutes<KIT_ROUTES>`.
*
* Full example:
* ```ts
* import type { KIT_ROUTES } from './ROUTES'
* import { kitRoutes } from 'vite-plugin-kit-routes'
*
* kitRoutes<KIT_ROUTES>({
*  PAGES: {
*    // here, key of object will be typed!
*  }
* })
* ```
*/
export type KIT_ROUTES = {
  PAGES: { '/': 'locale', '/favorites': 'locale', '/funds': 'locale', '/lots': 'locale', '/lots/create': 'locale', '/messages': 'locale', '/purchases': 'locale', '/referral': 'locale', '/sales': 'locale', '/blog': 'locale', '/g/[gameId]': 'gameId' | 'locale' | 'gameSection', '/promotions': 'locale', '/top-10': 'locale', '/u/[userId]': 'userId' | 'locale' }
  SERVERS: Record<string, never>
  ACTIONS: Record<string, never>
  LINKS: Record<string, never>
  Params: { locale: never, gameId: never, gameSection: never, userId: never }
}
