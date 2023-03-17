# Command line input

In this tutorial, we will cover the basics of command line input. If you are new to using the terminal, passing input to a program might be unfamiliar to you. Let's take a look at how.

Suppose we have a simple program called `app.js`. This program prints out whatever you pass to it. You can pass it arguments by simply writing them after the program’s name in the terminal. Try it out with the command `node app.js Hello`. Hit the RUN button to get started.

```javascript
console.log('Hey there,' , process.argv[2]);
