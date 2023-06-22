import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
    path: "about", component: AboutComponent
  }, {
    path: "menu", component: MenuComponent
  }, {
    path: "menu/:id", component: DetailsComponent
    }, {
      path: "cart", component: CartComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
