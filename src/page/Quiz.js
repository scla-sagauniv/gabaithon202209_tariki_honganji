/* 「useState」と「useEffect」をimport↓ */
import React from "react";

/* 「onAuthStateChanged」と「auth」をimport↓ */
import { Navbar } from "../components/Navbar";

// import "../css/Start.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import GoogleMapComponent from "../components/GoogleMapComponent";

const containerStyle = {
  width: "100%"
};

export const Quiz = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

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
                <input {...register("place")} />
              </div>
              <div>
                <label>Hint1</label>
                <input name='Hint1' {...register("Hint1")} />
              </div>
              <div>
                <label>Hint2</label>
                <input name='Hint2' {...register("Hint2")} />
              </div>
              <div>
                <label>Hint3</label>
                <input name='Hint3' {...register("Hint3")} />
              </div>
              <button className='button-all' type='submit'>
                Create Quiz
              </button>
              <p>
                <Link to={"/"}>Back</Link>
              </p>
            </div>
            {/* ↓リンクを追加 */}
            <GoogleMapComponent containerStyle={containerStyle} />
            {/* <div className="form-container">
            </div> */}
          </form>
        </div>
      </main>
    </>
  );
};
