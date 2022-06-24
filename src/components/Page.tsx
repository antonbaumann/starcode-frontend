import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type PageProps = {
  title: string
  children?: JSX.Element
}

const Page = ({ title, children }: PageProps) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    document.title = title
  }, [title])

  return <>{children}</>
}

export default Page
