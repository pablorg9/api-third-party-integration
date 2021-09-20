# api-third-party-integration

## Project structure

```
├── dist
├── node_modules
├── src
│   ├── dao
│   │   ├── http
│   ├── routers
│   ├── services
│   ├── setup
│   │   ├── core
│   │   ├── helpers
│   │   ├── interfaces
│   │   ├── middlewares
├── test
│   │   ├── mock
├── .editorconfig
├── .env
├── .eslintignore
├── .eslintrc.js
├── .gcloudignore
├── .gitignore
├── .prettiertc.js
├── app.yaml
├── CHANGELOG.md
├── cloudbuild.yaml
├── commitlint.config.js
├── jest.config.js
├── package.json
├── tsconfig.build.json
└── tsconfig.json
```

## Application run

```zsh
# Install dependencies
yarn
```

```zsh
# Application run
yarn dev
```

ENDPOINT: 
    URL: http://localhost:8080/api/v1/integrations/${giphyImg} 
    Params: 
        - giphyImg: Img name from giphy, example: NASA
    