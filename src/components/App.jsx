import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

/* id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning:
      "“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym." */


function createEntry(emojiTerm){
  return(
    <Entry 
    key= {emojiTerm.id}
    emoji={emojiTerm.emoji}
    name={emojiTerm.name}
    description= {emojiTerm.description}
    />
  );

}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(createEntry)}
        
      </dl>
    </div>
  );
}

export default App;
