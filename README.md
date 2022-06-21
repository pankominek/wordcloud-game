# Wordcloud Game

Implementation of the wordcloud game. See the live version: https://wordcloud-game-pi.vercel.app/

The game score is calculated according to the formula: (number of marked correct answers \* 2) - (number of marked wrong answers + number of unmarked correct answers). If the score is below zero, the final screen displays 0 points.

## Running the project in development mode

In project folder install dependencies dependencies using the command: `yarn install`.\
Then use `yarn dev`, the application will be available at http://localhost:3000/

## Stack

- React 18
- Typescript
- Taiwind 3.1.3
- Vite 2.9.9
