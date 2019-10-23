import Papa from 'papaparse'
import fs from 'fs'

export const csvToJson = async (
  inputPath: string,
  outputPath: string
): Promise<void> => {
  const csv = await fs.promises.readFile(inputPath, 'utf-8')
  const exams = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true
  })

  fs.writeFile(outputPath, JSON.stringify(exams), err => {
    if (err) console.log(err)
  })
}
;(async (): Promise<void> => {
  await csvToJson('./app/exam.csv', './build/exam.json')
})()
