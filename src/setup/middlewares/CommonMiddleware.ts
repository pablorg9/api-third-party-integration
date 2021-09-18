import { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import methodOverride from 'method-override';
import { json, urlencoded } from 'body-parser';
import helmet from 'helmet';

export const middlewares = (application: Application): void => {
    application.use(cors());
    application.use(json());
    application.use(
        urlencoded({
            extended: true,
            limit: '1mb',
            parameterLimit: 10000,
        }),
    );
    application.use(morgan('dev'));
    application.use(
        morgan('tiny', {
            skip: (_req: Request, res: Response) => res.statusCode < 418,
        }),
    );
    application.use(methodOverride());
    application.use(helmet());
};
