import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AccFormsComponent } from './components/accForms/accForms.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AnkleComponent } from './components/bodyparts/ankle/ankle.component';
import { GeneralComponent } from './components/bodyparts/general/general.component';
import { KneeModule } from './modules/knee/knee.module';
import { KneeComponent } from './components/bodyparts/knee/knee.component';

const appRoutes: Routes = [
    { path: 'login', component: LogInComponent },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'forms', component: AccFormsComponent },
            {
                path: 'reports', component: ReportsComponent,
                children: [
                    { path: '', component: GeneralComponent},
                    { path: 'GEN', component: GeneralComponent},
                    { path: 'ANK', component: AnkleComponent },
                    { path: 'KNE', component: KneeComponent },
                ]
            },
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];

export const RouteModule = RouterModule.forRoot(appRoutes);
export const routedModules = [ KneeModule, ];
export const routedComponents = [
    LogInComponent,
    HomeComponent,
    AccFormsComponent,
    ReportsComponent,
    GeneralComponent,
    AnkleComponent,
];