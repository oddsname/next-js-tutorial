
//GET: /api/users/
export async function GET(request) {
    const users = [
        {id: 1, name: 'john'},
        {id: 2, name: 'Derek'},
        {id: 3, name: 'Jane'},
    ]

    return new Response(JSON.stringify(users))
}