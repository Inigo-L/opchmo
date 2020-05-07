# opchmo

## JavaScript
Store all JavaScript that will be used as source on the website in the `./src` directory.

## Firebase
`./src/firebase.js` initialises firebase and creates the global variables `auth` and `db`. So, as long as this script is loaded in `index.html`, there is no need to initialise it elsewhere.

## Firebase - Authentication
In order to work on this project on your own computer/server you must add your domain/IP address to the Authorised domains in the firebase console ([here for the original project](https://console.firebase.google.com/u/0/project/opchmo/authentication/providers))

## Firebase - Firestore
Please refer to the [quickstart guide](https://firebase.google.com/docs/firestore/quickstart?authuser=0) to learn how to use Firebase Firestore.

When working on the Firestore rules or index, only call `firebase deploy` from inside:
```
./Firestore
```

## Firebase - Functions
Please refer to the [quickstart guide](https://firebase.google.com/docs/functions/get-started?authuser=0) to learn how to use Firebase Cloud Fuinctions.

Deploy functions to `europe-west2` (London)

When working on the cloud functions, only call `firebase deploy` from inside:
```
./Functions/functions
```
