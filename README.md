# NxNgIonPoc2

This project was generated using [Nx](https://nx.dev).

🔎  **Nx is a set of Extensible Dev Tools for Monorepos.**

## Quick Start

1. Clone this repository
2. Install global dependencies: `npm install -g @nrwl/cli @angular/cli @ionic/cli cordova native-run`
3. Install local dependencies: `npm install`
4. At this point you should be able to run both applications in a local server.

## Local Development Server

**Running the Angular application:**

```npm run serve:ng```

Navigate to http://localhost:4200/.

**Running the Ionic application:**

```npm run serve:ng```

Navigate to http://localhost:4000/.

The apps will automatically reload if you change any of the source files.

**Running the Ionic application in an emulator or physical device:**

Make sure you have everything setup to run the ionic application in a physical device or using an emulator.

**Android**: If you are building for Android, follow the [Android Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html) and install all the requirements.

To run the application in a physical android device, run: `ionic cordova run android --device`
To run the application in an android emulator, run: `ionic cordova emulate android`

**iOS**: If you are building for iOS, follow the [iOS Platform Guide](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/index.html) and install all the requirements.

To run the application in a physical iOS device, run: `ionic cordova run ios --device`
To run the application in an iOS emulator, run: `ionic cordova emulate ios`

If you want to add live reload capabilities to make live changes just add the `-l` flag to any of the previous commands.
i.e. `ionic cordova emulate android -l`

## Code scaffolding

Use the Nx CLI and angular schematics in order to generate code:

`nx g [schematic]:[name] [options]`

Here is an example for creating an Angular component in the Angular application:

`nx g @nrwl/angular:component `

## Build

Run `ng build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Documentation

[Nx Documentation](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Nx Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)
