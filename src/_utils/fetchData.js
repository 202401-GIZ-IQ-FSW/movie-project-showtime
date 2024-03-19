import { BearerToken, TMDB_BASE_URL } from "@/data/constants"

export async function fetchData(endpoint) {
  const url = `${TMDB_BASE_URL}${endpoint}`

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${BearerToken}`,
      },
    })

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error("fetchData error:", error)
    throw error
  }
}
