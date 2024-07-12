import posts from './mentor/data'

export function onRequestGet() {
    return Response.json(mentors)
}