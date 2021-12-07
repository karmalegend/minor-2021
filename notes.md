# Angular

## Hoe en waarom?

- Pagina niet verversen => SPA
  - SPA's zijn hip
- Meer responsive?

- state management


DOM API

```js
document.querySelector()
document.createElement()
.innerText/.innerHTML
.setAttribte()
.className
```

- gigantisch veel lines
  => onoverzichtelijk

JS-frameworks
- Angular  (full-fledged framework)
- Vue      (view libraries)
- React    (view libraries)
- Svelte (geen runtime, compile-stap)

WebAssembly (HTML5)
- Blazor
  => Blazor WebAssembly (mono runtime => browser   7MB)
  => Blazor Server      (WebSocket)
- Yew

## Node en Deno

Node.js
=> JavaScript voor de backend
=> JS runtime
=> V8
=> npm    node package manager   (NuGet)
=> Ryan Dahl


Deno???
- Ryan Dahl
- 2020
- TypeScript first class citizen
- V8



V8 / SpiderMonkey (Firefox) / Chakra(Core)


ES Modules

import
export

## Project aanmaken

Kan met de hand!

- index.html
- alle client-side libraries
  - @angular/core @angular/animations @angular/common @angular/routing
  - types
- TypeScript
  - configureren en installeren
- Unittesten
  - mocha/chai/sinon
  - karma/jasmine
  - jest
- end-to-end testen
  - cypress
  - protractor (deprecated)
  - selenium (oud)
  - playwright  (Microsoft)

  - W3C WebDriver
    - nightwatch
    - wdio
- builden
  - webpack - configuratie  .html .css .js .ts
  - snowpack
  - parceljs
  - rollup
  - vite
  - gulp/grunt
- codekwaliteit
  - tslint
  - eslint

Kan ook makkelijker: Angular CLI

```sh
npm install --global @angular/cli
```

yarn - package manager - facebook
- concurrent downloads
- globale cache
- lockfile

package-lock.json
package.json
- dependencies:  @angular/core: "^13.0.4"

## Less vs Sass/SCSS

Sass:

```sass
body
	font-family: sans-serif
	color: white

h1
	font-size: 2rem
```


SCSS/Less:

```scss
body {
	font-family: sans-serif;
	color: white;
}

h1 {
	font-size: 2rem;
}
```

## Bindings

{{text}} - tekst binden
(mouseover) - event binding
[src]   - attribute
*ngFor  - template binding

```html
<input [(ngModel)]="...">
```

combinatie van:
```html
<input [value]="..." (oninput)="">
```

## Pipes

{{text | iets | nogiets | nogmeer | lewis}}

built-in pipes

- uppercase/lowercase/titlecase
- date: 'd-m-Y'
- json
- currency
- number
- async (Promises/Observables)

- alle custom shizzle

## Directorystructuur

```sh
app/
-- functioneel-deelgebied1
-- pipes
-- components
-- directives
-- services
-- models
-- mocks
-- guards
-- interceptors
-- pages
   -- products
   -- meer
sh

