/* 「useState」と「useEffect」をimport↓ */
import React, { useState } from "react";

/* 「onAuthStateChanged」と「auth」をimport↓ */
import { Navbar } from "../components/Navbar";

// import "../css/Start.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleMapComponent from "../components/GoogleMapComponent";
import { db } from "../FirebaseConfig";
import { collection, doc, setDoc, GeoPoint } from "firebase/firestore";

const containerStyle = {
  width: "100%"
};

export const Quiz = () => {
  const [selectedPosition, setSelectedPosition] = useState();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async data => {
    let hints = [];
    hints.push(data.Hint1);
    hints.push(data.Hint2);
    hints.push(data.Hint3);

    const obj = {};
    obj.hints = hints;
    obj.geopoint = new GeoPoint(
      Number(selectedPosition.lat),
      Number(selectedPosition.lng)
    );
    obj.name = data.place;
    console.log("obj", obj);
    const newColRef = doc(collection(db, "QuestionPlace"));
    await setDoc(newColRef, obj);
    reset();
  };

  return (
    <>
      <main>
        <Navbar />
        <div className='body-container'>
          <h1 className='account-title'>Create Quiz</h1>
          <form className='body-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='form-account'>
              <div>
                <label>Place</label>
                <input {...register("place", { required: true })} />
              </div>
              <div>
                <label>Hint1(Object)</label>
                <input
                  name='Hint1'
                  {...register("Hint1", { required: true })}
                />
              </div>
              <div>
                <label>Hint2(Description)</label>
                <input
                  name='Hint2'
                  {...register("Hint2", { required: true })}
                />
              </div>
              <div>
                <label>Hint3(City)</label>
                <input
                  name='Hint3'
                  {...register("Hint3", { required: true })}
                />
              </div>
              <button className='button-all' type='submit'>
                Create Quiz
              </button>
              <p>
                <Link to={"/"}>Back</Link>
              </p>
            </div>
            {/* ↓リンクを追加 */}
            <GoogleMapComponent
              containerStyle={containerStyle}
              setSelectedPosition={setSelectedPosition}
            />
            {/* <div className="form-container">
            </div> */}
          </form>
        </div>
      </main>
    </>
  );
};
