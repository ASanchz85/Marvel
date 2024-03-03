# MARVEL APP for technical challenge

This is the result of a technical challenge application made by Antonio Sanchez (GIT profile: ASanchz85).

The project has been developed using ReactJS with Vite and pure CSS for styling each component and page, following a Figma design.

All the project in both sides, client and server, includes "standard" rules for linter and prettier as formatter. Using VSCode as IDE. You can get access to my specific VSCode settings running the script listed below.

To control the global state, I have chosen in-built React hook useContext as it was demanded.

In the front-end, apart from the usual React dependencies (React and React-DOM), I only added React-Router-DOM to ease user navigation. For tomorrow's deployments I injected an environment variable to the build script, with the purpose of changing from "browserRouter" to "hashRouter" and give the chance to the users of adding specific dynamic views to their bookmarks.

In the back-end, I included the following dependencies: cors, dotenv and express. As well as, morgan and nodemon as devDependencies with the goal of easing the development process.

The environment file of the back-end is missed on purpose for security reasons and to be compliance with the API policies described on its terms and conditions. The content of that environment file is described below. A script has been created to ease a simple way of introducing each variable needed to run the project. Anyhow, its use is not mandatory, thus, can be manually copied as long as the provided pattern is followed to avoid unexpected behaviours.

lazy loading - performance - lighthouse
responsive
testing
scripts for accessing settings vscode, running both at the same time, creating an .env file just typing...

## Main Scripts:

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