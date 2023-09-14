#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    'This is a cli-app/game made by Sayak Bhunia'
  );
  await sleep();
  rainbowTitle.stop();

  console.log(`
    ${chalk.bgCyan('HOW TO PLAY ?')}
    I am a protocol on your computer.
    If you get any question wrong I will initiate self destruction ${chalk.bgRed('killed')}
    So get all the question right✅.....
  `);
}

async function handleAnswer(isCorrect) {
  const spinner = createSpinner('Checking answer...').start();
  await sleep();

  if(isCorrect) {
    spinner.success({ text: `Nice work ${playerName}. That's a legit answer` });
  }
  else {
    spinner.error({ text: `💀💀💀 Game over, you lose ${playerName}!` });
    process.exit(1);
  }
}

async function askName() {
  const answers = await inquirer.prompt({
    name: 'player_name',
    type: 'input',
    message: 'What is your name ?',
    default() {
      return 'Player';
    },
  });
  playerName = answers.player_name;
}

function winner() {
  console.clear();
  figlet(`Congrats , ${playerName} \n You are a worthy Coder!`, (err, data) => {
    console.log(gradient.pastel.multiline(data) + '\n');

    console.log(
      chalk.green(
        `Happy Coding. Copyright by The Nerds and Freaks!`
      )
    );
    process.exit(0);
  });
}

async function question1() {
  const answers = await inquirer.prompt({
    name: 'question_1',
    type: 'list',
    message: 'What is the purpose of a compiler in computer programming?\n',
    choices: [
      'To execute programs',
      'To debug programs',
      'To translate source code into machine code',
      'To optimize program performance'
    ],
  });
  return handleAnswer(answers.question_1 === 'To translate source code into machine code');
}

async function question2() {
  const answers = await inquirer.prompt({
    name: 'question_2',
    type: 'list',
    message: 'What does the acronym HTML stand for in web development?\n',
    choices: [
      'HyperText Markup Language', 
      'High-Level Text Manipulation Language', 
      'Hypertext Transfer Markup Language', 
      'Hyperlink and Text Management Language'
    ],
  });
  return handleAnswer(answers.question_2 === 'HyperText Markup Language');
}

async function question3() {
  const answers = await inquirer.prompt({
    name: 'question_3',
    type: 'list',
    message: 'In object-oriented programming, what is encapsulation?\n',
    choices: [
      'The process of converting code to machine language', 
      'The process of hiding the internal details of an object and providing a public interface', 
      'The process of storing data in a database', 
      'The process of optimizing code for performance'
    ],
  });
  return handleAnswer(answers.question_3 === 'The process of hiding the internal details of an object and providing a public interface');
}

async function question4() {
  const answers = await inquirer.prompt({
    name: 'question_4',
    type: 'list',
    message: 'Which data structure follows the Last-In-First-Out (LIFO) principle?\n',
    choices: [
      'Queue', 
      'Stack', 
      'Linked List', 
      'Hash Table'
    ],
  });
  return handleAnswer(answers.question_4 === 'Stack');
}

async function question5() {
  const answers = await inquirer.prompt({
    name: 'question_5',
    type: 'list',
    message: 'What is the purpose of the SQL (Structured Query Language) SELECT statement?\n',
    choices: [
      'To insert data into a database', 
      'To update records in a database', 
      'To retrieve data from a database', 
      'To delete data from a database'
    ],
  });
  return handleAnswer(answers.question_5 === 'To retrieve data from a database');
}

console.clear();
await welcome();
await askName();
await question1();
await question2();
await question3();
await question4();
await question5();
await winner();

