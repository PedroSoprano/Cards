import "./App.css";
import { useEffect, useState } from "react";
import { shuffle } from "./suffler";

function App() {
  const [classe, setClasse] = useState(false);
  const [indice, setIndice] = useState(0);
  const [questoes, setQuestoes] = useState([]);

  let questoesArr = [
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
  // let questoesOrganizadas = [];
  // let acc = [];

  // const fileInput = document.getElementById("input");
  // fileInput?.addEventListener("change", (event) => {
  //   const file = event.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const text = reader.result;
  //     console.log(text);
  //     let accLetra = "";
  //     for (let i = 0; i < text.length; i++) {
  //       if (text[i] !== "?") {
  //         accLetra += text[i];
  //       } else if (text[i] === "?" || text[i] === "\\") {
  //         acc.push(accLetra);
  //         accLetra = "";
  //       }
  //     }

  //     for (let i = 0; i < acc.length; i++) {
  //       let accQuestoes = {};
  //       if (i % 2 === 0) {
  //         accQuestoes.pergunta = acc[i];
  //       } else {
  //         accQuestoes.resposta = acc[i];
  //         accQuestoes.indice = i - 1;
  //         questoesOrganizadas.push(accQuestoes);
  //         accQuestoes = {};
  //       }
  //     }

  //     console.log(acc);
  //     // Faça o parse do texto aqui
  //   };
  //   reader.readAsText(file);
  // });

  // const adicionarQuestao = () => {
  //   setQuestoes([
  //     ...questoes,
  //     {
  //       pergunta: "nova pergunta",
  //       resposta: "nova resposta",
  //     },
  //   ]);
  // };

  useEffect(() => {
    setQuestoes(shuffle(questoesArr));
  }, []);
  // console.log(dataQuestao);

  return (
    <div className="App">
      {/* <button onClick={adicionarQuestao}>Adicionar Questão</button> */}
      {indice < questoes.length ? (
        <section>
          <div className="face">
            <div className={classe ? "front" : "front2"}>
              <h2>PERGUNTA</h2>
              <p>{questoes[indice]?.pergunta}</p>
              {/* <p>{indiceAleatorio}</p> */}
            </div>
            <div className={classe ? "back" : "back2"}>
              <h2>RESPOSTA</h2>
              <p>{questoes[indice]?.resposta}</p>
              {/* <p>{this.indiceAleatorios}</p> */}
            </div>
          </div>
          <button
            onClick={() => {
              setClasse(!classe);
              if (indice < questoes.length && classe === true) {
                setTimeout(() => {
                  setIndice(indice + 1);
                }, 500);
              }
            }}
          >
            click
          </button>
        </section>
      ) : (
        <>
          {questoes.length ? (
            <div className="containerFinal">
              <h1 className="textFinal">O quiz chegou ao fim</h1>
              <button
                className="btnFinal"
                onClick={() => {
                  setIndice(0);
                  let questoesEmbaralhadas = shuffle(questoes);
                  setQuestoes(questoesEmbaralhadas);
                }}
              >
                Recomeçar
              </button>
            </div>
          ) : (
            <div className="containerFinal">
              <h1 className="textFinal">
                Escolha o arquivo com perguntas e respostas
              </h1>
              <input type={"file"} accept=".txt" id="input"></input>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
