import { Routes } from '@angular/router';
import { signedAuthGuard, notSignedAuthGuard, SigninComponent, SignupComponent } from '../auth';
import { DashboardComponent } from '../dashboard';
import { ServerAddComponent, ServerListComponent, ServerViewComponent } from '../server';
import { SettingsComponent } from '../settings';
import { TemplateAddComponent, TemplateListComponent, TemplateViewComponent } from '../template';
import { UserAddComponent, UserListComponent, UserViewComponent } from '../user';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: 'signin',
        title: "Snailpanel - Signin",
        canActivate: [notSignedAuthGuard],
        component: SigninComponent
    },
    {
        path: 'signup',
        title: "Snailpanel - Signup",
        canActivate: [notSignedAuthGuard],
        component: SignupComponent
    },
    
    {
        path: '',
        title: "Snailpanel - Dashboard",
        canActivate: [signedAuthGuard],
        component: DashboardComponent
    },

    {
        path: 'addserver',
        title: "Snailpanel - Add server",
        canActivate: [signedAuthGuard],
        component: ServerAddComponent
    },
    {
        path: 'servers',
        title: "Snailpanel - Servers",
        canActivate: [signedAuthGuard],
        component: ServerListComponent
    },
    {
        path: 'servers/:id',
        title: "Snailpanel - Edit server",
        canActivate: [signedAuthGuard],
        component: ServerViewComponent
    },

    {
        path: 'addtemplate',
        title: "Snailpanel - Add template",
        canActivate: [signedAuthGuard],
        component: TemplateAddComponent
    },
    {
        path: 'templates',
        title: "Snailpanel - Templates",
        canActivate: [signedAuthGuard],
        component: TemplateListComponent
    },
    {
        path: 'templates/:id',
        title: "Snailpanel - Edit template",
        canActivate: [signedAuthGuard],
        component: TemplateViewComponent
    },

    { path: 'adduser',
        title: "Snailpanel - Add user",
        canActivate: [signedAuthGuard],
        component: UserAddComponent
    },
    { path: 'users',
        title: "Snailpanel - Users",
        canActivate: [signedAuthGuard],
        component: UserListComponent
    },
    {
        path: 'users/:id',
        title: "Snailpanel - Edit user",
        canActivate: [signedAuthGuard],
        component: UserViewComponent
    },

    {
        path: 'settings',
        title: "Snailpanel - Settings",
        canActivate: [signedAuthGuard],
        component: SettingsComponent
    },

    {
        path: '**',
        title: "Snailpanel - Not found",
        component: NotFoundComponent
    }
]
