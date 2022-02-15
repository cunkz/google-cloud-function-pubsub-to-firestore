/**
 * Triggered from a message on a Cloud Pub/Sub topic.
 *
 * @param {!Object} event Event payload.
 * @param {!Object} context Metadata for the event.
 */
exports.migratePubSub = async (event, context) => {
  const { Firestore } = require('@google-cloud/firestore');
  const firestore = new Firestore();
  const collectionName = 'example-collection';
  if(event.data) {
    const message = JSON.parse(Buffer.from(event.data, 'base64').toString());
    const doc = firestore.collection(collectionName).doc(`${message.id}`);
    if(!message._delete)
      await doc.set(message, {merge: true});
    else
      await doc.delete();

    console.log(message);
  } else {
    console.log('empty message');
  }
};
