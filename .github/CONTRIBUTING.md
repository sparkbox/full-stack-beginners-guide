# Contributing to Full Stack Beginner's Guide

Thank you for taking the time to contribute to this guide! 🎉 

Every additional design and functionality should go into making this site as approachable as possible. This needs to be kept in mind when adding topics as well as adding sections to each topic.

## Project Setup
- Navigate into the project folder
- Check that you have node and npm installed
    - Run `node -v`
        - If there is no output [install node](https://nodejs.org/en/download/)
    - And `npm -v`
        - If there is no output [install npm](https://www.npmjs.com/get-npm)
- Run `npm install` to install dependencies for the project
    - To learn more about npm packages see [How to Install Local Packages](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
- Run `npm start`
    - This will build out the project and start a server at `localhost:8000`


## File Structure
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
                  - `blog` contains all of the blog posts for the TIL page. These handlebar files will use the markdown helper so posts can be written using markdown


## Git Commit Messages
Prefix your commit with the commit category: `feat:`, `docs:`, `fix:`, or `chore`
Use the present tense 'adds' or 'updates'
Consider starting the commit message with an applicable emoji:

  ✨ `:sparkles:` when improving structure/format

  🎨 `:art:` when adding or updating styles

  📚 `:books:` when adding or updating content

  ⚡️ `:zap:` when adding or updating markup

  🔧 `:wrench:` when updating the build

  📝 `:memo:` when writing docs

  🐛 `:bug:` when fixing a bug

  🔥 `:fire:` when removing code or files

  ⬆️ `:arrow_up:` when upgrading dependencies

Before making a PR, in the command line run `npm run stylelint`


## Issues and PRs

**Claiming an Issue**

If you find an issue you would like to tackle, add a comment to the issue saying you will be working on it. Then once you make your PR, reference the issue.

**Feedback on PRs**

You will likely get feedback on your PR, related to how you can change or improve it. Make sure to check back on your PR when you get a chance to see if your reviewer has tagged your github handle in a comment and left you some feedback. _PRs must be approved by a reviewer to be merged._


## Open Source Contibutors

1. Fork the repository
2. Clone the forked repository in your terminal
	- `git clone *url-of-repo*`
3. In your local environment create a branch off of `master`
	- `git checkout -b *name--of-branch*`
4. Make changes and push them up with a commit following the following syntax:
	- `git commit -m 'type of changes: describe changes`
	- i.e `git commit -m 'fix: adds a11y attribute to links'`
3. Navigate to this repository.
4. Open a PR with your branch compared to this repo's master branch
5. Let a collaborator take your PR and review it
6. Keep an eye out for any feedback or comments
7. Once approved and no more changes are needed:
   - [Sync your forked repo](https://gist.github.com/corinneling/c027da69442ea08c5e67e71f72afe3c8) with this repo's master branch
   - Have your reviewer merge your branch into master with fast forward only 
   - They will push up the updated master branc