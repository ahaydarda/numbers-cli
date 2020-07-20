
import { GluegunCommand } from 'gluegun';
import {numbersToWords } from 'numbers-to-words-lib';

const command: GluegunCommand = {
  name: 'numbers-cli',
  run: async toolbox => {
    const { print } = toolbox
    const result = numbersToWords(100);
    print.info('Welcome to your CLI');
    print.info('numbers to words' + result);
  },
}

module.exports = command
