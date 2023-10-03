import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-books',
    loadChildren: () => import('./my-books/my-books.module').then( m => m.MyBooksPageModule)
  },
  {
    path: 'add-books',
    loadChildren: () => import('./add-books/add-books.module').then( m => m.AddBooksPageModule)
  },
  {
    path: 'update-books',
    loadChildren: () => import('./update-books/update-books.module').then( m => m.UpdateBooksPageModule)
  },
  {
    path: 'delete-books',
    loadChildren: () => import('./delete-books/delete-books.module').then( m => m.DeleteBooksPageModule)
  },
  {
    path: 'tabs-menu',
    loadChildren: () => import('./tabs-menu/tabs-menu.module').then( m => m.TabsMenuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
