# numbers-cli

A CLI program for numbers related operation. Built with Gluegun

To build , run test and build numbers-cli executable :
```shell
$ yarn install
$ yarn test
```
below link the bin folder and make numbers-cli available in your command line :

```shell
$ yarn link
```

then you can run numbers cli in your terminal :

```shell
$ numbers-cli --help
```

## Converting Numbers to Words :

Once downloaded build below command can be run to convert numbers in a text file to numbers:

```shell
$  numbers-cli to-words --file="test.input.txt"
```

## Customizing your CLI

Check out the documentation at https://github.com/infinitered/gluegun/tree/master/docs.

## Publishing to NPM

To package your CLI up for NPM, do this:

```shell
$ npm login
$ npm whoami
$ npm lint
$ npm test
(if typescript, run `npm run build` here)
$ npm publish
```

# License

MIT - see LICENSE

