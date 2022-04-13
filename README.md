# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Web Vitals problem? Install again

* Command:- npm i web-vitals --save-d

## About onAuthStateChanged....

We could see that we sent user State from Custom Hook to Header Component, But conditional rendering base on user state was not working, Because the change in state isn't observed in header Component...

To solve this problem we Can use something called onStateChange...

1. Go to docs in Firebase > build > authentication > manage users > Get the currently signed in user..... link:-(https://firebase.google.com/docs/auth/web/manage-users?hl=en&authuser=0#get_the_currently_signed-in_user)

2. Notice onAuthStateChanged function in here, it takes auth and nextObserver as parameters....

Now Like api calls we can call this function inside useEffect with empty [] and set our changeable state user in it, so Like API calls every time on reload this function will observe the change in state and deliver the the last state observed ONCE from Firebase  because of [] dependency.....




## About React Firebase Hooks..

Link:- (https://github.com/CSFrequency/react-firebase-hooks)

React Firebase Hooks Is a github repository by Chrisbianca...

### steps to use it....

1. install it using node package manager, Command:- npm install --save react-firebase-hooks

2. Now Read the Documentation and See what to get and create through importing, 

3. Creating auth on Each profile For now...

4. Notice some things are imported from (firebase/auth) also, and most created functions are imported from (react-firebase-hooks)

5. One important Notice is, where ever we are going to use Current User we would have to Create useAuthState(auth) and take [user] from it to observe....



## About Require Auth/ Protected Route....

1. RequireAuth is a React Router authentication system of creating Protected Route...
2. Go to React Router Documentation > authentication 
3. Here we can find a Link of StackBlitz... (https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src/App.tsx)

4. in here we can see the RequireAuth Function that we can use in Components


### Steps of using Require Auth...
1. Create RequireAuth Folder in Components, 
2. use rsc to create function....
3. Take Children from Props, As the protected Route will be there in inside the Children Space of RequireAuth Component..
3. now follow the StackBlitz...
4. Functionality is if there isn't a user we get In our case using useAuthState from firebase hooks we are going to Navigate the user using <Navigate> Component
5. Other when there is a User Logged in, we are Going to return The Route we got from Children.....
6. Other Props in Navigate rather than (to=""), are:- state={{ from: location }} replace,
7. As far as we Understand Now State from: location is to Capture the Location we went from using Navigate Component,
 





