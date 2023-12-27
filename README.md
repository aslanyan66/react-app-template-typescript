# Todo List App

## Table of Contents
- [Installation](#installation)
- [Important Packages](#important-packages)
- [Docker Usage](#docker-usage)
- [Usage](#usage)
- [Code Styles](#code-styles)

## Installation

#### Clone this repository to your local machine. link of REPOSITORY

### Without Docker

#### To install the application without Docker,you must have the following installed on your machine:

#### `Node.js` (version 16 or higher)
#### `Yarn` package manager
### Follow these steps to install the application:

#### 1. Navigate to the cloned directory in your terminal.
#### 2. Run `yarn install` to install the necessary dependencies.
#### 3. Run `yarn dev` to start the application.
#### 4. Open a web browser and go to http://localhost:3000 to view the application.

### To build the app for production, run:
#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Important Packages

#### ● Typescript
#### ● Redux-Toolkit
#### ● Axios
#### ● React-Router-Dom
#### ● Ant Design
#### ● Styled Components


## Docker Usage

#### To install the application with Docker, you must have the following installed on your machine:

### `Docker` `Docker-Compose`

### Development
#### To run the application in development mode with Docker, follow these steps:

#### 1. Navigate to the cloned directory in your terminal.
#### 2. Run `docker-compose up -d app-dev` to start the application in development mode. `-d or --detach` means that the container will run in the background
#### 3. Open a web browser and go to http://localhost:3000 to view the application.

### Production
#### To run the application in production mode with Docker, follow these steps:

#### 1. Navigate to the cloned directory in your terminal.
#### 2. Run `docker-compose up -d app-prod` to build and start the application in production mode. `-d or --detach` means that the container will run in the background
#### 3. Open a web browser and go to http://localhost to view the application.

## Usage

#### Description about app usage...

## Code Styles
### To maintain code style consistency, you can use the following scripts: before committing changes:

#### `lint`: Use this script to check your code for errors and warnings. It uses ESLint and checks all JavaScript, TypeScript, JSON, and JSX files in the src directory.
#### `lint:fix`: Use this script to automatically fix some of the issues reported by the lint script.
#### `format`: Use this script to format your code automatically using Prettier. It formats all JavaScript, TypeScript, JSON, CSS, SCSS, and Markdown files in the src directory based on the configuration in .prettierrc file.

#### ● To run any of these scripts, simply type the corresponding command in your terminal:

#### `yarn lint`
#### `yarn lint:fix`
#### `yarn format`