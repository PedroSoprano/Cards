import "./App.css";
import { useEffect, useState } from "react";
import { shuffle } from "./suffler";

function App() {
  const [classe, setClasse] = useState(false);

  const questoes = [
    {
      pergunta: "questão 1",
      resposta: "reposta 1",
      indice: 0,
    },
    {
      pergunta: "questão 2",
      resposta: "reposta 22",
      indice: 1,
    },
    {
      pergunta: "questão 3",
      resposta: "reposta 33",
      indice: 2,
    },
    {
      pergunta: "questão 4",
      resposta: "reposta 44",
      indice: 3,
    },
  ];

  // const adicionarQuestao = () => {
  //   setQuestoes([
  //     ...questoes,
  //     {
  //       pergunta: "nova pergunta",
  //       resposta: "nova resposta",
  //     },
  //   ]);
  // };

  const dataQuestao = shuffle(questoes);

  // console.log(dataQuestao);

  return (
    <div className="App">
      {/* <button onClick={adicionarQuestao}>Adicionar Questão</button> */}
      <section>
        <div className="face">
          <div className={classe ? "front" : "front2"}>
            <h2>PERGUNTA</h2>
            <p>{questoes[0].pergunta}</p>
            {/* <p>{indiceAleatorio}</p> */}
          </div>
          <div className={classe ? "back" : "back2"}>
            <h2>RESPOSTA</h2>
            <p>{questoes[0].resposta}</p>
            {/* <p>{this.indiceAleatorios}</p> */}
          </div>
        </div>
        <button
          onClick={() => {
            setClasse(!classe);
          }}
        >
          click
        </button>
      </section>
    </div>
  );
}
export default App;
