// const fs = require('fs')
// fs.writeFile("./nodeTest.txt", "hello", err => {
//    if(err) console.log(err)
// })
// fs.readFile("nodeTest.txt", (err, data) => {
//     console.log(data.toString())
// })
const path = require('path')
console.log(path.join(__dirname, 'nodeTest.txt'))
