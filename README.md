<div>
  <br/><br />
  <p align="center">
    <a href="https://bambuser.com" target="_blank" align="center">
        <img src="https://bambuser.com/wp-content/themes/bambuser/assets/images/logos/bambuser-logo-horizontal-black.png" width="280">
    </a>
  </p>
  <br/><br />
</div>

bambuser-examplebroadcaster-ionic
---------------------------------

This Git repository is the end result of [a tutorial on how to build
a live streaming app using Cordova, Ionic and Bambuser's SDK:s
and cloud services](https://bambuser.com/docs/broadcasting/cordova/).


### Prerequisites:

You need XCode and / or Android Studio, depending on whether you are targeting
iOS or Android or both.

Also install Node.js and then run `npm install -g ionic@3.20.0 cordova@8.0.0`

OR

to encapsulate the Node.js parts in a Docker container; run `docker-compose run --service-ports example`


### Usage


1. Run `npm install` to install project-specific dependencies declared in `package.json`


2. Test the non-native parts of the app by running `npm run ionic:serve` and
opening http://localhost:8100 in a web browser.


3. Install [cordova-plugin-bambuser](https://github.com/bambuser/cordova-plugin-bambuser)
with `ionic cordova plugin add https://github.com/bambuser/cordova-plugin-bambuser#0.7.0`


4. Add Cordova platform-specific project files

   a) Run `ionic cordova platform add android` to generate a Cordova based
   Android Studio project in `./platforms/android`

   AND / OR

   b) Run `ionic cordova platform add ios` to generate a Cordova based
   XCode project in `./platforms/ios/`


5. Add [your applicationId generated at the developer page](https://dashboard.bambuser.com/developer)
in the constructor of `./src/pages/broadcaster/broadcaster.ts`

```
const APPLICATION_ID:string = 'CHANGEME';
```


6. Run `ionic cordova prepare` after each change to the HTML5 parts of your
hybrid app, i.e. the files in `./src/`.

This outputs optimized JavaScript and CSS bundles into `./platforms/*/www/`


7. Build the native app

   a) Open the project in `./platforms/android` with Android Studio to build an
   Android app.

   AND / OR

   b) Open the project in `./platforms/ios` with XCode to build for an iOS device
   (live streaming not supported in the simulator)


For a more comprehensive walkthrough, [check out the full
tutorial](https://bambuser.com/docs/broadcasting/cordova/).
