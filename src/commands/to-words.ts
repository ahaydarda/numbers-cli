import { GluegunCommand } from 'gluegun';
import { extractNumberInAText } from '../util/numericals'
import { numbersToWords} from 'numbers-to-words-lib'
import { NumberInvalid } from '../errors/number-invalid'

const command: GluegunCommand = {
  name: 'to-words',
  description: 'converts numbers in lines of a file into words',
  alias: "tw",
  run: async toolbox => {
    const { print,parameters,getLines } = toolbox;
    const {options} = parameters;
    const {file, language} = options;
    if(file) {
      const lines = getLines(file).filter(line=>line);
      lines.forEach(line=> {
        try {
          const numberInLine = extractNumberInAText(line);
          print.info(numbersToWords(numberInLine,language));
        } catch (error) {
          if(error instanceof  NumberInvalid) {
            print.info(error.message)
          } else{
            throw error ;
          }
        }
      });
    } else {
      print.info('Please enter a file path with --file="<path-to-file>" option');
    }
  },
}

module.exports = command
