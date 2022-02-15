# Google Cloud Function for Pub/Sub to Firestore

This repository contains function for Google Cloud Function to transfer message from Pub/Sub to Firestore

## Usage

First, add new Google Cloud Function, then choose your Pub/Sub topic for trigger. 
After that, choose NodeJS runtime. Create file index.js and package.json based on this repository. 
Don't forget to insert "migratePubSub" for function to be called later.

## Additional Information

In migratePubSub function, we use flag "_delete" to split message which for upsert or delete. Example data :
```JSON
{
 "id": "lorem",
 "label": "ipsum",
 "_delete": true
}
```

And if you want to remid about pub/sub, maybe you can execute publisher and subscriber from [this repository](https://github.com/cunkz/google-pubsub-nodejs)
