
import firebase from "../util/firebase";

const db = firebase.ref("/fireDb");

class firebaseService {
  getAll() {
    return db;
  }

  create(fireDb) {
    return db.push(fireDb);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new firebaseService();