## Mailspring Plugin Starter

This folder contains a sample plugin for Mailspring that adds components to the composer's "action bar" and the right sidebar shown in the message viewer.

## Building a Plugin

Copy or symlink this project into `~/Library/Application Support/Mailspring/packages` on MacOS, or the corresponding location on Windows and Linux. (You can find this directory by going to _Developer > Show Mailsync Logs_ in Mailspring).

You can rename this directory and change the `name` field of `package.json` to rename your plugin. Keep in mind that plugins are like node modules and the names cannot contain spaces!

To get started, run `npm install` in your plugin's directory and then `npm run-script build` to compile the `src` folder into the `lib` folder. To see your changes in Mailspring, quit and relaunch the app OR open the developer tools and reload the app's main window.

For documentation of how to build plugins, check out [https://foundry376.github.io/Mailspring/](https://foundry376.github.io/Mailspring/) for (slightly outdated) information and also have a look at the many plugins that ship within the core app: [https://github.com/Foundry376/Mailspring/tree/master/app/internal_packages](https://github.com/Foundry376/Mailspring/tree/master/app/internal_packages). Some of the bundled plugins, like `composer-translate`, `composer-templates`, and `phishing-detection` are great starting points!

## Shipping a Plugin

Mailspring does not transpile the source code in your plugin when it runs - it expects that your JSX files, TypeScript, etc. has already been converted to plain ES2017 JavaScript. To give your plugin to other people, you should commit the `lib` directory so that they can download the repository, put it in place via the "Install a Plugin..." menu item in Mailspring, and be done.

## Future

In the next year or so, we'll be launching a first-class "plugin gallery" in Mailspring and formalizing the development and release processes. Right now, building a plugin using TypeScript is a real pain because Mailspring - while written in TypeScript - doesn't export the types for you to build against. Stay tuned!

## A note about Node Modules

Right now, if your plugin depends on external node modules (say, a CSV parser like `node-csv`), you'd need to package up a zip file that contained those modules already installed in `node_modules`, or have your users run `npm install`. In the future, Mailspring will run npm install for you.

However, we do not plan to support Mailspring plugins that require _native_ node modules - the kind that compile C++ or C code into platform-specific binaries. It's really hard to ship all of the tooling required to build these reliably, pre-packing them for each platform is annoying, and they often break when the node / nan versions change. Be warned! (An example of this would be `sqlite` or something like `node-addressbook`. You can often tell if a module contains native code if there is a `binding.gyp` file or if the install process takes a while and calls out to `make` or `gcc`.)
