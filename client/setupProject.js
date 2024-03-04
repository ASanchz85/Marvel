import readline from 'readline'
import fs from 'fs'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const promptValues = (values) => {
  return new Promise((resolve) => {
    const prompts = Object.keys(values).map((key) => {
      return new Promise((resolve) => {
        rl.question(`Enter value for ${key}: `, (answer) => {
          values[key] = answer
          resolve()
        })
      })
    })

    Promise.all(prompts).then(() => {
      rl.close()
      resolve(values)
    })
  })
}

const saveToEnvFile = (values) => {
  const envContent = Object.entries(values)
    .map(([key, value]) => `${key.toUpperCase()}=${value}`)
    .join('\n')
  fs.writeFile('.env', envContent, (err) => {
    if (err) throw err
    console.log('.env file has been created successfully!')
  })
}

const valuesToPrompt = {
  PORT: '',
  CLIENT_URL: '',
  MARVEL_API_PUBLIC_KEY: '',
  MARVEL_API_PRIVATE_KEY: ''
}

promptValues(valuesToPrompt)
  .then(saveToEnvFile)
  .catch((err) => console.error(err))
