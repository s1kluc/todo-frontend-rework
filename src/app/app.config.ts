import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideIcons} from "@ng-icons/core";
import {heroPlus, heroHomeModern, heroCalendar, heroMagnifyingGlass,heroPencil, heroTrash} from "@ng-icons/heroicons/outline";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({eventCoalescing: true}), provideRouter(routes), provideHttpClient(), provideAnimationsAsync(),
    provideIcons({heroPlus, heroCalendar, heroHomeModern, heroMagnifyingGlass, heroPencil,heroTrash})]
};
