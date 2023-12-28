import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const ITEM_CHOICE = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmueGjzpKDgzm82lcBQe_wQJ8V0bBz1kER4w&usqp=CAU",
  },
  scissors: {
    name: "Scissors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfp7QjZ_ZN7e4TNXubbD-JKoUOEILeU8m-hRDypMW848NdFBRCarg7u0hbmMX-hZAbhVU&usqp=CAU",
  },
  paper: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const playgame = (value) => {
    setUserSelect(ITEM_CHOICE[value]);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(gameResult(ITEM_CHOICE[value], computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(ITEM_CHOICE);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return ITEM_CHOICE[final];
  };

  const gameResult = (user, computer) => {
    if (user?.name === computer?.name) {
      return "draw";
    } else if (user?.name === "Rock")
      return computer?.name === "Scissors" ? "win" : "lose";
    else if (user?.name === "Scissors")
      return computer?.name === "Paper" ? "win" : "lose";
    else if (user?.name === "Paper")
      return computer?.name === "Rock" ? "win" : "lose";
  };

  return (
    <div>
      <div className="main">
        <Box title="you" item={userSelect} result={result} />
        <Box title="computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => playgame("scissors")}>가위</button>
        <button onClick={() => playgame("rock")}>바위</button>
        <button onClick={() => playgame("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
