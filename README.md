# Leemon

Leemon is the new App for Android and iOS mobile

## 🚀 Made with React-Native on iOS and Android 🚀

## Getting started

Follow this steps to get your Leemon app and running on your local machine or emulator

### Prerequisites

You need to install [yarn](https://yarnpkg.com/en/docs/install) and [react-native](https://facebook.github.io/react-native/docs/getting-started) to running Leemon on your local machine or emulator

### Installing

Create a new folder on your local machine and change directory (from the terminal):
```
$ mkdir myfolder
$ cd myfolder
```

Clone the project `Leemon`
```
$ git clone https://linkoftherepository.git
```

On the `android/` directory, create a new file called `local.properties` and add this line
```
sdk.dir = /Users/NAME/Library/Android/sdk
```
this line is the `PATH` of your `Android SDK` folder

Copy `.env.example` to `.env`

### Running

#### Running the app on Android

##### Personal Android device
Follow this [react-native](https://facebook.github.io/react-native/docs/running-on-device) tutorial

##### Emulator
You need to install [Genymotion](https://docs.genymotion.com/latest/Content/01_Get_Started/Installation.htm) or [Android Studio](https://developer.android.com/studio/install)
Create a `Virtual Device` and open it
From the `root directory`, run this command (on your terminal)
```
$ react-native run-android
```
#### Running the app on iOS

You need to install [Xcode](https://developer.apple.com/xcode/)

##### Personal iOS device
On a personal iPhone allowed in the debug Apple license, run this command
```
react-native run-ios --device="iPhone" 
```
##### Emulator
On an iPhone X emulator, run this command
```
react-native run-ios --simulator="iPhone X" 
```

### Authors

Secret for now
