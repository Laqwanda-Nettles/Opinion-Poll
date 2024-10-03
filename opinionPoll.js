"use strict";
import { input, select, checkbox, confirm } from "@inquirer/prompts";

const name = await input({ message: "Enter your name" });

const list = await select({
  message: "What is your favorite meal of the day?",
  choices: [
    {
      name: "Breakfast",
      value: "Breakfast",
      description: "The most important meal of the day.",
    },
    {
      name: "Lunch",
      value: "Lunch",
      description: "Second meal of the day and for some the first.",
    },
    {
      name: "Dinner",
      value: "Dinner",
      description: "Main meal of day.",
    },
    {
      name: "Snack",
      value: "Snack",
      description:
        "No matter the time of day it's safe to say it's everyone's favorite.",
    },
  ],
});

const preference = await checkbox({
  message: "What is your favorite holiday?",
  choices: [
    { name: "Christmas", value: "Christmas" },
    { name: "Thanksgiving", value: "Thanksgiving" },
    { name: "New Year's", value: "New Year's" },
    { name: "Halloween", value: "Halloween" },
  ],
});

const choose = await confirm({
  message: "Would you like to continue?",
});

console.log(
  `Hello ${name}, your favorite meal of the day is ${list} and favorite holiday is ${preference}. Thank you for your responses! Continue? ${choose}.`
);
