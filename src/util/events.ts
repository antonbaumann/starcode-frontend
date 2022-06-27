export type AnalyticsEventParams = Record<string, string | number>

export const sendEvent = (eventName: string, params: AnalyticsEventParams) => {
  const windowExplicitAny = window as any
  if (windowExplicitAny.gtag) windowExplicitAny.gtag('event', eventName, params)
}
