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

## Forms

template vs model

**template**
- je HTML wordt wat langer
- je `*ngIf` expressies zijn zonder extra moeite korter
- custom validators zijn attributen (directives)

**model**
- makkelijker te testen
- dynamische formulierelementen zijn ruk
- custom validators zijn gewone functies

## Lifecycles

Wat Angular doet:

```ts
let comp = new LifecycleComponent();
comp.message = elem.getAttribute('message');
comp.ngOnInit();
```

### `afterViewChecked`

```
html<tr *ngFor="...">
```
```html
<tr></tr>
<tr></tr>
<tr></tr>
<tr></tr>
<tr></tr>
<tr></tr>
```

## Testing

Unittesten
- Karma/jasmine
- Mocha

Integratietesten
- Component testing
- HTML
- Database
- API
- Karma/jasmine
- Mocha

End-to-end testen
- Cypress
- Protractor (deprecated)
- Selenium
- Jest
- W3C WebDriver - nightwatch / wdio



Acceptance TDD
- CucumberJS / Specflow (.NET)

### Unittesten

// mocks spies
dummies - doet helemaal niks
stubs - voorgedefinieerd testdata
mocks - nepgedrag (of het is aangeroepen)

spies

black box vs white box

```ts
// wat spyOn ongeveer doet:

function spyOn(obj, target) {
	let original = obj[target];

	obj[target] = () => {
		// register diagnostics
	};
}
```

### Wanneer testen minder belangrijk is (MENING)

- Proof-of-concepts
  => wanneer je project < 6 maanden duurt

  let wel: "niets is zo permanent als een tijdelijke oplossing"

- Als je stagiaires inhuurt om de testen te schrijven
- Als je x% code coverage probeert te halen

```cs
try { controller.Do(); } catch(Exception e) { }
```

### TDD: Test-driven development/design

1. Schrijf de test
2. Run de test en zie dat hij faalt
3. Schrijf code   (KISS)
4. Run de test en zie dat hij slaagt
5. Refactor

Repeat.

## Components

parent  <====>  child
App     <=====>  Autocomplete

```html
<app-autocomplete [data]="..." (select)="">
```
```ts
@ViewChild(ComponentNaam)
child: ComponentNaam;

@ViewChildren(ComponentNaam)
children: QueryList<ComponentNaam>;
```

## Waar JP op let bij het schrijven van code

1. Leesbaarheid - als ik het lees, snap ik wat er staat?
2. Onderhoudbaarheid - robuustheid - patterns - DRY - SOLID KISS YAGNI   You Aren't Gonna Need It
3. Testbaarheid
4. Veiligheid  - hackbaarheid
5. Dat het werkt
6. Performance  (kan die naar boven afhankelijk van situatie)

## OTAP

Ontwikkeling  (jouw devbak)
Test   (functioneel)
Acceptatie   (FAT/GAT/PAT)  functionele acceptatie test    gebruikers acceptatie test   preproductie acceptatie test
Productie

## Java vs JavaScript

Java == JavaScript voor zover Car == Carpet

## Dependency injection

- dat je je dependency inject
- het is een vorm Inversion of Control 

```ts
new Car()
new Wheel()
new Wheel()
new Wheel()
new Wheel()
new Engine()
```

reddit ELI5: kind dorst ouders koelkast

- standaard zijn services SINGLETONS - 1 instantie

## REST:  REpresentational State Transfer

HTTP-header Accept: application/json / xml / 

REST maturity levels

0 Swamp of Plain old XML
1 Resources
2 Verbs  - GET POST PUT PATCH DELETE
  - statuscodessen  201 Created  204 No Content  404 405 Method Not Allowed  415 Mediatype not supportd   418 I'm a teapot
3 Hypermedia As The Engine Of Application State // publieke APIs

GET api/car/14

```json
{
	"make": "...",
	"model": "...",
	"links": [
		{
			"history": "api/car/14/history"
		}
	]
}
```

HttpClient
=> content-type  json
=> request interceptor
=> response interceptor (XML)

### POST vs PUT

POST toevoegen
PUT wijzigen

POST   api/car   { make: '...', model: '...' }
POST   api/car   { make: '...', model: '...' }
POST   api/car   { make: '...', model: '...' }
POST   api/car   { make: '...', model: '...' }
POST   api/car   { make: '...', model: '...' }
POST   api/car   { make: '...', model: '...' }

PUT   api/car/abcdf384-abc9d9d3-d993bba9d994   { make: '...', model: '...' }
PUT   api/car/583   { make: '...', model: '...' }
PUT   api/car/583   { make: '...', model: '...' }
PUT   api/car/583   { make: '...', model: '...' }
PUT   api/car/583   { make: '...', model: '...' }
PUT   api/car/583   { make: '...', model: '...' }

idempotent

## ESLint

Static code analysis

- google
- default eslint
- airbnb

## json-server werkend krijgen

1. npm install --global json-server
2. data.json aanmaken
3. json-server data.json

## Lijst verversen

1. Lokale object toevoegen aan de lokale array
   => zeer snel
   => goedkoop
   => **in eerste instantie** makkelijk
   => niet in sync in server
   => wat als jouw POST stukgaat?
   => Optimistic UI

2. De POST afwachten en bijgewerkte entity toevoegt aan de lokale array
   => duurt langer
   => meer in sync met de server
   => als POST stukgaat, is er geen verwarring
   => relatief weinig netwerktraffic

3. De hele lijst opnieuw ophalen
   => duurt veruit het langst
   => belast je server ook maximaal
   => volledig in sync met server
   => vaak het gemakkelijkst om te implementeren
   => lijkt heel erg op wat we vroegah deden
      - PRG pattern

## Observables

- Observable
- Subject - geen geschiedenis
  - BehaviorSubject - de laatste `.next()`
  - ReplaySubject - veel geschiedenis `.next()`

Observables in Angular
* `HttpClient` (promises zijn eigenlijk gepaster)
* `formControl.valueChanges.subscribe()`
* Route params
* `EventEmitter<>`


## Routing

Angular Router features:
- Basics van routing
- Route parameters
- Child routes
- Route guards
- Route resolvers
- Lazy loading

Angular 2  (september 2016)
Angular 4
Angular 5
Angular 6
Angular ...
Angular 13


Wat maakt een SPA een SPA?
- geen refreshes
- het is 1 pagina

1. Dat je alle templates van alle pagina's client-side opslaan
   - In-memory strings
   - DOM-elementen
2. Lazy-load

Ter info: PRPL-pattern
Push critical resources
Render initial route
Pre-cache additional routes
Lazy-load the rest



Angular routing:

1. <router-outlet> ergens in je app.component.html
2. routes definieren
3. alles in pagina's opdelen
4. RouterModule




## UI component libraries

* Angular Material
* PrimeNG
* Nebular
* Bootstrap-wrappers

## Authenticatie

identificatie  wie ben je
authenticatie  bewijs dat je dat bent
autorisatie    wat mag je  <=== OAuth (oorspronkelijk)


### JWT

JSON Web Token

Authorization: Bearer <insert token here>

ey  header  .  payload  .  signature

Kritiekpuntje: waar sla je dat JWT op?

XSRF: Cross-site Request Forgery
- cookies
  => HttpOnly - niet vanuit JS uit te lezen

XSS:
 - reflected XSS: als een hekker een gebruiker overtuigt om bepaalde javascript uit te voeren
 - stored XSS: <script>document.cookie</script>

- local storage
- session storage
- indexed database
- willekeurige globale variabele
