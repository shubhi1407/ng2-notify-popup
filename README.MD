# ng2-notify-popup

## Installation

To install this library, run:

```bash
$ npm install newyo --save
```

## Installation

```bash
$ npm install --save ng2-popup-notify
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

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
