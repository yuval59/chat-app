import { useCookies } from 'react-cookie'
import { z } from 'zod'
import { ALLCOOKIES, COOKIES } from './constants'

const ExpectedCookies = z.object({
  [COOKIES.ID]: z.string(),
  [COOKIES.JWT]: z.string(),
})

const parseCookies = (cookies: unknown): CookieObject => {
  const parsed = ExpectedCookies.safeParse(cookies)
  if (!parsed.success)
    return {
      [COOKIES.ID]: '',
      [COOKIES.JWT]: '',
    }

  return parsed.data
}

export const initializeCookies = () => {
  const [state, setState] = useCookies([...ALLCOOKIES]) // Dodging TS error

  const cookies = parseCookies(state)
  for (const key of ALLCOOKIES) setState(key, cookies[key])

  const getCookie = <K extends CookiesKey>(cookie: K): CookieObject[K] =>
    cookies[cookie]

  const setCookie = <K extends CookiesKey>(
    cookie: K,
    value: CookieObject[K]
  ) => {
    cookies[cookie] = value
    setState(cookie, value)
  }

  return { getCookie, setCookie }
}

type CookieObject = z.infer<typeof ExpectedCookies>
type CookiesKey = (typeof COOKIES)[keyof typeof COOKIES]

export type CookieGetter = ReturnType<typeof initializeCookies>['getCookie']
export type CookieSetter = ReturnType<typeof initializeCookies>['setCookie']
