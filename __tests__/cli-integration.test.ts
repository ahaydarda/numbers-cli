const { system, filesystem } = require('gluegun')

const src = filesystem.path(__dirname, '..')

const cli = async cmd =>
  system.run('node ' + filesystem.path(src, 'bin', 'numbers-cli') + ` ${cmd}`)

test('outputs version', async () => {
  const output = await cli('--version')
  expect(output).toContain('0.0.1')
})

test('outputs help', async () => {
  const output = await cli('--help')
  expect(output).toContain('0.0.1')
})

test('to-words', async () => {
  const inputPath  = filesystem.path(src, 'test.input.txt');
  const output = await cli(` to-words --file=${inputPath}`);
  expect(output).toContain(
    "five hundred and thirty-six" );
})
