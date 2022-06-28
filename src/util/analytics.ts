import { Metric } from 'web-vitals'

export type AnalyticsEventParams = Record<string, string | number>

export const sendEvent = (eventName: string, params: AnalyticsEventParams) => {
  const windowExplicitAny = window as any
  if (windowExplicitAny.gtag) windowExplicitAny.gtag('event', eventName, params)
}

export const sendToGoogleAnalytics = ({ name, delta, value, id }: Metric) => {
  const windowExplicitAny = window as any
  if (windowExplicitAny.gtag)
    windowExplicitAny.gtag('event', name, {
      // Built-in params:
      value: delta, // Use `delta` so the value can be summed.
      // Custom params:
      metric_id: id, // Needed to aggregate events.
      metric_value: value, // Optional.
      metric_delta: delta, // Optional.

      // OPTIONAL: any additional params or debug info here.
      // See: https://web.dev/debug-web-vitals-in-the-field/
      // metric_rating: 'good' | 'ni' | 'poor',
      // debug_info: '...',
      // ...
    })
}
