import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { UserProfileComponent } from './user-profile/user.profile.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducer } from './user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    UserProfileComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ user: userReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
