import './App.css'


function App() {
  let alunos = [
    { nome: 'Savalo Horse', cursos: ["DS", "ADM"] },
    { nome: 'Miranda Filoxina', cursos: ["ADM", "MA"] },
  ];


  return (
    <>
      {
        alunos.map((element) => (

          <div key={element.nome}>
            {element.nome}
            {
              element.cursos.map((curso) => (
                <h1 key={curso}> {curso} </h1>
              ))

            }
          </div>
        ))
      }

    </>
  )
}

export default App