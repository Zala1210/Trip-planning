import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { AppComponent } from './app.component';


import { MaterialModule } from './material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* import { MatIconModule } from '@angular/material/icon'; */
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { SearchComponent } from './search/search.component';
import { EntertainmentComponent } from './search/entertainment/entertainment.component';
import { StayComponent } from './search/stay/stay.component';
import { HotelsComponent } from './search/stay/hotels/hotels.component';
import { ResortsComponent } from './search/stay/resorts/resorts.component';
import { PostsService } from './search/post.servise';
import { StarRatingModule } from 'angular-rating-star';
import { MaterialElevationDirective } from './material-elevation.directive';



import { CustomSearchComponent } from './search/custom-search/custom-search.component';
import { ItemPageComponent } from './search/item-page/item-page.component';
import { UserServiceModule } from './auth/user-service.module';
import { FavoritesComponent } from './user/favorites/favorites.component';
import { BookItemComponent } from './search/book-item/book-item.component';

import { SettingsComponent } from './user/settings/settings.component';
import { GeneralSettingsComponent } from './user/settings/general-settings/general-settings.component';
import { EmailSettingsComponent } from './user/settings/email-settings/email-settings.component';
import { ChangePasswordSettingsComponent } from './user/settings/change-password-settings/change-password-settings.component';
import { CloseAccountSettingsComponent } from './user/settings/close-account-settings/close-account-settings.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { RecommendedComponent } from './search/recommended/recommended.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { ContactComponent } from './contact/contact.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TheatresComponent } from './search/entertainment/theatres/theatres.component';
import { BarsComponent } from './search/entertainment/bars/bars.component';
import { NightClubComponent } from './search/entertainment/nightclub/nightclub.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    SearchComponent,
    EntertainmentComponent,
    StayComponent,
    HotelsComponent,
    ResortsComponent,
    BarsComponent,
  
    TheatresComponent,

   
    NightClubComponent,
    MaterialElevationDirective,
    CustomSearchComponent,
    ItemPageComponent,
    FavoritesComponent,
    BookItemComponent,

    SettingsComponent,
    GeneralSettingsComponent,
    EmailSettingsComponent,
    ChangePasswordSettingsComponent,
    CloseAccountSettingsComponent,
    RecommendedComponent,
    ContactComponent



   
   
  
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    StarRatingModule,
    ReactiveFormsModule,
    AngularMultiSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatSnackBarModule
    
    
  ],
  providers: [PostsService, UserServiceModule],
  bootstrap: [AppComponent],
  entryComponents: [BookItemComponent]
})
export class AppModule { }

