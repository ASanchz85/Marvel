import readline from 'readline'
import fs from 'fs'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('Please enter the following values to create a .env file\n')
console.log(
  'In this case, it is hihgly recommended to use the following pattern:\n'
)
console.log('http://localhost:3000/api/characters/')

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
  VITE_REACT_APP_API_CHARACTER_URL: ''
}

promptValues(valuesToPrompt)
  .then(saveToEnvFile)
  .catch((err) => console.error(err))
