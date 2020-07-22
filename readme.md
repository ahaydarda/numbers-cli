# numbers-cli

A nodejs CLI application for numbers related operation

 #####Currently it supports converting numerical values into english words

##How to Build, Test and Run

git clone the project and cd into the project folder:

install,build and run tests

```shell
$ yarn install
$ yarn build
$ yarn test
```
Numbers-cli executable is already part of project however
above should re-create the bin folder where the cli app sits.

below will link the bin folder and make numbers-cli available in your command line :
 ```shell
 $ yarn link
 ```


then you can run numbers cli in your terminal without needing to be in the bin folder to use it:

```shell
$ numbers-cli --help
```

## Converting Numbers to Words :

Once numbers-cli is there, below command can be run to convert numbers in a text file to numbers
and print it in standard output:

```shell
$  numbers-cli to-words --file="test.input.txt"
```

alternatively you can run it with tw alias
```shell
$  numbers-cli tw --file="test.input.txt"
```

application currently by default converts to english words,
however you can add a language flag to convert numbers in to other languages.

(Currently only english is supported, below will throw unsupported language error)
```shell
$  numbers-cli tw --file="test.input.txt" --language="DE"
```


(Built with Gluegun)

# License

MIT - see LICENSE

