import { baseUrl, repositoriesQuantity } from "../variables.js"

async function getEvents(userName){
    const url = `${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`
    const response = await fetch(url)
    return await response.json()
}

export { getEvents }