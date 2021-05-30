import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
            },
            {
                path: 'products',
                loadChildren: () => import('./../products/products.module').then(m => m.ProductsModule),
            },
            {
                path: 'update',
                loadChildren: () => import('./../update-products/update-products.module').then(m => m.UpdateProductsModule),
            },
            {
                path: 'new',
                loadChildren: () => import('./../new-products/new-products.module').then(m => m.NewProductsModule),
            },
            {
                path: 'edit',
                loadChildren: () => import('./../edit-products/edit-products.module').then(m => m.EditProductsModule),
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }