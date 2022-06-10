# (DEMO) Unit Testing with Firestore and Vitest inside a Sveltkit Project

The purpose of this demo, is to run some unit tests, with Firestore and Vitest.
Actually, I am looking for some help to have the tests working...

To run the tests:
`npm run test`

To run the firebase emulator:
`npm run emu`

## The error you can reproduce (launching the tests)
What is happening, is that I have a Timeout. It seems that the SDK initializes, but operations such as setDoc, addDoc... does not work.  
I want my tests to be working locally.  
I have created 3 tests, with 3 differents initilizations methods :
1. init the SDK_CLIENT_FIREBASE via VITEST_ENV_VARIABLE.  
2. init the SDK_CLIENT_FIREBASE via hardcoding the firebase credentials.  
3. using the SDK_CLIENT_FIREBASE via Firebase/TestEnvironement.  

## TODO
You MAY have yo create some file to setup the project:
I have put 2 commits named: PUT_YOUR_CREDENTIAL_HERE
1. update file: .firebaserc
2. rename file: .env-TODO -> .env

## Related Issues:
1. https://stackoverflow.com/questions/72539977/error-when-using-firestore-and-vitest-locally-the-test-timeouts-and-no-data-is
2. https://github.com/jmagrippis/with-svelte/issues/31#issuecomment-1150282611
