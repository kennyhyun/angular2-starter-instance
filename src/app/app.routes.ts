import { provideRouter, RouterConfig } from '@angular/router';

import {HomeRoutes} from './home/home.routes';

const routes: RouterConfig = [
  ...HomeRoutes,
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
