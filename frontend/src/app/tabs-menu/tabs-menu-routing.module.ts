import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsMenuPage } from './tabs-menu.page';

const routes: Routes = [
  {
    path: '',
    component: TabsMenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'my-books',
        loadChildren: () => import('../my-books/my-books.module').then(m => m.MyBooksPageModule)
      },
      {
        path: 'update-books',
        loadChildren: () => import('../update-books/update-books.module').then( m => m.UpdateBooksPageModule)
      },
      {
        path: 'delete-books',
        loadChildren: () => import('../delete-books/delete-books.module').then( m => m.DeleteBooksPageModule)
      },
      {
        path: 'add-books',
        loadChildren: () => import('../add-books/add-books.module').then( m => m.AddBooksPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsMenuPageRoutingModule { }
