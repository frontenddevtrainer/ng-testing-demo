import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { TableComponent } from './table/table.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { CustomCasePipe } from './pipes/custom-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    TableComponent,
    UserListingComponent,
    CustomCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
