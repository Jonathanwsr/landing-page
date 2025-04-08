import { ServerRoute, RenderMode } from '@angular/ssr';
import { routes } from './app.routes';
import { Route } from '@angular/router';

export const serverRoutes: ServerRoute[] = routes.map((route: Route) => {
  const path = route.path ?? '';

  const renderMode = 
    path === 'player/:id' || path === 'leagues/:id'
      ? RenderMode.Server 
      : RenderMode.Prerender; 

  return {
    ...route,
    path,
    renderMode,
  } as ServerRoute;
});
