import { UpdateProductsComponent } from './update-products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: UpdateProductsComponent,
        data: { title: 'Update products' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UpdateProductsRoutingModule { }