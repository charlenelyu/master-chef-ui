# Master Chef UI

This is the repository for the UI of Master Chef.

[**Click here for demo!**](https://master-chef-ui.herokuapp.com/)

[Link to API repo](https://github.com/charlenelyu/master-chef-api)

## Project Summary

Our project provides a platform for home cooks to share their recipes and food ideas. The whole application is based on MERN stack and GraphQL. We also used Ant Design to help us build the UI. The boilerplate code of this project is from the book *Pro MERN Stack* by Vasan Subramanian.

**Contributors:** Tianhui Li, Yanghong Lyu

**Features:**

- View posted recipes
- Search for recipes by title
- Filter recipes by tags
- After Login or Sign Up:
  - Create your own recipes
  - Edit recipes you created
  - Delete recipes you created
  - Upload your profile

## Run on Your Computer

1. Clone repositories: **master-chef-ui** and **master-chef-api**.
2. Run `npm install` in both directories to install all the dependencies.
3. Creat `.env` in both directories, set up all environment variables following `sample.env`.
4. In **master-chef-api**, run `npm start` to start the server.
5. In **master-chef-ui**: first run `npm run compile` to compile all JS files, then run `npm start` to start the server.
6. You can now test it on local host!

## Screenshots

- Home Page

![home-page](/readme_img/home-page.png)

- Recipe List Page

![recipe-list](/readme_img/recipe-list.png)

- Recipe View Page

![recipe-view](/readme_img/recipe-view.png)

- Add Recipe Modal

![recipe-add](/readme_img/recipe-add.png)

- Search Bar & Filter Bar

![search-bar](/readme_img/search-bar.png)
![filter-bar](/readme_img/filter-bar.png)

- Profile page

![profile](/readme_img/profile.png)

- Edit & Delete Recipe

![edit-recipe](/readme_img/edit-recipe.png)
![delete-recipe](/readme_img/delete-recipe.png)

## Project Milestones

### Iteration 1

#### Progress

- Constructed the basic structure of the frontend and the backend.
- Designed and implemented the layout of the main page: Header(Brand, NavLink, Search bar), Contents(Recipe Cards), Footer.
- Set up MongoDB and created the inital GraphQL schema.

#### Contribution

- **Tianhui Li**

1. Built the basic structure of UI. Set the routers for each page.
2. Implemented the Recipe Card component, integrated with the backend to get the image and the author of the recipe.
3. Implemented the Recipe Add Modal component.

- **Yanghong Lyu**

1. Initialized database on Atlas. Created three collections - recipes, users, and counters, with test data inserted to these collections.
2. Established graphQL schema file and implemented the Get API and the Create API.
3. Integrated graphQL with MongoDB and started to read from and write to the database.
4. Restructured frontend modules. Used webpack to compile and bundle all files.

### Iteration 2

#### Progress

- Completed the Home page and Recipe List page.
- Completed the Create, Edit and Delete Recipe features.
- Figured out how to upload a image and store it to database.
- Working on the filter, search bar and Profile page.

#### Contribution

- **Tianhui Li**

1. Redesigned the Home page and the basis of CRUD UI.
2. Implemented the Recipe List page UI using grid system, and integrated with API.
3. Designed and implemented the Recipe View page.
4. Implemented the router to Recipe View page and Recipe Edit page.
5. Implemented the Login/Sign Up UI.

- **Yanghong Lyu**

1. Generated the database initialization script with actual recipe data and images.
2. Implemented the CRUD API on the backend.
3. Restructured the backend modules.
4. Reconstructed Recipe Add components, integrated the Create operation with backend.
5. Resolved the problem of how to upload image to cloud, get its url and store it to database when creating recipes.

### Iteration 3

#### Progress

- Completed Login/Sign Up and user authentication.
- Removed `author` input in Recipe Add form. Users will be recognized via their login status.
- Completed the Profile page. Moved the CRUD operations to the Profile page for authorization.
- Completed search bar and filter.
- Added notification messages to show success and error.

#### Contribution

- **Tianhui Li**

1. Implemented the Profile page. Moved the CRUD operations to Profile page.
2. Implemented search API and integrated it with UI.
3. Implemented update avatar API and integrated it with UI.
4. Set context on `Page.jsx` to pass data from parent to child components.

- **Yanghong Lyu**

1. Implemented filter API and integrated with UI.
2. Implemented the createUser, queryUser API and integrated with UI.
3. Implemented the whole authorization process: set new endpoint for authentication, encrypt password before store it to database, use JWT and cookie to persist login status, new login button which is authorization-aware.
4. Added notification message on the frontend.
5. Set up Proxy to support CORS for deploying
