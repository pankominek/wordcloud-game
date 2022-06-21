import { useEffect, useState } from "react";
import GameBoard from "../components/GameBoard";
import Header from "../components/Header";
import { GameData } from "../types";

function Game() {
  const DATA = [
    {
      question: "select animals",
      all_words: [
        "hole",
        "sofa",
        "pear",
        "tiger",
        "oatmeal",
        "square",
        "nut",
        "cub",
        "shirt",
        "tub",
        "passenger",
        "cow",
      ],
      good_words: ["tiger", "cow"],
    },
    {
      question: "select colors",
      all_words: [
        "jeans",
        "existence",
        "ink",
        "red",
        "blue",
        "yellow",
        "laugh",
        "behavior",
        "expansion",
        "white",
        "black",
        "cakes",
      ],
      good_words: ["red", "blue", "yellow", "white", "black"],
    },
    {
      question: "select vehicles",
      all_words: [
        "belief",
        "wire",
        "car",
        "bus",
        "star",
        "river",
        "hat",
        "skirt",
        "train",
      ],
      good_words: ["car", "bus", "train"],
    },
  ];

  const [state, setState] = useState<GameData>({
    question: "",
    all_words: [],
    good_words: [],
  });

  useEffect(() => {
    setState(DATA[Math.floor(Math.random() * DATA.length)]);
  }, []);

  return (
    state.question &&
    state.all_words?.length && (
      <>
        <Header text={state.question} />
        <GameBoard data={state} />
      </>
    )
  );
}

export default Game;
