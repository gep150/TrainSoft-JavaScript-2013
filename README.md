TrainSoft-JavaScript-2013
=========================

Repository for the lectures in TrainSoft

## Course test

Fill it online and submit it with your email

 - https://docs.google.com/forms/d/1ceFM8armenT-tZy70wYnh61SJnK5dboxNlhePOY9l-0/viewform

## Course Project
Project info is placed here

TIP: The project is updated and now we want a few more things from you, see the link below for more info

 - https://docs.google.com/document/d/1e2JuQZv1YAeROaoeJ1cw4QsFBlZKXHXB47LHuzw7yPg/edit?usp=sharing

Project source files are here

 - https://github.com/valkirilov/TrainSoft-JavaScript-2013/tree/master/project

## Course videos

Lecture 1 - 16.11.2013 - https://mega.co.nz/#F!fJs2TCBQ!Xz8W20aLGFdk-FQcAER-ng

Lecture 2 - 17.11.2013 - https://mega.co.nz/#F!KdchzIrJ!d2OAnUILPuwZmeX4Pu36Ng

Lecture 3 - 23.11.2013 - https://mega.co.nz/#F!zJFBDLhb!Iju0T2pl_RAs3WD7VgPOxA

Lecture 4 - 24.11.2013 - https://mega.co.nz/#F!TctTFCCI!P0m-JzXbI1wFy78cd_fL3g

*Note: You need Camtasia Studio to view the videos because they are in .camerec format. I will try to convert them
in something more usable when I have time.

## Setup your repository

This is a simple tutorial which will show you how to work with version control systems in a few steps. W
ill show you the basic commands and thing that you have to do to use it. If you found any mistakes or 
something that you don’t agree so don’t worry, share it with me. Now let’s go!

###First steps
* Go to http://github.com and create account.

* Go through this article

  https://help.github.com/articles/set-up-git

- Install git on your system

- Setup default settings for your system.

    git config --global user.name "Your Name Here"    
    git config --global user.email "your_email@example.com"   

- Then go through this tutorial and make a new repository

    https://help.github.com/articles/create-a-repo

First create you repo in the http://github.com website. Then open a new CMD if you are on Windows or new Terminal for UNIX based OS like Linux and Mac OS. Then create a folder and go in it. To create a folder you can use the mkdir command and for going in a dir you can type cd [DIRNAME] (cd is short from change directory). Now let’s try it.

	mkdir ProjectName
	cd ProjectName

- Init a new repository.

	  **git init**

- Create a simple file in it

	  **touch README.md**

- Add it to a repo. This way now your repository will keep versions of files that you added and the system will know that this files belongs to your repo.

	  **git add README**

- Make a new commit. Commits are way to say to your repo that it’s time for a new version of the files. A good practice is to write a good and detailed description.

	  **git commit -m 'first commit'**

- Connect it with your repo. With this commands you are connecting your local repository to the one on the server that you made early.

	  **git remote add origin https://github.com/username/ProjectName.git**

- And finally push it to the server.This is our way to say that the server have to get a new version of our files.

  	**git push -u origin master**

- Go to your repository page and see what you have now.

### Make a pull request to let me see your stuff

- Go to a repo and fork it. You can do this is in http://github.com

- Go to a dir and type git clone. This way you are getting a local copy of the forked repo.

  	**git clone https://github.com/gep150/TrainSoft-JavaScript-2013.git**

- Make a new file or folder, what you want and commit it. You already know how.

- Then push it to the server

  	**git push -u origin master**

- Go to your repo page on http://github.com and click on the green “Compare and Review” button

- Then click on the button for a pull request and submit it with a detailed description which the owner of the forked repo have to read. That’s it.


This guide show you the basic steps but you need a CMD or Terminal for it. If you want to use the GUI client you can download it from here but at this moment we don’t have tutorial for it.
https://help.github.com/articles/set-up-git

