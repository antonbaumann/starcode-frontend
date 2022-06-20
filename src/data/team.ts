import boardMembers from './board_members.json'
import teamMembers from './team_members.json'


type JsonTeamMember = {
    name: string
    role: string
    image_url: string
}

export type TeamMember = {
    name: string
    role: string
    imageUrl: string
}

const jsonToTeamMember = (json: JsonTeamMember): TeamMember => ({
    name: json.name,
    role: json.role,
    imageUrl: json.image_url,
})

export const useBoardMembers = () => boardMembers.map(jsonToTeamMember)

export const useTeamMembers = () => teamMembers.map(jsonToTeamMember)