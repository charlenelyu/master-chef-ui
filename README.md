# GroupProject_Ladybugs_UI
This is the repository for UI of the final project on CS5610.  

**Team name:** Ladybugs  
**Team member:** Tianhui Li, Yanghong Lyu  

[Heroku API](http://master-chef-api.herokuapp.com/) | [Heroku UI](http://master-chef-ui.herokuapp.com/)  

[Git repo API](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Ladybugs_API) | [Git repo UI](https://github.ccs.neu.edu/NEU-CS5610-SU20/GroupProject_Ladybugs_UI)

[Iter1 on Piazza](https://piazza.com/class/k8hvaigksc71k1?cid=643) | [Iter2 on Piazza](https://piazza.com/class/k8hvaigksc71k1?cid=693)

## Project Summary
**Project name:** Master Chef  
Our project will provide a platform for people to share their daily meals and recipes. You can post your recipes including photos and detailed steps, or create a list to mark your favorite recipes. You will receive likes and comments from other users to what you post. We also want to make a recommendation page to show today’s top recipes.  

The project is built on MERN stack, and we use **Ant Design UI** as the 3rd party libraries to help built UI.

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
2. Implemented the RecipeList page UI using grid system, and integrate it with API.
3. Designed the RecipeView page UI, implement the corresponding query schema and API and integrated them together.
4. Implemented the router to RecipeView page and corresponding view/edit pages.
5. Implemented the Login/Sign up and filter UI.

- **Yanghong Lyu**
1. Regenerated the initialization script with meaningful recipes and images.
2. Implemented the CRUD API on the backend.
4. Reconstructed the backend modules using environment variable.
5. Reconstructed the AddRecipeModal and AddRecipeForm UI and integrate them with API.
6. Solve with the problem of how to upload image to cloud, get its url and store it to database when creating recipes.

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

## Run on Localhost
1. Clone repositories: **GroupProject_Ladybugs_API** and **GroupProject_Ladybugs_UI**
1. `npm install` to install all the dependencies
2. GroupProject_Ladybugs_API: run `npm start`
3. GroupProject_Ladybugs_UI: run `npm start` and `npm run watch`
4. Open the webpage on `localhost:8000`