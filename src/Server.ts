import 'module-alias/register';
import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '@setup';
import { routes } from '@routers';
import { middlewares, errorMiddleware } from '@setup/middlewares';

const application: Application = express();
const port = process.env.PORT || 8080;

// middlewares
middlewares(application);

// routes
routes(application);

application.use(errorMiddleware);

application.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

application.listen(port, () => {
    console.log(`Application running on port ${port}`);
});

application.on('error', (e) => {
    console.log(`Application crashed: ${e}`);
    process.exit(0);
});
