import { firestore } from '../lib/firebase';
import { collection, query, where, getDocs,getCountFromServer } from "firebase/firestore";

export async function doesUsernameExist(username) {
  const q = query(collection(firestore, "users"), where("username", "==", username));
  const snapshot = await getCountFromServer(q);
  
  return snapshot.data().count>0;
}

