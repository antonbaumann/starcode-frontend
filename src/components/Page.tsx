import {Helmet} from 'react-helmet'

type PageProps = {
    title: string
    children?: JSX.Element
}

const Page = ({title, children}: PageProps) => {
    return (
        <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        {children}
        </>
    )
}

export default Page