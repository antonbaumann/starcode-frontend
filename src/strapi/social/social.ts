import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

export type SocialMediaUrlsModel = {
  instagramUrl: string
  facebookUrl: string
  linkedinUrl: string
  newsletterUrl: string
}

const SOCIAL_QUERY = gql`
  query FAQ {
    social {
      data {
        attributes {
          instagramUrl
          facebookUrl
          linkedinUrl
          newsletterUrl
        }
      }
    }
  }
`

export const useSocialMediaUrls = (): SocialMediaUrlsModel => {
  const { data, loading, error } = useQuery(SOCIAL_QUERY)

  const empty = {
    instagramUrl: '',
    facebookUrl: '',
    linkedinUrl: '',
    newsletterUrl: '',
  }

  if (loading) return empty
  if (error) {
    console.error(error)
    return empty
  }

  return data.social.data.attributes
}