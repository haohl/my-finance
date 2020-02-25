import { ComponentType } from 'react';

export interface Route {
    path: string;
    display: string;
    component: ComponentType;
}