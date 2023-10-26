import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductspageComponent } from './components/productspage/productspage.component';
import { ProductdetailspageComponent } from './components/productdetailspage/productdetailspage.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'products',
    component: ProductspageComponent,
  },
  {
    path: 'product-detail/:id',
    component: ProductdetailspageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
