import { BrowserModule } from '@angular/platform-browser'; // functionality bucket
import { NgModule } from '@angular/core'; // decorator

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
