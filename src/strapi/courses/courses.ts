import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"

export type CourseModel = {
    id: string
    name: string
    description: string
    startDate: Date
    endDate: Date
    city: string
    minimumAge: number
    maximumAge: number
    enrollFormUrl: string
    iconUrl?: string
}

const COURSES_QUERY = gql`
    query Courses {
        course {
            data {
                attributes {
                    courses {
                        id
                        name
                        description
                        startDate
                        endDate
                        city
                        minimumAge
                        maximumAge
                        enrollFormUrl
                        icon {
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

export const useCourses = (): CourseModel[] => {
    const {data, loading, error } = useQuery(COURSES_QUERY)
    
    if (loading) return []
    if (error) {
        console.error(error)
        return []
    }
    
    const coursesResult = data.course.data.attributes.courses
    return coursesResult.map((courseResult: any) => {
        const iconData = courseResult.icon.data
        const iconUrl = iconData ? iconData[0]?.attributes.formats.medium.url : null

        return {
            id: courseResult.id,
            name: courseResult.name,
            description: courseResult.description,
            startDate: new Date(courseResult.startDate),
            endDate: new Date(courseResult.endDate),
            city: courseResult.city,
            minimumAge: courseResult.minimumAge,
            maximumAge: courseResult.maximumAge,
            enrollFormUrl: courseResult.enrollFormUrl,
            iconUrl: iconUrl, 
        }
    }) as CourseModel[]
}