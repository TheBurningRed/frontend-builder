# Node Autodeployment Tool
*Auto deployment tool for JS web applications*

## Instructions

- Connect to remote server and install required tools
    - [Git](https://git-scm.com/)
    - [NodeJs](https://nodejs.org/)
    - [Set `NODE_ENV` variable on your system](https://stackoverflow.com/questions/9198310/how-to-set-node-env-to-production-development-in-os-x)
    to `production` if you're setting production server
- Clone your project from repository into desired folder
- Clone **Node AD Tool** into any another folder
- Setup `deployconfig.json` file and specify params

    - `repo` - link to your repository
    - `workingDirPath` - directory of your project's local repository on remote server
    - `testBranch` - name of repository branch for test build **(TODO)**
    - `productionBranch` - name of repository branch for production build **(TODO)**
    - `buildTestCommand` - executable command to start test build
    - `buildProductionCommand` - executable command to start production build
    - **Important** `buildTestCommand` and `buildProductionCommand` are depend on `NODE_ENV` variable.
- Setup webhook on your Repository platform that will trigger deploy. By default **Node AD Tool** runs on `8080` port and listens to `POST` requests on `/deploy` route
    - You can setup another port using `process.env.PORT` vaiable
    - Address will be like `http://127.0.0.1:8080/deploy`
- Bootstrap **Node AD Tool** running `npm start`


TODO
---
1. Develop automatic repository cloning on first startup
