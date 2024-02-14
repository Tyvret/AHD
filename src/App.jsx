// import React, { useState } from "react";
// import { Todo } from "./components/todo";
// import { nanoid } from "nanoid";
// import { filmCollection, spelCollection } from "./firebase";
import { push } from "firebase/database";
import { Quotes } from "./components/Quotes";
// import { Heart } from "./components/Heart";

// //CONVERTERA TEXT TILL APP I HELGEN

// export function App() {
//   //   const [note, setNote] = useState({
//   //     title: "",
//   //     content: "",
//   //     id: "",
//   //     bread: "",
//   //     egg: "",
//   //     drinks: {
//   //       water: "",
//   //       tea: "",
//   //     },
//   //   });

//   //   const [noteArr, setNoteArr] = useState([]);

//   //   function handleChange(e) {
//   //     const { name, value } = e.target;

//   //     setNote((prevVal) => {
//   //       return {
//   //         ...prevVal,
//   //         [name]: value,
//   //         id: nanoid(4),
//   //       };
//   //     });
//   //   }

//   //   async function addTodo(newTodo) {
//   //     try {
//   //       await push(spelCollection, newTodo);
//   //       console.log("Todo added successfully!");
//   //       setNoteArr((prevVal) => {
//   //         return [...prevVal, newTodo];
//   //       });
//   //     } catch (error) {
//   //       console.error("Error adding todo: ", error);
//   //     }

//   //     setNote({
//   //       title: "",
//   //       content: "",
//   //     });
//   //   }

//   //   const toDos = noteArr.map((todo, index) => {
//   //     return (
//   //       <Todo
//   //         key={index}
//   //         id={todo.id}
//   //         title={todo.title}
//   //         content={todo.content}
//   //       />
//   //     );
//   //   });

//   const [quote, setQuote] = useState(true);

//   return (
//     <div className="container">
//       <h1>Hej älskling!</h1>
//       <form></form>
//       <Heart />
//       {quote && <Quotes />}
//     </div>
//   );
// }
import { Card } from "./components/Card.jsx";
import "./styles.css";
import CountdownTimer from "./components/Timer.js";
import { Slider } from "./components/imgSlider.jsx";
import React from "react";
import { choices } from "./database.js";
import { filmCollection } from "./firebase.js";

export default function App() {
  // const [database, setDatabase] = React.useState({
  //   te: false,
  //   bread: false,
  //   egg: false,
  // });

  // const [locked, setLocked] = React.useState(true);

  const [submited, setSubmited] = React.useState(false);

  const [fadeIn, setFadeIn] = React.useState(false);

  function handleClick(name) {
    choices[name] = !choices[name];
  }

  async function submitIt(e) {
    try {
      e.preventDefault();

      const newData = choices;
      await push(filmCollection, newData);
      console.log("Todo added successfully!");
      setSubmited(true);
      console.log(newData);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    if (submited) {
      // After 1 second, set fadeIn to true to trigger the fade-in effect
      const timer = setTimeout(() => {
        setFadeIn(true);
      }, 1000);

      // Clear the timer when component unmounts or submited changes
      return () => clearTimeout(timer);
    }
  }, [submited]);

  return (
    <div className="App">
      <h1>Glad alla hjärtans dag Älskling!</h1>
      <div className="rotating-heart">
        <p className="heart" role="img" aria-label="heart">
          ❤️
        </p>
        <p className="lock">🔒</p>
        <CountdownTimer />
      </div>

      {/* {!locked && (
        <div className="card-container">
          <Card
            onClick={handleClick}
            name="te"
            bild="https://www.svgrepo.com/show/237614/tea-mug.svg"
          />
          <Card
            onClick={handleClick}
            name="bread"
            bild="https://www.svgrepo.com/show/401229/bread.svg"
          />
          <Card
            onClick={handleClick}
            name="egg"
            bild="https://www.svgrepo.com/show/227324/fried-egg.svg"
          />
        </div>
      )} */}
      {!submited && (
        <p className="message">
          Tyvärr har jag inte hunnit färdigt med denna "app" jag tänkte
          överraska dig lite med, så du får vänta till helgen med att
          förhoppningsvis testa den! Men ser fram emot en underbar kväll med dig
          och tills dess får du göra ett val och njuta av ett litet bildspel!
        </p>
      )}
      {submited && (
        <h2
          style={{
            color: "rgb(70, 54, 61)",
            opacity: 1,
            transition: "opacity 1s ease",
          }}
        >
          Beställningen bearbetas!
        </h2>
      )}
      {submited && (
        <div className={`img-slider-container ${fadeIn ? "fade-in" : ""}`}>
          {submited && <Slider />}
        </div>
      )}
      {!submited && <hr />}
      {submited && <Quotes fadeIn={fadeIn} />}
      {!submited && (
        <section className="form-section">
          <h1>Välj vad du känner för ikväll!</h1>
          <form className="" action="submit">
            <div className="form-card">
              <Card
                onClick={handleClick}
                name="movie"
                bild="https://www.svgrepo.com/show/484603/movie-film.svg"
              />
              <Card
                onClick={handleClick}
                name="game"
                bild="https://www.svgrepo.com/show/400887/videogame.svg"
              />{" "}
              <Card
                onClick={handleClick}
                name="pickup"
                bild="https://www.svgrepo.com/show/398088/pizza.svg"
              />{" "}
              <Card
                onClick={handleClick}
                name="boardGame"
                bild="https://www.svgrepo.com/show/91102/pawn.svg"
              />{" "}
              <Card
                onClick={handleClick}
                name="massage"
                bild="https://www.svgrepo.com/show/113092/massage.svg"
              />{" "}
              <Card
                onClick={handleClick}
                name="homemade"
                bild="https://www.svgrepo.com/show/398366/spaghetti.svg"
              />
            </div>
            <button onClick={submitIt} className="submit">
              Skicka beställning!
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
