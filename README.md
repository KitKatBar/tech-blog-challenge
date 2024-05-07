# Tech Blog Challenge - Definitely Not Reddit!
  
## Description

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

The application that I have built this week is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well. If I'm being honest though, it's a lot more like a mini-budget version of Reddit. The application follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
        
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Questions](#questions)

        
## Installation

No installation is required! This code has been deployed to Render so that you can view it on your own device. To do so, please visit the following link: https://tech-blog-challenge.onrender.com

## Usage

Please refer to the following image showing the functionality of the application.  When the page is first loaded, you should see a homepage with the the header, the site icon and a navigation bar with the links to 'Home', 'Login' and 'Register'.

![image showing layout of the home page](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/homepage.png?raw=true)

Clicking on the 'Home' button will bring you back to the homepage, which you are already on.  Clicking on the 'Login' or 'Register' button will bring you to their pages with a form to fill out to either sign in or sign up.  Note that new users should register first so that you have an account and then you can proceed to sign in.

![image showing the registration page](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/register.png?raw=true)

![image showing the login page](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/login.png?raw=true)

Once you have signed up and have logged in, you will see that the navigation bar buttons have been replaced with a 'Dashboard' and 'Logout' button.  The 'Home' button is still there.

![image showing layout of the home page when logged in](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/homepage-logged-in.png?raw=true)

Clicking on the 'Dashboard' button will bring you to your user dashboard, where you can view all the posts and comments that you have made as well as a button to create a new post.

![image showing the user dashboard](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/dashboard.png?raw=true)

Since we don't have any posts or comments right now, go ahead and click on the 'New Post +' button, which will bring you to a form to create a new post.

![image showing the new post page](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/new-post.png?raw=true)

Once you have filled out the form, you will be redirected to the homepage and you will see that a new post is visible.  You will see the post title, the contents, the poster and when it was posted.  In future updates, I would like to modify this so that it redirects to the newly created post instead.

![image showing layout of the home page with the new post](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/homepage-post.png?raw=true)

Clicking on the post will bring you directly to that post with a comment section available in which you can enter your comments.

![image showing the post with a comment section](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/view-post.png?raw=true)

Once you have entered your comments, it will show in the comment section, logging the contents, the poster and when it was posted.

![image showing the post with a comment](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/comment-post.png?raw=true)

Go back to your dashboard and click on either your posts or comments.  You will see all the posts and comments that have been made by you.  You will also see a 'Edit' and 'Delete' button on each post and comment.

![image showing the user dashboard and all their posts](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/dashboard-posts.png?raw=true)

![image showing the user dashboard and all their comments](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/dashboard-comments.png?raw=true)

Clicking on the 'Edit' button will allow you to edit the contents of the post and comment.  Clicking the 'Delete' button will delete the post and comment.  If you delete a post, all comments under the post will be deleted as well.  We will only show you how to edit and not delete, since that is visually much harder to see.

![image showing the page to edit the post](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/edit-post.png?raw=true)

![image showing the page to edit the comment](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/edit-comment.png?raw=true)

Once you have editted your post or comment it will redirect you to the homepage after editting a post and to the post that the comment is under after editting a comment.  Once again, I would like to modify the post editting in future updates so that it redirects to the editted post with all the comments.

![image showing the editted post on the homepage](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/homepage-post-edit.png?raw=true)

![image showing the editted post and editted comment on the post](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/comment-post-edit.png?raw=true)

When the user logs out, they will still be able to see posts and comments (just like how Reddit works, but I need to remind you that this website is definitely NOT Reddit - because I don't want to be sued).  However, the user will need to login if they want to comment.

![image showing the home page and post when logged out](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/homepage-logged-out.png?raw=true)

![image showing the post and comments section when logged out](https://github.com/KitKatBar/tech-blog-challenge/blob/main/images/view-post-logged-out.png?raw=true)
        
## Credits

Render Setup Guide: https://coding-boot-camp.github.io/full-stack/render/render-deployment-guide

Our instructor Drew Hoang for introducing us to ORM this week and opening up a new world of learning for us by showing us how to start connecting the front-end and back-end. He provides good metaphors for how to do exercises and also makes speed-run videos that are very insightful for providing information and for reviewing class material.

Our TA Kyle Vance for his continued guidance during class and taking the time to explain new concepts. He continues to provide direction for students and is straight to the point in his explainations.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This project was built using the MIT License. Please refer to the LICENSE in the repo for more information.
          
## How to Contribute

You can contribute to this project by providing better handlebar templates for the layout and display!

## Questions

This project was created by KitKatBar.
    
Click on [this link](https://github.com/KitKatBar) to see more of my other works!

Have additional questions about this project?  You can reach out to me with any inquiries at: katriel_chiu@msn.com