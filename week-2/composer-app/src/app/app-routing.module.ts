import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComposerListComponent } from './composer-list/composer-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ComposerListComponent },
  { path: 'composer-list', component: ComposerListComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
