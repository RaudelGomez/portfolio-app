import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PolicyComponent } from './policy/policy.component';

export const routes: Routes = [
  {path: "", component: MainContentComponent},
  {path: "imprint", component: ImprintComponent},
  {path: "policy", component: PolicyComponent}
];
