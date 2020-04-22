# Typescript slow case

Small repo to showcase very slow typescript, draining a lot of computer resources.

To trigger the intense workload follow this formula :

* Open `tsconfig.json`
* Remove `dom` from the `compilerOptions.lib` array
* Open `index.ts`, wait for the IDE to parse the file
* Add `dom` from the `compilerOptions.lib` array
* Right away without letting the IDE update, switch tab to `index.ts` and cut the `console` in two (press `Enter`) and then remove the line break

Your IDE should hang, sometimes the UI freeze.
