Small change
**Disclaimer:** this code is not ment to be used on production, don't use part of it on your solution without check first if it fulfill all the security retrictions you would like to have in your system.

# Getting started
The first step is to execute "yarn install" in both folders, _frontend_ and _serverless_.

Now you can build the frontend, to do that, in the folder _frontend_ execute:
```yarn build```

To deploy your solution to AWS you need to execute in the _serverless_ folder:
```
serverless deploy

serverless client deploy
```

You need to provide values for environment variables in both projects. For the frontend, you need to provide values for the variables at _.env_. For serverless project, a new _dev.json_ file needs to be created with a field called _giphy_api_key_.
