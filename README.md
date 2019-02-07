# Password trainer

Train yourself to remember difficult passwords and improve your personal
security.

A simple NodeJS command-line application where you can enter a password that you
want to practice and you can do this continuesly until you think you know the
password.

The demo below uses the password `test123`.

![demo](demo.gif)

# Getting started

```
$ git clone https://github.com/kkoomen/password-trainer.git
$ cd password-trainer
$ yarn install
```

Run it

```
$ yarn start
```

# The logic

It will start with a subset (3 characters) of your password and if you enter it
correctly it will go up by 1 and do this until you reach your password length.
If you reach your password length you will be prompted to enter your full
password for 3 times and then you will start again at 3 characters.

# Why Password Trainer?

Because my personal password got through
[haveibeenpwned.com](https://haveibeenpwned.com/) and I really did want to have
a new password, but it should be a total random password that people wouldn't be
able to guess, people should not be able  to remember it when looking 'secretly'
at my fingers when sitting next to me, or get a quick flash of it. I used my
password manager to generate a complete random password such as
`Zp9x/0_)}_41mV61+3?T` but since remembering this is not that easy when you're
in a hurry sometimes I want this to be as natural for me as possible by training
my fingertips and my brain to remember this as quickly as possible.

# License

MIT.
