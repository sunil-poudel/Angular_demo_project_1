import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

bootstrapApplication(AppComponent,{
  providers: [
    provideHttpClient(withInterceptorsFromDi())  // ✅ This provides HttpClient properly
  ]
})
  .catch((err) => console.error(err));
