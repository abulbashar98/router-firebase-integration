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


## About state={{ from: location }} replace , props and Their Uses...

1. Notice These Lines in RequireAuth in StackBlitz....

*   // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected.
* This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.

    2. Describing these two Props we are Sending In <Navigate> Component to use IN that  authentication Component we Are Navigating to.... And Have to come back or redirect using these twq....


    ## Redirecting back to Location in Login Page.....

    1. StackBlitz Link:- Same in Require Auth....
    2. Created a Handler function so that we could Navigate after the sign in is Successful using .then()
    3. Describing this Line.. let from = location.state?.from?.pathname || "/";
    * we are setting from to redirect here, getting it from location.state.from.pathname 
    * state we Set before when we navigated using <Navigate> component in RequireAuth
    * if state not found redirect to Home Page ("/")
    4.  Description of: { replace: true }
    * replace true means to delete the history of location we came from after we redirected  to the Child route from Login, There Can be multiple numbers of Protected Route, so redirecting to them after signing in requires deleting the history we came from every time....
    5. Notice these lines in StackBlitz..
    * Send them back to the page they tried to visit when they were
       redirected to the login page. 
       * Use { replace: true } so we don't create
       another entry in the history stack for the login page.  
       * This means that
       when they get to the protected page and click the back button, they
     won't end up back on the login page, which is also really nice for the
    user experience.



 





