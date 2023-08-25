import { firestore } from '../lib/firebase';
import { collection, query, where, getDocs } from "firebase/firestore";

export async function doesUsernameExist(username) {
    const q = query(collection(firestore, "users"), where("username", "==", username));

  return q>0;
}

