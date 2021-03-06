/**
 * Created by GiangDH on 7/9/16.
 */
import { RouterConfig }  from '@angular/router';

import {AdminComponent}  from '../components/admin.component';


import { UpdateKnowledgeComponent } from '../components/back-end/knowledge/knowledge-update';
import { KnowledgeListComponent } from '../components/back-end/knowledge/knowledges-list';
import { RequestListComponent } from "../components/back-end/request/requests-list";
import { UpdateRequestComponent } from "../components/back-end/request/request-update";
import { UserListComponent } from "../components/back-end/users/user-list";
import { ReportListComponent } from "../components/back-end/report/reports-list";
import { DashboardComponent } from "../components/back-end/dashboard/dashboard";
import { TagListCtlComponent } from "../components/back-end/tag/tag-list-control";
import { ArtListCtlComponent } from "../components/back-end/article/article-list-clt";

import { AdminAuthGuard } from './auth';


export const AdminRoutes:RouterConfig = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminAuthGuard],
        children: [
            {
                path: 'users',
                children: [
                    {
                        path: '',
                        component: UserListComponent
                    }
                ]
            },
            {
                path: 'tags',
                component: TagListCtlComponent
            },
            {
                path: 'articles',
                component: ArtListCtlComponent
            },
            {
                path: 'reports',
                children: [
                    {
                        path: '',
                        component: ReportListComponent
                    }
                ]
            },
            {
                path: 'knowledges',
                children: [
                    {
                        path: '',
                        component: KnowledgeListComponent
                    },
                    {
                        path: ':id',
                        component: UpdateKnowledgeComponent
                    }
                ]
            },
            {
                path: 'requests',
                children: [
                    {
                        path: '',
                        component: RequestListComponent
                    },
                    {
                        path: ':id',
                        component: UpdateRequestComponent
                    }
                ]
            },
            {
                path: 'dashboard',
                children: [
                    {
                        path: '',
                        component: DashboardComponent
                    }
                ]
            },
            {
                path: '',
                redirectTo: 'dashboard'
            }
        ]
    }
];
