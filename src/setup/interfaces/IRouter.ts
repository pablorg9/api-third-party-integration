import { Router } from 'express';

export interface IRouter {
    router: Router;
    version: string;
    uri?: string;
}
