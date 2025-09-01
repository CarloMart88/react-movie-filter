import { useState, useEffect } from "react";

//Create un nuovo progetto React e implementate un sistema di filtro per una lista di film in base al genere.

const initialFilms = [
  { title: "Inception", genre: "Fantascienza" },
  { title: "Il Padrino", genre: "Thriller" },
  { title: "Titanic", genre: "Romantico" },
  { title: "Batman", genre: "Azione" },
  { title: "Interstellar", genre: "Fantascienza" },
  { title: "Pulp Fiction", genre: "Thriller" },
];

const [genre, setGenres] = useState("");
const [filterdFilms, setfilterdFilms] = useState(initialFilms);

// un if e un else molto semplice
useEffect(() => {
  if (genre === "") {
    setfilterdFilms(initialFilms);
  } else {
    setfilterdFilms(initialFilms.filter((film) => film.genre === genre));
  }
}, [genre]); //esegui tutto questo solo quando genre cambia

//Il filtro deve funzionare dinamicamente quando l'utente seleziona un genere dalla select.
//Se non viene selezionato alcun genere, devono essere mostrati tutti i film.

function Main() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <select value={genre} onChange={(e) => setGenres(e.target.value)}>
            <option value="">seleziona il genere</option>
            {initialFilms.map((film) => {
              const { title, genre } = film;
              return (
                <>
                  <option>{genre}</option>
                </>
              );
            })}
          </select>
        </div>
        {filterdFilms.map((film) => {
          const { title, genre } = film;
          return (
            <>
              <div className="col-5" key={title}>
                {title}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Main;
