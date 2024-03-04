import endpointUrlGen from '../utils/endpointUrlGen.js'

export async function getAllCharacters (req, res) {
  try {
    const apiUrl = endpointUrlGen('characters', 50)
    if (!apiUrl) {
      throw new Error('Failed to generate API endpoint')
    }

    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error('Failed to fetch characters from Marvel API')
    }

    const jsonData = await response.json()
    res.status(200).json(jsonData)
  } catch (error) {
    console.error('Error:', error)
    res.status(400).json({ error: 'Bad request' })
  }
}

export async function getCharactersBySearch (req, res) {
  const query = req.query.q

  try {
    const apiUrl = endpointUrlGen(`q${query}`, 50)
    if (!apiUrl) {
      throw new Error('Failed to generate API endpoint')
    }

    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error('Failed to fetch characters from Marvel API')
    }

    const jsonData = await response.json()
    res.status(200).json(jsonData)
  } catch (error) {
    console.error('Error:', error)
    res.status(400).json({ error: 'Bad request' })
  }
}

export async function getSingleCharacter (req, res) {
  const { id } = req.params

  try {
    const apiUrl = endpointUrlGen(id)
    if (!apiUrl) {
      throw new Error('Failed to generate API endpoint')
    }

    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error('Failed to fetch characters from Marvel API')
    }

    const jsonData = await response.json()
    const results = jsonData.data.results[0]
    const newJsonData = {
      id: results.id,
      name: results.name,
      description: results.description,
      thumbnail: results.thumbnail
    }

    if (results.comics.available > 0) {
      newJsonData.comics = results.comics.items

      for (let i = 0; i < newJsonData.comics.length; i++) {
        const comicId = newJsonData.comics[i].resourceURI.split('/').pop()
        const comicUrl = endpointUrlGen(comicId, 20, true)
        const comicResponse = await fetch(comicUrl)
        const comicJsonData = await comicResponse.json()
        const comicResults = comicJsonData.data.results[0]
        newJsonData.comics[i] = {
          id: comicResults.id,
          title: comicResults.title,
          thumbnail: comicResults.thumbnail,
          date: comicResults.dates[0].date.split('-')[0]
        }
      }
    }

    res.status(200).json(newJsonData)
  } catch (error) {
    console.error('Error:', error)
    res.status(400).json({ error: 'Bad request' })
  }
}
