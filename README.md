# Opinion Poll

This Opinion Poll project is a simple command-line application that I built using Node.js and the Inquirer npm package. It helped me gain experience with Node and Inquirer by gathering users' opinions through interactive prompts.

## Features

The application asks users a few questions to personalize the experience and gather their prefernces:

- Name Input : This prompt asks for users' name to personalize the poll.
- Meal of the Day: This prompt allows users to pick from a list of meal options.
- Favorite Holiday: This prompt presents a multiple-choice format for users to select their favorite holiday.
- Continue Prompt: Before concluding, this prompt asks users if they would like to proceed, adding an extra layer of interaction

The responses are displayed in a friendly message format at the end.

## How to Set It Up

Here's how you can set up and run the application:

### Initializing Repository

- Create a new repository and intialize it with a README file and a `.gitignore` set to Node.

### Cloning Repository and Setting Up Project

1. Open Git Bash and clone the repository:  
   <span style="color:darkviolet">Note: I prefer to open Git Bash directly in my project folder by right-clicking and selecting "Show more options."</span>

```bash
git clone <your-repo-url>
```

2. Navigate into the cloned project directory:

```bash
cd <your-repo-directory>
```

3. Intialize repository as a Node package:

```bash
npm init -y
```

### Installing Inquirer Dependency

- Open VS code with the `code .` command.
- Install inquirer: `npm install @inquirer/prompts`
  - Install shortcut: `npm i @inquirer/prompts`
  - Uninstall: `npm uninstall @inquirer/prompts`

### Run the application

```bash
node opinionPoll.js
```

## Summary of Development Process

The goal of this project was to enhance my understanding of Node.js and practice working with user input via the command line. Here’s a step-by-step overview of what I did:

1. Project Setup: I initialized the project with `npm init` and added `"type": "module"` to `package.json` to enable ES6 imports.
2. Inquirer Installation: I installed the Inquirer package to handle interactive prompts.
3. Writing the Script: In `opinionPoll.js`, I wrote a series of prompts to ask for the user's name, favorite meal of the day, favorite holiday, and a confirmation prompt to see if the user wanted to continue.
4. Logging Responses: After collecting the inputs, the responses are summarized and printed to the console.
5. Documentation & GitHub: Finally, I documented the project in this README and pushed it to GitHub.

## Future Improvements

I plan to explore more npm documentation to expand my knowledge and apply it to future projects.
