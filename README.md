# Final-project-test

This is the final project submission for SSW-540. The repo contains the system built to maintain stevens faculty management system for the school of systems and enterprises. The project includes 2 views. One, the user view. The user will be able to search for their respective faculty's information, location and other details. The second is the admin view with a login system. The admin can add, update or delete records as he sees fit. I'll be adding more features to the project and is a work in progress.

How to run the project:

1) To run the project, you can clone the project onto a new folder by right clicking on your desired folder and opening git bash here. There you can use the following command to clone the project: git clone https://github.com/sidhdhuk09/Final-project-test.git
  
  a) If git bash is not installed, additionally, create a new folder in your directory. e.g: new folder in your C drive. Once you've created the new folder, open VS code and open your newly created folder in VS Code. There will be an option to clone a github repository. Simply, click on it and copy this repo link into the dialog box. 
  b) That should display the full project with all the necessary folders on the right side of your screen under file explorer. 
 

2) Once the above is done, click on terminal and open new terminal. Inside the terminal type: npm install. 
Note: after you've cloned the project, the npm install command should siffice in installing all the necessary packages. 

3) Once the necessary packages are installed, next, you will have to create an environment variable file (.env file). Click on the new file button and name the file .env. 

4) As soon as the file has been created, copy paste the following command into your .env file:          MONGODB_URI=mongodb+srv://root:admin@cluster01.j30rt5u.mongodb.net/faculty_management

5) Save the .env file. Go back to your terminal and type: npm start. 
This should start the project on localhost:9000. Typing localhost:9000 on your browser will open the project. 
