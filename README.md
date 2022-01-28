# GreenFunds (greenfunds)

An Elevate Project

(Node >=12.22.1 and NPM >=6.14.12 required)

Make sure you use Yarn to not mix package
installers

## Install the dependencies
```bash
yarn
```

### Start production server
```bash
yarn start
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
yarn dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
yarn build
```

### Deployment (Use Git Bash To Avoid Unexpected Errors)
```bash
heroku login
heroku git:remote -a <heroku app name>
heroku config:set YARN_PRODUCTION=false
git push heroku master
```
Add API_URL config var to Heroku

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
