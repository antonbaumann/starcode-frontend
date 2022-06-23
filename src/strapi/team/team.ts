import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

export type MemberModel = {
  name: string
  role: string
  imageUrl: string
  management?: boolean
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
          members {
            name
            role
            management
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

  const team = teamResult.map((memberResult: any) => ({
    name: memberResult.name,
    role: memberResult.role,
    imageUrl: memberResult.image.data[0].attributes.formats.medium.url,
    management: memberResult.management,
  })) as MemberModel[]

  return {
    board: team.filter((member) => member.management),
    members: team.filter((member) => !member.management),
  }
}
