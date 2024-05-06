import {useEffect, useState } from 'react';
import './App.css';
import MassagemForm from './components/MassagemForm';
import MassagemLista from './components/MassagemLista';
import api from './api/agendamentos';

function App() {
  const [massagens, setMassagens] = useState([])
  const [massagem, setMassagem] = useState({id:0})

  const pegaTodosAgendamentosBemMaisCuidado = async () => {
    const response = await api.get('agendamentos');
    return response.data;
  };
  //**SELECT */
  useEffect(() => {
    const getAgendamentos = async () => {
      const todosAgendamentos = await pegaTodosAgendamentosBemMaisCuidado();
      if (todosAgendamentos) setMassagens(todosAgendamentos);
    };
    getAgendamentos();
  }, []);


  //** Add seção de massagem */
   const addMassagem = async (mas) => {
      const response = await api.post('agendamentos', mas);
      setMassagens([...massagens, response.data]);
  }

  function cancelarMassagem() {
    setMassagem({ id: 0 });
  }

  //**UPDATE */
  const atualizarMassagem = async (mas) => {
    const response = await api.put(`massagem/${mas.id}`, mas)
    const { id } = response.data;
    setMassagens(
      massagens.map((item) => (item === mas.id ? response.data : item ))
    );
    setMassagem({ id: 0 })
  }

  //**DELETE */
  const deletarMassagem = async (id) => {
      if (await api.delete(`massagem/${id}`))
      {
        const massagemFiltradas = massagens.filter(
          massagem => massagem.id !== id) 
        setMassagens([...massagemFiltradas])
      }
      
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
