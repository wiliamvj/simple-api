[![Mongoose](https://img.shields.io/badge/mongoose-5.9.10-blgreenue)](https://mongoosejs.com/) [![Axios](https://img.shields.io/badge/express-4.17.1-red)](https://www.npmjs.com/package/express '![Express](https://img.shields.io/badge/express-4.17.1-red)')

## Simple API

API with a simple user CRUD.

- Authentication with JWT
- Sending email with nodemailer and mailtrap
- Database with MogooDB
- Request testing with Insominia

You will need to change the MongooDB ULR in `database > index.js`.

Also add your Mailtrap SMTP data at `config > mail.json`.

In addition you must change the secret used for hashing in `config > auth.json`, you can create the MD5 hash [here](https://www.md5hashgenerator.com/).

Import the `insominia-requests.json` file into your Insominia to have all _routes_ pre-configured, just change the **base_url** and the **token** in **_Manage Environments_**
