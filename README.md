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

