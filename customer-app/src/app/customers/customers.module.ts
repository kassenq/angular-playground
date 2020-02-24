import { CommonModule } from '@angular/common'; // functionality bucket
import { NgModule } from '@angular/core'; // decorator

// must register "building block" components here


// import { AppRoutingModule } from './app-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent,
    FilterTextboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomersComponent
  ],
  providers: [],
})
export class CustomersModule { }
