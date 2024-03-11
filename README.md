# Bad Banking App 

## Description of the project:
 This is a banking app without security measures. It's solely a project aimed at practicing my first React app creations. The app enables users to create an account with minimal requirements and perform basic transactions such as depositing to their balance and withdrawing. However, these transactions are not connected to any specific user, serving merely as an example. I intend to continue working on this project to improve it and move towards developing a more realistic and secure banking application.

## How to Run:
This project was initiated using the standalone React method, which connects with the browser as follows: [!NOTE]  primarily fork it to your local computer, then:
### Open Git Bash and run the following commands:

#### Navigate to the location of the HTML file you want to open in the browser. Then, type:
      ```
      npm install -global http-server
      ```
#### After installation, type:
      ```
      http-server -c-1
      ```
      
You should see output similar to the following:

      ```
      Starting up http-server, serving ./
      
      http-server version: 14.1.1
      
      http-server settings:
      CORS: disabled
      Cache: 3600 seconds
      Connection Timeout: 120 seconds
      Directory Listings: visible
      AutoIndex: visible
      Serve GZIP Files: false
      Serve Brotli Files: false
      Default File Extension: none
      
      Available on:
        http://192.168.1.181:8080
        http://127.0.0.1:8080
      Hit CTRL-C to stop the server
      ```

### Open your web browser and enter `localhost:8080` in the address bar. 
The website should load and display the information. If you make updates in VSCode and they're not reflected after reloading the page, be sure to clear the cache.




## Roadmap of future improvements:
There are numerous improvements and additions that can be implemented in this code. For example:

### The banking app lacks security measures and is primarily a practice project for React app development.
### Users can create accounts with minimal requirements and perform basic transactions, but transactions are not linked to specific users.
### The intention is to improve the app by implementing measures such as user authentication and transaction encryption.
### Additionally, the application architecture will be enhanced for scalability and maintainability.
### Regular updates and security patching will be prioritized to maintain the app's reliability and protect user data.

## License information:
MIT license.

## Support
If you have any questions, please don't hesitate to contact me email <juliethpbautista@gmail.com>
 . Also I'm open to your ideas and suggestions, and I'm confident that our combined talents could lead to exciting and innovative results. If you're interested in discussing potential projects or exchanging ideas, please let me know.

Let's start a conversation and see where our collaboration might take us.


### Mastering React: A Step-by-Step Guide to Creating Your App with Toolchain Assistance:

Use the VS Code terminal with Git Bash after creating the directory and files for your React application (using toolchains), follow these steps. Ensure that, after creating the folder, you upload the Formik library and use NPM start to initialize your React app (note: you must be located in the directory of your new app). Also, there's no need to concern yourself with the multitude of folders and files that the React app creation process will download into your app directory. If you're a beginner, like myself, the only files you'll need to use are the `index.html` from the public folder and the `app.js` from the src folder—that's it. 


#### 1.Step into the directory where you want your app to be located:
cd name-of-app

#### 2. Create a React app:
npx create-react-app name-of-app

#### 3. Install Formik:
npm install formik --save

#### 4.Start the React app:
npm start

Make sure to follow these steps in sequence, and remember to be in the directory of your new app when performing these actions. For more info go to the:[React Webpage](https://create-react-app.dev/docs/getting-started/)
