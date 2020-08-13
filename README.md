# GroupProject_Ladybugs_UI
This is the repository for UI of the final project on CS5610.  

**Team name:** Ladybugs  
**Team member:** Tianhui Li, Yanghong Lyu  

[Heroku API](http://master-chef-api.herokuapp.com/) | [Heroku UI](http://master-chef-ui.herokuapp.com/)  

[Git repo API](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Ladybugs_API) | [Git repo UI](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Ladybugs_UI)

[Iter1 on Piazza](https://piazza.com/class/k8hvaigksc71k1?cid=643) | [Iter2 on Piazza](https://piazza.com/class/k8hvaigksc71k1?cid=693) | [Iter3 on Piazza](https://piazza.com/class/k8hvaigksc71k1?cid=750)

## Project Summary
**Project name:** Master Chef  
Our project will provide a platform for people to share their daily meals and recipes.

**Features:**
- View recipes posted
- Search recipes by title
- Filter recipes by tags
- After Login/SignUp:
  - Create your own recipes
  - Edit recipes you created (you cannot edit recipes created by other people)
  - Delete recipes you created (you cannot delete recipes created by other people)
  - Upload you own avatar

The project is built on MERN stack, and we use **Ant Design UI** as the 3rd party libraries to help built UI.

**Note:** If you want to test CRUD features, please register first, then you can create, edit and delete your recipes.

## Iteration 1 on UI
### Progress
- Built the basic structure of UI. Removed unnecessary files from book projects. Separated the components required for this project into separated files and used webpack to bundle them. Set the routers for each page.
- Designed the layout of the RecipeList page: Header(Brand, NavLink, Search bar), Contents(recipe card), Footer.
- Implemented the RecipeCard UI, and integrated it with the backend to get the image and author of the recipe.
- Implemented the RecipeAdd modal and form UI.

## Iteration 2 on UI
### Progress
- Completed the Home page and RecipeList page, integrated with API.
- Completed the Create, Edit and Delete Recipe feature, integrated with API.
- Fixed the problem of how to upload a image and store it to database.
- Working on the filer, search bar and Profile page.

#### Contribution
- **Tianhui Li**
1. Redesigned the Home page and the basis of CRUD UI.
2. Implemented the RecipeList page UI using grid system, and integrated it with API.
3. Designed the RecipeView page UI, implement the corresponding query schema and API and integrated them together.
4. Implemented the router to RecipeView page and corresponding view/edit pages.
5. Implemented the Login/Sign up and filter UI.

- **Yanghong Lyu**
1. Regenerated the initialization script with meaningful recipes and images.
2. Implemented the CRUD API on the backend.
4. Reconstructed the backend modules using environment variable.
5. Reconstructed the AddRecipeModal and AddRecipeForm UI and integrate them with API.
6. Solved with the problem of how to upload image to cloud, get its url and store it to database when creating recipes.

#### Screenshots
- Home page
![iter2-1](/readme_img/iter2-1.png)

- RecipeList page
![iter2-2](/readme_img/iter2-2.png)

- RecipeView page
![iter2-3](/readme_img/iter2-3.png)

- RecipeAdd Form
![iter2-4](/readme_img/iter2-4.png)

- RecipeEdit Form
![iter2-5](/readme_img/iter2-5.png)

- Delete recipe
![iter2-6](/readme_img/iter2-6.png)

## Iteration 3 on UI
### Progress
- Removed `author` input in AddRecipes form. It will be directly recognized and sent to database when creating.
- Completed the Profile page. Move the CRUD operations of recipe cards to Profile page.
- Completed search bar and filter.
- Completed Login/Sign Up and corresponding authorization.
- Add notification and message to show success and error.
- Use context to pass data from parent to child components.

#### Contribution
- **Tianhui Li**
1. Implemented the Profile page. Move the CRUD operations of recipe cards to Profile page.
2. Implemented searchRecipe API and integrated it with UI.
3. Implemented updateAvatar API and integrated it with UI.
4. Set context on `Page.jsx` to pass data from parent to child components.

- **Yanghong Lyu**
1. Implemented filter API and integrated it with UI.
2. Created collection for user info.
3. Implemented the createUser, me(queryUser) API.
4. Implemented the whole authorization process: set new endpoint for auth, verify user in database and pass credentials, read cookie to verify the login state, clear cookie after signing out, new Login button that is authorization-aware.
5. Add notification and message
6. Set CORS and Proxy Mode for deploying

#### Screenshots
- Profile page
![iter3-1](/readme_img/iter3-1.png)

- Search bar
![iter3-2](/readme_img/iter3-2.png)

- Filter
![iter3-3](/readme_img/iter3-3.png)

- Login/Sign Up
![iter3-4](/readme_img/iter3-4.png)

## Run on Localhost
**Note:** after Iter2 we start using `.env` to set environment, so the localhost may not work because you don't have the correct `.env` file.  

1. Clone repositories: **GroupProject_Ladybugs_API** and **GroupProject_Ladybugs_UI**
2. `npm install` to install all the dependencies
3. GroupProject_Ladybugs_API: run `npm start`
4. GroupProject_Ladybugs_UI: run `npm start` and `npm run watch`
5. Open the webpage on `localhost:8000`