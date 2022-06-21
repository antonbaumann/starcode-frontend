import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

export type FAQModel = {
    question: string
    answer: string
}

const FAQ_QUERY = gql`
    query FAQ {
        faq {
            data {
              attributes {
                faq {
                  question
                  answer
                }
              }
            }
        }
    }
`

export const useFAQ = (): FAQModel[] => {
    const {data, loading, error } = useQuery(FAQ_QUERY)
    
    if (loading) return []
    if (error) {
        console.error(error)
        return []
    }
    return data.faq.data.attributes.faq
}