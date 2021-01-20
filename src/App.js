import React, { useState } from "react";
import "./styles.css";
var color = "#9c7777";
const emojiDict = {
  "😀": "Grinning Face",
  "🤣": "Running on the floor laughing",
  "🙂": "SLIGHTLY SMILING FACE",
  "🙈": "SEE-NO-EVIL MONKEY",
  "💇🏼‍♀️": "WOMAN GETTING HAIRCUT: MEDIUM-LIGHT SKIN TONE",
  "👨🏿‍💻": "MAN TECHNOLOGIST: DARK SKIN TONE"
};
const emojisWeKnow = Object.keys(emojiDict);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDict[userInput];

    if (meaning === undefined) {
      meaning = "we dont have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDict[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App" style={{ margin: "10%" }}>
      <h1 style={{ color: color }}>Emoji-pedia</h1>
      <input onChange={emojiClickHandler} />
      <div
        style={{ backgroundColor: "white", width: "50%", margin: "3% auto" }}
      >
        Meanings: {meaning}
      </div>
      <h3>Emojis We Know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
            {""}
          </span>
        );
      })}
    </div>
  );
}
