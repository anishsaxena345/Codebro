const fs = require('fs')

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)


const sample = {
    name: 'Anish',
    planet: 'Earth',
    age: '25'
}

const sampleJSON = JSON.stringify(sample)
fs.writeFileSync('1-json.json', sampleJSON)
const parsedData = JSON.parse(sampleJSON)
console.log(parsedData)
fs.writeFileSync('1-json',sample)