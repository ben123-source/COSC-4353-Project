# Getting started with Fuel Quota app

## Clone the repo locally
Clone the application by running the following command:\
git clone https://github.com/ben123-source/COSC-4353-Project.git

## Build the frontend app

In the project directory, you can run:
### `npm install`

## Run the frontend app

Then to run the frontend app, you can run:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Setup the MySQL db
Install MySQL on your computer, if you have not done already

Connect to the MySQL db on your computer using any MySQL client, \
I am using MySQLWorkbench client app on mac. You can use the same\
if you like.

Open a Query tab, you shall run the followig scripts in same order:
fuelquotadb_ddl.sql
fuelquotadb_ddl_tables.sql

The above 2 scripts will create the DB schema and create the necessary tables.
The tables script can be further enhanced to add more tables if we create in future.

## Run the backend app
In the project directory, you can run:
### `node server.js`

Once the backend is up and running, please proceed to next section.

## Signup for the user

You can signup for any user you like on the app,\
 when it opens up in your browser.


