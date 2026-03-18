// Mówimy Reactowi, że chcemy używać "pamięci" - czyli pamiętać rzeczy między kliknięciami
import { useState } from "react";

// Lista komplementów - zwykła tablica z tekstami
const komplementy = [
  "Masz niesamowity uśmiech! 😄",
  "Jesteś świetny w rozwiązywaniu problemów! 🧠",
  "Twoja kreatywność nie zna granic! 🎨",
  "Sprawiasz, że każdy dzień jest lepszy! ☀️",
  "Uczysz się szybciej niż myślisz! 🚀",
  "Masz wyjątkowe podejście do życia! ✨",
  "Jesteś inspiracją dla innych! 💪",
  "Twój kod będzie kiedyś piękny! 💻",
];

// Główna "cegiełka" (komponent) naszej aplikacji
export default function App() {

  // "pamięć" przechowująca aktualny komplement
  // komplement - to co aktualnie pokazujemy
  // setKomplement - funkcja do zmiany komplemenetu
  const [komplement, setKomplement] = useState("Kliknij przycisk, żeby dostać komplement! 👇");

  // "pamięć" przechowująca kolor tła - będzie się losowo zmieniać
  const [kolor, setKolor] = useState("#ffffff");

  // Lista ładnych kolorów tła do losowania
  const kolory = ["#fff9c4", "#f8bbd0", "#c8e6c9", "#b3e5fc", "#e1bee7", "#ffe0b2"];

  // Ta funkcja uruchamia się po kliknięciu przycisku
  function losujKomplement() {
    // Losujemy liczbę od 0 do długości tablicy minus 1
    const losowa = Math.floor(Math.random() * komplementy.length);

    // Ustawiamy nowy komplement (React automatycznie odświeży ekran)
    setKomplement(komplementy[losowa]);

    // Losujemy też nowy kolor tła
    const losowyKolor = kolory[Math.floor(Math.random() * kolory.length)];
    setKolor(losowyKolor);
  }

  // To co React "rysuje" na ekranie - wygląda jak HTML, ale to JSX
  return (
    // Główny pojemnik - styl inline to po prostu CSS napisany w JS
    <div style={{
      minHeight: "100vh",           // zajmuje całą wysokość ekranu
      backgroundColor: kolor,       // kolor tła - zmienia się po kliknięciu
      display: "flex",              // układamy elementy jeden pod drugim
      flexDirection: "column",
      alignItems: "center",         // wyśrodkowanie w poziomie
      justifyContent: "center",     // wyśrodkowanie w pionie
      transition: "background-color 0.5s", // płynna zmiana koloru (animacja)
      fontFamily: "sans-serif",
    }}>

      {/* Tytuł aplikacji */}
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Generator Komplementów 🎁
      </h1>

      {/* Dymek z komplementem - ramka z zaokrąglonymi rogami */}
      <div style={{
        backgroundColor: "white",
        padding: "30px 40px",
        borderRadius: "20px",         // zaokrąglone rogi
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)", // cień pod kartą
        maxWidth: "400px",
        textAlign: "center",
        fontSize: "1.3rem",
        marginBottom: "30px",
        minHeight: "80px",
        display: "flex",
        alignItems: "center",
      }}>
        {/* Tutaj React wstawia aktualny komplement z "pamięci" */}
        {komplement}
      </div>

      {/* Przycisk - onClick mówi "uruchom tę funkcję po kliknięciu" */}
      <button
        onClick={losujKomplement}
        style={{
          padding: "15px 35px",
          fontSize: "1.1rem",
          backgroundColor: "#6c63ff",  // fioletowy
          color: "white",
          border: "none",              // brak obramowania
          borderRadius: "50px",        // bardzo zaokrąglony = pigułka
          cursor: "pointer",           // kursor w kształcie dłoni
          boxShadow: "0 4px 10px rgba(108,99,255,0.4)",
        }}
      >
        Daj mi komplement! ✨
      </button>

    </div>
  );
}
