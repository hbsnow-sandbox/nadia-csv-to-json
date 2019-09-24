import test from 'ava'
import { readFile, csvToJson } from '../app/csvToJson'

test.before(async t => {
  await csvToJson('./test/test.csv', './test/test.json')
})

test('結果が正しいかどうか', async t => {
  const data = await readFile('./test/test.json', 'utf-8')
  const parsed = JSON.parse(data)

  t.is(parsed.data[0]['氏名'], 'Aさん')
  t.is(parsed.data[0]['英語'], '2')
  t.is(parsed.data[1]['数学'], '4')
})
