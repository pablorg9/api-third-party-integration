export const NODE_ENV = process.env.NODE_ENV?.toLowerCase() || 'dev';

interface IEnvironments {
    GCP: {
        PROJECT_ID: string;
    };
    MYSQL: {
        HOST: string;
        PORT: string;
        USER: string;
        PASSWORD: string;
        DATABASE: string;
    };
    SECRETJWT: string;
}

export const ENVIROMENTS: IEnvironments = {
    GCP: {
        PROJECT_ID: process.env.PROJECT_ID || '',
    },
    MYSQL: {
        DATABASE: process.env.DB_MYSQL_DATABASE || '',
        PORT: process.env.DB_MYSQL_PORT || '',
        HOST: process.env.DB_MYSQL_HOST || '',
        PASSWORD: process.env.DB_MYSQL_PASSWORD || '',
        USER: process.env.DB_MYSQL_USER || '',
    },
    SECRETJWT: process.env.SECRETJWT || '',
};
