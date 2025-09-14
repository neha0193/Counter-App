## counter App 
* installed react-icons and tailwind css 
* learned about state update batching behaviour .. to solve this we use functional update in state update of use state hook 
* the problem was we are updating the count again and again without calling it functional update 
* also built custom dark-light mode functionality of tailwind css 
* react icons can be changed with text-color and text size 
* @theme in tailwind css used to make custom classes 

#### first thing :
* npm install gh-pages --save-dev

#### create a new repository on the command line
* git init
* git add .
* git commit -m "first commit"
* git branch -M main
* git remote add origin *site_address*
* git push -u origin main

#### push an existing repository from the command line
* git remote add origin *site_address*
* git branch -M main
* git push -u origin main

#### before deploying a project :
* Remove unnecessary things 
* npm i 
* for lighter version : npm prune --production
*