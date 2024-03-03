import endpointUrlGen from '../utils/endpointUrlGen'

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
    res.status(200).json(jsonData)
  } catch (error) {
    console.error('Error:', error)
    res.status(400).json({ error: 'Bad request' })
  }
}
