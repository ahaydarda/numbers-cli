const { system, filesystem } = require('gluegun')

const src = filesystem.path(__dirname, '..')

const cli = async cmd =>
  system.run('node ' + filesystem.path(src, 'bin', 'numbers-cli') + ` ${cmd}`)

interface TestCase {
  text: string
  numberWords: string
}

test('outputs version', async () => {
  const output = await cli('--version')
  expect(output).toContain('0.0.1')
})

test('outputs help', async () => {
  const output = await cli('--help')
  expect(output).toContain('0.0.1')
})

const testCases: TestCase[] = [
  {
    text: 'The pump is 536 deep underground.',
    numberWords: 'five hundred and thirty-six'
  },
  {
    text: 'We processed 9121 records.',
    numberWords: 'nine thousand, one hundred and twenty-one'
  },
  {
    text: 'I received 23 456,9 KGs.',
    numberWords: 'number invalid'
  }
]

testCases.forEach(testCase => {
  test(`converting "${testCase.text}" to-words`, async () => {
    const path = filesystem.path(src, 'bin', 'test.input.txt')
    filesystem.write(path, testCase.text)
    const output = await cli(` to-words --file=${path}`)
    expect(output).toContain(testCase.numberWords)
    filesystem.remove(path)
  })
})

test('tw alias works for to-words command', async () => {
  const path = filesystem.path(src, 'bin', 'test.input.txt')
  const data = 'here is rest of your money, 10 pound'
  filesystem.write(path, data)
  const output = await cli(` tw --file=${path}`)
  expect(output).toContain('ten')
  filesystem.remove(path)
})
