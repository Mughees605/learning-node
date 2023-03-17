# Command line input

In this tutorial, we will cover the basics of command line input. If you are new to using the terminal, passing input to a program might be unfamiliar to you. Let's take a look at how.

Suppose we have a simple program called `app.js`. This program prints out whatever you pass to it. You can pass it arguments by simply writing them after the program’s name in the terminal. Try it out with the command `node app.js Hello`. Hit the RUN button to get started.

```javascript
console.log('Hey there,' , process.argv[2]);
```

The process module and, specifically, process.argv is what we want to focus on right now. You might be wondering why we have a 2 in square brackets after argv. This is because all of our command-line arguments are passed to the argv property.

- The first argument, `0`, is the `process.execPath`, which is the path of the Node.js executable.
- The second argument, `1`, is the path of the JavaScript file being run.
- The next argument(s) are the command-line arguments, if any have been passed. In our case, this will be a simple `Hello`.

Uncomment the code on line 2 to line 4 to see the indices used.

# Console input

In Node.js, console input is not often used in programs as they usually have a front-end. However, sometimes console input is necessary, and for that, we have the `readline` module.

Let’s see how this works. In the code widget below, enter your name in the text box of the `>_STDIN`.

```javascript
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`What's your name?`, (name) => {
  console.log(`Hi ${name}!`);
  readline.close();
});
```

This code uses the readline module to create an interface for reading input from the console. The readline.createInterface function takes an object with two properties: input and output. In this case, input is set to process.stdin, which represents standard input (i.e., the console), and output is set to process.stdout, which represents standard output (i.e., the console).

Then, the readline.question method is used to ask the user for their name, and the response is passed as an argument to the callback function. The response is then logged to the console using the console.log method, and the readline interface is closed using the readline.close method.
