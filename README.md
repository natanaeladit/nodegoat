# NodeGoat

This is a fork of [NodeGoat](https://github.com/OWASP/NodeGoat) Project.

## Getting Started

### Run NodeGoat on your machine

Please follow these steps to setup and run it locally -
* Install [Node.js](http://nodejs.org/) - NodeGoat requires Node v4.4 or above

* Clone the github repository
```
git clone https://github.com/natanaeladit/nodegoat
```

*go to the directory
```
cd nodegoat
```

* Install node modules
```
npm install
```

* Create Mongo DB:
    You can create a remote MongoDB instance or use local mongod installation
    * Using Remote MongoDB
        * Create a sandbox mongoDB instance (free) at [MongoLab](https://mlab.com/)
        * Create a new database.
        * Create a user.
        * Update the `db` property in file `config/env/development.js` to reflect your DB setup. (in format: `mongodb://<username>:<password>@<databasename>`)

* Populate MongoDB with seed data required for the app
    * Run the npm-script below to populate the DB with seed data required for the application. Pass the desired environment as argument. If not passed, "development" is the default:
```
npm run db:seed
```
* Start server, this starts the NodeGoat application at url [http://localhost:4000/](http://localhost:4000/)
```
npm start
```
## License
Code licensed under the [Apache License v2.0.](http://www.apache.org/licenses/LICENSE-2.0)
