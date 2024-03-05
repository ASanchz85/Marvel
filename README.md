# MARVEL APP for technical challenge

This is the result of a technical challenge application made by Antonio Sanchez (GIT profile: ASanchz85).

The project has been developed using ReactJS with Vite and pure CSS for styling each component and page, following a Figma design.

In terms of architectural and structural approach, I tend to use "component-based developmen", as this pattern emphasizes building software systems by breaking them down into smaller, reusable components, each responsible for a specific part of the user interface or functionality. I believe, it fits and represents better the use of frameworks like React.

All the project in both sides, client and server, includes "standard" rules for linter and prettier as formatter. Using VSCode as IDE.

To control the global state, I have chosen in-built React hook useContext as it was demanded. Mainly for dealing with favorites options.

In the front-end, apart from the usual React dependencies (React and React-DOM), I only added React-Router-DOM to ease user navigation. For tomorrow's deployments I injected an environment variable to the build script, with the purpose of changing from "browserRouter" to "hashRouter" and give the chance to the users of adding specific dynamic views to their bookmarks. For testing I have chosen VITEST, because it is fast, its syntax is easy to understand if you have worked with Jest or Mocha before, and mainly, because of its UI, that helps to debug and more.

In the back-end, I included the following dependencies: cors, dotenv and express. As well as, morgan and nodemon as devDependencies with the goal of easing the development process.

The environment files are missed on purpose for security reasons and to be compliance with the API policies described on its terms and conditions. An example of each .env is provided below the script sections.

To conclude, I created several tests for unit testing the core of the application using VITEST. I chose it due to its user interface and interactive terminal that makes easier to interact with each test.

## Main Scripts:
  note: you must surf to each folder (client and server) for running each script


### Main Scripts-Client:

  *Installing required dependecencies*
  ~~~
    npm i
  ~~~
  
  *Developing mode*
  ~~~
    npm run dev
  ~~~

  *Linter*
  ~~~
    npm run lint
  ~~~

  *Build*
  ~~~
    npm run build
  ~~~

  *Test*
  ~~~
    npm test
  ~~~

  *Test with UI*
  ~~~
    npm run testui
  ~~~

### Main Scripts-Server:

  *Installing required dependecencies*
  ~~~
    npm i
  ~~~
  
  *Developing mode*
  ~~~
    npm run dev
  ~~~

  *Linter*
  ~~~
    npm run lint
  ~~~

  *Production mode*
  ~~~
    npm start
  ~~~


### .env Template-Server:

  *Template:*
  ~~~
    PORT='3000'
    CLIENT_URL='http://localhost:5173'
    MARVEL_API_PUBLIC_KEY='your_key'
    MARVEL_API_PRIVATE_KEY='your_key'
  ~~~

### .env Template-client:

  *Template:*
  ~~~
    VITE_REACT_APP_API_CHARACTER_URL='http://localhost:3000/api/characters/'
  ~~~