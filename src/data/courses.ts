import { useMemo } from 'react';
import courses from './courses.json';

export type CourseModel = {
    id: string
    name: string
    description: string
    startDate: Date
    endDate: Date
    city: string
    minimumAge: number
    maximumAge: number
}

export const useCourses = () => courses.map(
    course => ({
        id: course['Name'] + course['Start Date'] + course['End Date'] + course['City'],
        name: course['Name'],
        description: course['Description'],
        startDate: new Date(course['Start Date']),
        endDate: new Date(course['End Date']),
        city: course['City'],
        minimumAge: course['Minimum Age'],
        maximumAge: course['Maximum Age'],
    })
)
