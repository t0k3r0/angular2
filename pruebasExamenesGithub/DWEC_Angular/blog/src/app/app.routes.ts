import { Routes } from '@angular/router';
import { ListadoComponent } from './post/listado/listado.component';
import { ActualizarComponent } from './post/actualizar/actualizar.component';
import { VistaIndividualComponent } from './post/vista-individual/vista-individual.component';
import { CreacionComponent } from './post/creacion/creacion.component';

export const routes: Routes = [
    {
        path:'listado',
        component: ListadoComponent
    },
    {
        path:'actualizar/:postID',
        component: ActualizarComponent
    },
    {
        path:'ver/:postID',
        component: VistaIndividualComponent
    },
    {
        path:'creacion',
        component: CreacionComponent
    },
    {
        path:'**',
        redirectTo: 'listado'
    },
];
