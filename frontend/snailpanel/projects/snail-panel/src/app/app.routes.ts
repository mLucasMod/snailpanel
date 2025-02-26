import { Routes } from '@angular/router';
import { SigninComponent, SignupComponent } from '../auth';
import { DashboardComponent } from '../dashboard';
import { ServerAddComponent, ServerListComponent, ServerViewComponent } from '../servers';
import { SettingsComponent } from '../settings';
import { authGuard, signAuthGuard } from '../shared';
import { TemplateAddComponent, TemplateListComponent, TemplateViewComponent } from '../templates';
import { UserAddComponent, UserListComponent, UserViewComponent } from '../users';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [authGuard] },

    { path: 'signin', component: SigninComponent, canActivate: [signAuthGuard] },
    { path: 'signup', component: SignupComponent, canActivate: [signAuthGuard] },

    { path: 'addserver', component: ServerAddComponent, canActivate: [authGuard] },
    { path: 'servers', component: ServerListComponent, canActivate: [authGuard] },
    { path: 'servers/:id', component: ServerViewComponent, canActivate: [authGuard] },

    { path: 'addtemplate', component: TemplateAddComponent, canActivate: [authGuard] },
    { path: 'templates', component: TemplateListComponent, canActivate: [authGuard] },
    { path: 'templates/:id', component: TemplateViewComponent, canActivate: [authGuard] },

    { path: 'users', component: UserListComponent, canActivate: [authGuard] },
    { path: 'adduser', component: UserAddComponent, canActivate: [authGuard] },
    { path: 'users/:id', component: UserViewComponent, canActivate: [authGuard] },

    { path: 'settings', component: SettingsComponent, canActivate: [authGuard] },

    { path: '**', component: NotFoundComponent }
]