#!/usr/bin/env node

const prompt = require('prompt');
const colors = require("colors/safe");

prompt.message = '';

prompt.start();

let password = null;
let initPasswordLength = 3;
let amountOfFullPasswordPrompts = 0;

prompt.get({
  properties: {
    password: {
      hidden: true,
      replace: '*',
      description: colors.blue('Enter your password'),
      required: true,
    },
  },
}, (err, result) => {
  if (err) {
    console.log('ERR!', err);
  }
  password = result.password;
  testPassword(initPasswordLength);
});

function testPassword(len = initPasswordLength) {
  prompt.get({
    properties: {
      password: {
        hidden: true,
        description: len >= password.length
          ? `Enter your full password (${amountOfFullPasswordPrompts + 1}/3)`
          : `Enter the first ${len} characters of your password`,
        replace: '*',
        required: true,
      },
    },
  }, (err, result) => {
    if (err) {
      console.log('ERR!', err);
      console.log('Exiting prompt');
      process.exit(1);
    }

    if (result.password === password.substring(0, len)) {
      console.log('Correct!');
    } else {
      console.log('Incorrect, try again.');
      return testPassword(len);
    }

    const newLen = len + 1;
    if (newLen > password.length) {
      amountOfFullPasswordPrompts++;
      if (amountOfFullPasswordPrompts > 2) {
        amountOfFullPasswordPrompts = 0;
        testPassword(initPasswordLength);
      } else {
        testPassword(len);
      }
    } else {
      testPassword(newLen);
    }
  });
}
