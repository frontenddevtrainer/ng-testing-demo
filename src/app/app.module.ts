import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { TableComponent } from './table/table.component';
import { UserListingComponent } from './user-listing/user-listing.component';
import { CustomCasePipe } from './pipes/custom-case.pipe';
import { TimerComponent } from './components/timer/timer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductspageComponent } from './components/productspage/productspage.component';
import { ProductdetailspageComponent } from './components/productdetailspage/productdetailspage.component';
import { HighlightDirective } from './directives/highlight.directive';
import { IsAdminGuardService, adminGuardFactory } from './guard/is-admin.guard';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './ngrx/reducer/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    TableComponent,
    UserListingComponent,
    CustomCasePipe,
    TimerComponent,
    HomepageComponent,
    ProductspageComponent,
    ProductdetailspageComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    {
      provide: adminGuardFactory,
      useFactory: adminGuardFactory,
      deps: [IsAdminGuardService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
