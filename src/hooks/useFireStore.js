import { getDocs, collection } from "firebase/firestore";
import { useState } from "react";
import { db, auth } from "../FirebaseConfig.js";

export const useFireStore = () => {
  const [questions, setQuestions] = useState([]);
  const [users, setUsers] = useState([]);

  const getFireStoreList = async () => {
    try {
      console.log("auth", auth);
      const questionsCollectionRef = collection(db, "QuestionPlace");
      getDocs(questionsCollectionRef).then((querySnapshot) => {
        setQuestions(
          querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
  return { getFireStoreList, users, questions };
};
