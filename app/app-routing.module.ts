import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SearchComponent } from './search/search.component';
import { HotelsComponent } from './search/stay/hotels/hotels.component';

import { ResortsComponent } from './search/stay/resorts/resorts.component';




import { CustomSearchComponent } from './search/custom-search/custom-search.component';
import { ItemPageComponent } from './search/item-page/item-page.component';
import { FavoritesComponent } from './user/favorites/favorites.component';
import { BookItemComponent } from './search/book-item/book-item.component';

import { SettingsComponent } from './user/settings/settings.component';
import { GeneralSettingsComponent } from './user/settings/general-settings/general-settings.component';
import { EmailSettingsComponent } from './user/settings/email-settings/email-settings.component';
import { ChangePasswordSettingsComponent } from './user/settings/change-password-settings/change-password-settings.component';
import { CloseAccountSettingsComponent } from './user/settings/close-account-settings/close-account-settings.component';
import { AppComponent } from './app.component';

import { ContactComponent } from './contact/contact.component';
import { TheatresComponent } from './search/entertainment/theatres/theatres.component';
import { BarsComponent } from './search/entertainment/bars/bars.component';
import { NightClubComponent } from './search/entertainment/nightclub/nightclub.component';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchComponent },
  { path:  'about', component: ContactComponent},
  { path: 'search/hotels', component: HotelsComponent },
  { path: 'search/resorts', component: ResortsComponent },
  { path: 'search/theatres', component: TheatresComponent },

  { path: 'search/bars', component: BarsComponent },
  { path: 'search/nightclub', component: NightClubComponent },
  { path: 'search/:name', component: CustomSearchComponent },
  { path: 'search/page/:id', component: ItemPageComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'settings', component: SettingsComponent }
 



  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
