
import { GluegunToolbox } from 'gluegun'
const fs = require('fs');

// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = (toolbox: GluegunToolbox) => {
  toolbox.getLines = (path) => {
    try {
      // read contents of the file
      const data = fs.readFileSync(path, 'UTF-8');
      // split the contents by new line
      const lines = data.split(/\r?\n/);
      return lines;
    } catch (err) {
      toolbox.print.error(err);
    }
  }

  // enable this if you want to read configuration in from
  // the current folder's package.json (in a "numbers-cli" property),
  // numbers-cli.config.json, etc.
  // toolbox.config = {
  //   ...toolbox.config,
  //   ...toolbox.config.loadConfig(process.cwd(), "numbers-cli")
  // }
}
