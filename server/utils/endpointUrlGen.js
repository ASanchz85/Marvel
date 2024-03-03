import { hashGenerator, getCurrentTimestamp, publicKey } from './hashGenerator'

const API_BASE_URL = 'http://gateway.marvel.com/v1/public/'

function containsNumber (str) {
  return !isNaN(parseInt(str))
}

export default function endpointUrlGen (endpoint, limit = 20, showComics = false) {
  const ts = getCurrentTimestamp()
  const hash = hashGenerator(ts)

  if (limit > 100) limit = 100
  if (limit < 1) limit = 1

  if (endpoint === '') return null
  if (typeof limit !== 'number') return null

  if (endpoint === 'characters') {
    return `${API_BASE_URL}${endpoint}?limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
  }

  if (containsNumber(endpoint)) {
    return `${API_BASE_URL}characters/${endpoint}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
  }

  if (showComics && containsNumber(endpoint)) {
    return `${API_BASE_URL}characters/${endpoint}/comics?limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
  }
}
