import {useEffect, useState } from 'react';
import './App.css';
import MassagemForm from './components/MassagemForm';
import MassagemLista from './components/MassagemLista';

function App() {
  const [index, setIndex] = useState(0);
  const [massagens, setMassagens] = useState([])
  const [massagem, setMassagem] = useState({id:0})

  useEffect(() => {
    massagens.length <= 0 ? setIndex(1) :
    setIndex(Math.max.apply(Math,massagens.map(item => item.id)) + 1)
  }, [massagens])

  function addMassagem(mas) {
    setMassagens([...massagens, 
          {  ...mas, id: index }]
      );
  }

  function cancelarMassagem() {
    setMassagem({ id: 0 });
  }

  // ERRO AQUI ...
  function atualizarMassagem(mas){
    setMassagens(massagens.map(item => 
        item === mas.id ? mas : item ))
    setMassagem({ id: 0 })
  }

  function deletarMassagem(id){
    const massagemFiltradas = massagens.filter(massagem => massagem.id !== id) 
    setMassagens([...massagemFiltradas])
  }

  function pegarMassagem(id) {
    const massagem = massagens.filter(massagem => massagem.id === id)
    setMassagem(massagem[0])
  }

  return (
    <>
      <MassagemForm 
        addMassagem={addMassagem}
        cancelarMassagem={cancelarMassagem}
        atualizarMassagem={atualizarMassagem}
        masSelecionada={massagem}
        massagens={massagens}
      />
      <MassagemLista 
        massagens={massagens}
        deletarMassagem={deletarMassagem}
        pegarMassagem={pegarMassagem}
      />
    </>
  );
}

export default App;
