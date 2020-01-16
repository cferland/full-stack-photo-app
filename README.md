# Full Stack Photo App


## Overview

_**Project Title** is a photo library that allows users to view a gallery of images. Users with valid login credentials can add, edit, and delete images to and from the gallery. Images can be provided with captions, as well as commented on and liked by other users._

### Team Members

Created, designed, and developed by Aladdin Omar, Ash Rahman, and Corey Ferland (Git Czar) for the General Assembly Software Engineering Immersive (November 2019 - February 2020 Cohort) Unit 3 Project. 

### Team Expectations

Team values and expectations can be found on our project's [Google Document](https://docs.google.com/document/d/11xl6eJYubdxkZHgm_x5Qx4WYMkJjy5KE4l7NhT42zjY/edit?usp=sharing).

### Permissions

All digital assets used with full licensing and permission.

<br>

## MVP

_The **Project Title** MVP will provide a login and registration form to users, as well as forms for creating and editing new image posts within a gallery. There will also be an option to delete these posts. Users who are not logged in will be able to view the gallery but nothing else. There will be backend databases to store user credentials and the gallery contents._

<br>

### MVP Goals

- _Login/Register Form_
- _Create/Edit Post Form_
- _Delete Post Button_
- _Gallery View & Single Post View_
- _Backend Database_
  - _Users_
  - _Galleries_
  - _Posts_

<br>

### MVP Libraries

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Front-end._ |
|   React Router   | _Front-end navigation._ |
|     Express      | _Back-end._ |
|  Express Router  | _Back-end navigation._ |

<br>

### MVP Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![Desktop Landing](url)

- Desktop Landing

![Desktop Hero](url)

- Desktop Hero

![Resource Index](url)

- Resource Index

![Resource Show](url)

- Resource Show

![Tablet Resource Index](url)

- Tablet Resource Index

![Mobile Resource Index](url)

- Mobile Resource Index

#### Component Hierarchy


``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.js
      |__ Footer.js
      |__ LoginForm.js
      |__ RegisterForm.js
      |__ CreatePost.js
      |__ EditPost.js
      |__ Gallery.js
|__ services/
      |__ api-helper.js

```

#### Component Breakdown


|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Component Estimates


| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Login/Register Forms    |    H     |     3 hrs      |     0 hrs     |    TBD    |
| Create CRUD Actions |    H     |     4 hrs      |     0 hrs     |     TBD     |
| Gallery | L | 3 hrs | 0 hrs | TBD |
| Add/Edit Forms | L | 4 hrs | 0 hrs | TBD |
| TOTAL               |          |     20 hrs      |     2 hrs     |     TBD     |



<br>

### MVP Server (Back End)

#### ERD Model

![ERD](/client/src/assets/graphics/ERD.png)

#### Data Heirarchy

``` structure

photoapp_db
|__ users/
|__ posts/
|__ galleries/

```

<br>

***

## Post-MVP

- _Add user-specific galleries, restricting updates to authorized users only_
- _Friends/followers functionality, feed page for newest posts_

<br>

***

## Project Delivery

> The Delivery section should be expanded and revised as you work on your project.

<br>

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

<br>

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.

***
