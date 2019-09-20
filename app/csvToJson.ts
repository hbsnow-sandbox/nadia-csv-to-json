import Papa from 'papaparse'
import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile)

;(async () => {
  const csv = await readFile('./app/exam.csv', 'utf-8')
  const exams = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true
  })

  fs.writeFile('./src/assets/data/race.json', JSON.stringify(exams), (err) => {
    if(err) console.log(err)
  })
})()

