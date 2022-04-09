import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { RestaurateurComponent } from "./restaurateur/restaurateur.component";

const routes : Routes = [
 
  {path:'restaurateur',component: RestaurateurComponent}

];
export const ROUTING = RouterModule.forRoot(routes);
