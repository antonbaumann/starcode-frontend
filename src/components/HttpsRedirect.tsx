import { useEffect } from 'react'

type HttpsRedirectProps = {
  disabled?: boolean
  children: JSX.Element
}

const HttpsRedirect = ({ children, disabled = false }: HttpsRedirectProps) => {
  useEffect(() => {
    if (!disabled && window.location.protocol === 'http:') {
      window.location.replace(window.location.href.replace('http:', 'https:'))
    }
  }, [disabled])

  return <>{children}</>
}

export default HttpsRedirect
