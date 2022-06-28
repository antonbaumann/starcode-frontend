import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { shuffle } from '../../util/array'

export type MemberModel = {
  name: string
  role: string
  imageUrl: string
  management?: boolean
  instagramUrl?: string
  facebookUrl?: string
  linkedinUrl?: string
  githubUrl?: string
  email?: string
}

export type BoardAndMembers = {
  board: MemberModel[]
  members: MemberModel[]
}

const TEAM_QUERY = gql`
  query Team {
    team {
      data {
        attributes {
          members(pagination: { limit: -1 }) {
            name
            role
            management
            instagramUrl
            facebookUrl
            linkedinUrl
            githubUrl
            email
            image {
              data {
                attributes {
                  formats
                }
              }
            }
          }
        }
      }
    }
  }
`

export const useTeam = (): BoardAndMembers => {
  const { data, loading, error } = useQuery(TEAM_QUERY)

  const emptyResult = {
    board: [],
    members: [],
  }

  if (loading) return emptyResult
  if (error) {
    console.error(error)
    return emptyResult
  }

  const teamResult = data.team.data.attributes.members

  const team = teamResult.map((memberResult: any) => {
    const imageData = memberResult.image.data[0]

    const imageUrl =
      imageData?.attributes.formats.medium?.url ||
      imageData?.attributes.formats.small?.url ||
      imageData?.attributes.formats.thumbnail?.url ||
      ''

    return {
      name: memberResult.name,
      role: memberResult.role,
      imageUrl: imageUrl,
      management: memberResult.management,
      instagramUrl: memberResult.instagramUrl,
      facebookUrl: memberResult.facebookUrl,
      linkedinUrl: memberResult.linkedinUrl,
      githubUrl: memberResult.githubUrl,
      email: memberResult.email,
    }
  }) as MemberModel[]

  return {
    board: team.filter((member) => member.management),
    members: shuffle(team.filter((member) => !member.management)),
  }
}
