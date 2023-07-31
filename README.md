# SSW-540 Final Project- Stevens Faculty Management System.

This is the final project submission for SSW-540. The repo contains the system built to maintain stevens faculty management system for the school of systems and enterprises. The project includes 2 views. One, the user view. The user will be able to search for their respective faculty's information, location and other details. The search bar requires a minimum of two characters. Invalid characters or other special characters not associated to the person you want to search will yield invalid search result.  
The second is the admin view with a login system. The admin can add, update or delete records as he sees fit. I'll be adding more features to the project and is a work in progress.

How to run the project:

1) To run the project, you can clone the project onto a new folder by right clicking on your desired folder and opening git bash here. There you can use the following command to clone the project: git clone https://github.com/sidhdhuk09/Final-project-test.git
  
  a) If git bash is not installed, additionally, create a new folder in your directory. e.g: new folder in your C drive. Once you've created the new folder, open VS code and open your newly created folder in VS Code. There will be an option to clone a github repository. Simply, click on it and copy this repo link into the dialog box. 
  b) That should display the full project with all the necessary folders on the right side of your screen under file explorer. 
 

2) Once the above is done, click on terminal and open new terminal. Inside the terminal type: npm install. 
Note: after you've cloned the project, the npm install command should siffice in installing all the necessary packages. 

3) Once the necessary packages are installed, next, you will have to create an environment variable file (.env file). Click on the new file button and name the file .env. 

4) As soon as the file has been created, copy paste the following command into your .env file:          MONGODB_URI=mongodb+srv://root:admin@cluster01.j30rt5u.mongodb.net/faculty_management

Important Note: Make sure that the .env file is inside of the final-project-test folder in your file explorer on the left hand side of the vs code window. If not, drag the .env file to the main project folder. 


5) Save the .env file. Go back to your terminal and type: npm start. 
This should start the project on localhost:9000. Typing localhost:9000 on your browser will open the project. 




Note: In the below screenshots, I did not include admin view dashboard for privacy reasons. 

![final user view-1 for submission](https://user-images.githubusercontent.com/76087316/236707688-76ccf0cd-236c-4f86-ba86-5623cbbb29b4.jpg)

![final user view-2 for submission](https://user-images.githubusercontent.com/76087316/236707703-8d76197e-f74b-487d-b34b-670d67f8ddd3.jpg)



![admin view-1 for final submission](https://user-images.githubusercontent.com/76087316/236707719-be8e45ee-615a-4055-ad44-0ec3dcc916dc.jpg)




