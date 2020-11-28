import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: '/inicio' , pathMatch: 'full'},
  {
    path: 'inicio',
    loadChildren: () => import('./screens/screens.module').then(m => m.ScreensModule)
  },
  {path: '**', redirectTo: '/inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
