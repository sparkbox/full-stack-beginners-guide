# A Beginner's Guide to Learning Web Development

Online content designed to enable and encourage self-sufficiency, participation, and collaboration.
  
## About

The goal for the beginner's guide is to create materials that encourage people to learn and build amazing things. Only when we give everyone the tools to learn and create will the web be diverse and bias free. With this guide, I hope to create an inclusive environment where those interested in developing their programming skills can learn in a safe, open space, while providing the same mentorship style that SparkBox and GDI have offered me.

### Topics
This guide includes the following topics: Git & GitHub, Dotfiles, HTML & CSS, Javascript, Accessibility, WordPress
  
## Contribute

### Project Setup
- In your terminal or command line run `git clone https://github.com/corinneling/beginners-guide.git`
    - This will copy all of the files from this repo onto your local computer
- Navigate into the project folder by running `cd beginners-guide`
- Check that you have node and npm installed
    - Run `node -v`
        - If there is no output [install node](https://nodejs.org/en/download/)
    - And `npm -v`
        - If there is no output [install npm](https://www.npmjs.com/get-npm)
- Run `npm install` to install dependencies for the project
    - To learn more about npm packages see [How to Install Local Packages](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
- Run `npm start`
    - This will build out the project and start a server at `localhost:8000`

### File Structure
- `tasks`
    - Build tasks are located in the `tasks` folder. Each file in the folder is related to a specific task. Those files are run in `package.json` through npm scripts such as `node tasks/file-name.js`
- `src`
    - All of the assets for the static build live in the source folder, which includes the following file types: `js`, `sass`, and `handlebars`
        - `templates`
            - All of the handlebars files are located in the `templates` folder. Handlebars is a templating language that makes it easier to maintain static sites, especially when there are instances of repetitive markup, such as a header or footer that is used on every page.
                - `layouts` contains a file that sets the layout for all of the pages.
                - `pages` is where all of the pages live before they are compiled into `html` files. Each page must contain the following code at the beginning of the file:
                    ```
                    ---
                    layoutFile: default
                    dataFile: common/*
                    ---
                    ```
                    - The `layoutFile` references the file in the `layout` folder, which sets the html, head, and body tag.
                    - The `dataFile` references the directory that data will be pulled into the file when it's compiled. 
          
          		- `partials` is where the different pieces of the page live. These partials can be reused across the site with different data being introduced for each instance.

### Hosting
This project is hosted through GitHub pages from the `gh-pages` branch. Once a PR is approved, it will be merged into master. Then those changes will be deployed to the `gh-pages` branch. 