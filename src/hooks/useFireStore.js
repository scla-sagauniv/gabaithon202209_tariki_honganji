import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../FirebaseConfig.js";

export const useFireStore = () => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState([]);
  const [guard, setGuard] = useState("");

  useEffect(() => {
    getQuestionList().then(() => {
      getRandomQuestion();
    });
    // eslint-disable-next-line
  }, [guard]);

  const getQuestionList = async () => {
    try {
      const questionsCollectionRef = collection(db, "QuestionPlace");
      getDocs(questionsCollectionRef).then(querySnapshot => {
        setQuestions(
          querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        );
        setGuard("stop");
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  // const getUser = () => {
  //   // ログインしているuserのuidと比べて、firestoreのuser情報を表示
  // };

  const getRandomQuestion = () => {
    var rand = Math.floor(Math.random() * questions.length);
    setQuestion(questions[rand]);
  };

  return { question };
};
