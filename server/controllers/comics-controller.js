import endpointUrlGen from '../utils/endpointUrlGen'

export async function getAllComics (req, res) {
  const { id } = req.params

  try {
    const apiUrl = endpointUrlGen(id, 20, true)
    if (!apiUrl) {
      throw new Error('Failed to generate API endpoint')
    }

    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error('Failed to fetch comics from Marvel API')
    }

    const jsonData = await response.json()
    res.status(200).json(jsonData)
  } catch (error) {
    console.error('Error:', error)
    res.status(400).json({ error: 'Bad request' })
  }
}
