import crypto from 'crypto'

const publicKey = process.env.MARVEL_API_PUBLIC_KEY
const privateKey = process.env.MARVEL_API_PRIVATE_KEY

function getCurrentTimestamp () {
  return Math.floor(Date.now() / 1000)
}
function hashGenerator (ts) {
  const hash = crypto.createHash('md5')
  const originToHash = `${ts}${privateKey}${publicKey}`
  hash.update(originToHash)

  return hash.digest('hex')
}

export { hashGenerator, getCurrentTimestamp, publicKey }
