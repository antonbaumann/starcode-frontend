import { useEffect } from 'react'

type PageProps = {
  title: string
  children?: JSX.Element
}

const Page = ({ title, children }: PageProps) => {
  useEffect(() => {
    document.title = title
  }, [title])

  return <>{children}</>
}

export default Page
