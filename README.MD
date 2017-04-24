# ng2-notify-popup
Based on [ ng-notify ](https://matowens.github.io/ng-notify/) for Angular 1.x by Mat Owens

## [ View Demo ](https://shubhi1407.github.io/ng2-notify-popup/)

## Installation

```bash
$ npm install --save ng2-popup-notify
```
## Usage
Configure your System.config
```javascript
System.config({
  defaultJSExtensions: true,
  map: {
    "angular2": "node_modules/angular2",
    "rxjs": "node_modules/rxjs",
    ...
    'ng2-notify-popup' : 'npm:ng2-notify-popup',
  },
  packages: {        
    'app': {
      main : './main.ts',
      defaultJSExtensions : 'ts'
    },
    "ng2-notify-popup" : {
      main:'./index.js',
      defaultExtension : 'js'
    }
  }
});
```
and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/** IMPORTANT : IE10 and IE11 requires the following to support `@angular/animation` (which is used by this module).
Run `npm install --save web-animations-js`.
*/
import 'web-animations-js';  

// Import library
import { NgNotifyPopup } from 'newyo';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Add module to imports
    NgNotifyPopup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its Notification service

```typescript
// You can now use this library service to show popup anywhere in angular app
import { Component } from '@angular/core';
import { NotificationService } from 'ng2-notify-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotificationService]
})
export class AppComponent {

  constructor(private notify: NotificationService) { }

  // to append in body
  show(text: string, type: string): void {
    this.notify.show(text, { position:'top', duration:'2000', type: 'success' });
  }
  // to append in any other component.
  showModular(text: string, type: string): void {
    this.notify.show(text, { position:'top', duration:'2000', type: 'success', location: '#modular' });
  }

```
## API
### NotificationService.setConfig( options: object )
This method can be used to override the default configuration provided by the module. All params are optinal
```typescript
NotificationService.setConfig({
                                position: 'top/bottom',
                                type: 'info/success/warn/error/grimace/default',
                                duration: 4000,
                                sticky: true/false,
                             })
```
### NotificationService.show( text: string, options?: object )
`show()` method can be called with an optional second argument to override the global default config
```typescript
// Simple notification
NotificationService.show("Success");
// Notification with options
NotificationService.show("Error occured", { position: 'top', type: 'error' })
//Show notification inside a division (MUST have position:relative)
NotificationService.show("Inside a div", { location: '#my-div' })
```
### NotificationService.destroy()
```typescript
// Destroy any active notification
NotificationService.destroy();
```

## Custom type
You can create your own `type` in CSS as follows
```CSS
.ngn-wild {
  background-color: #f4a460;
  }
```
## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Shubhangi Gupta](mailto:shubhangi140793@gmail.com)
