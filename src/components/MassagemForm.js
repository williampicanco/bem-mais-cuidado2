import { useEffect, useState } from "react"

const massagemInicial = {
    id: 0,
    nome:'',
    lotacao:'',
    local: 0,
    horario: '',
    status: 0,
}

export default function MassagemForm(props) {
   const [massagem, setMassagem] = useState(massagemAtual())

   useEffect(() => {
      if(props.masSelecionada.id !== 0)
        setMassagem(props.masSelecionada);
   }, [props.masSelecionada]);


   const inputTextHandler = (e) => {
      const {name, value} = e.target;
      setMassagem({...massagem, [name]: value})
   }

   const handleSubmit = (e) => {
      e.preventDefault();

      if(props.masSelecionada.id !== 0) props.atualizarMassagem(massagem); 
      else props.addMassagem(massagem); 

      setMassagem(massagemInicial);
      
   }

   const handleCancelar = (e) => { 
    e.preventDefault();
     
    props.cancelarMassagem();

    setMassagem(massagemInicial);
   }
     
   function massagemAtual() {
    if(props.masSelecionada.id !== 0){
      return props.masSelecionada;
    }
    else{
      return massagemInicial;
    }

   }

    return(
      <> 
      <h1>Massoterapia {massagem.id !== 0 ? massagem.id : ''}</h1>
      <form className='row g-3' onSubmit={handleSubmit}>
        <div className='col-md-12'>
          <label className='form-label'>Nome Funcionário</label> 
          <input 
              name='nome'
              id='nome' 
              onChange={inputTextHandler}
              type='text' 
              className='form-control'
              value={massagem.nome}    
          /> 
        </div>
        
        <div className='col-md-6'>
          <label className='form-label'>Lotação</label> 
          <input 
              name="lotacao"
              id='lotacao' 
              onChange={inputTextHandler}
              type='text' 
              className='form-control'
              value={massagem.lotacao}
          /> 
        </div>
  
        <div className="col-md-6">
          <label className="form-label">Local</label>
          <select 
              name="local"
              id="local" 
              onChange={inputTextHandler}
              className="form-select"
              value={massagem.local}
          >
            <option defaultValue='0'>Selecione...</option>
            <option value="1">Prédio Administrativo</option>
            <option value="2">BUS</option>
            <option value="3">ZPE</option>
          </select>
        </div>
  
        <div className="col-md-6">
          <label className="form-label">Status da Massagem</label>
          <select 
              name="status"
              id="status"
              onChange={inputTextHandler} 
              value={massagem.status}
              className="form-select">
            
            <option defaultValue='0'>Selecione...</option>
            <option value="1">Disponível</option>
            <option value="2">Reservada</option>    
          </select>
        </div>
  
        <div className='col-md-6'>
          <label className='form-label'>Horário</label> 
          <input 
              name="horario"
              id='horario' 
              onChange={inputTextHandler} 
              value={massagem.horario}
              type='text' 
              className='form-control'/> 
        </div>    
        <hr/>
        <div className='col-12 mt-0'>
          {massagem.id === 0 ? (
              <button 
                className='btn btn-outline-secondary' 
                type="submit"
              >
                  <i className="fas fa-plus me-2"></i>
                  Reservar
            </button>
            ): ( 
            <>
                <button className='btn btn-outline-success me-2' 
                        type="submit"
                >
                        <i className="fas fa-plus me-2"></i>
                            Salvar
                </button>
                <button 
                  className='btn btn-outline-warning' 
                  onClick={handleCancelar}
                >
                    <i className="fas fa-plus me-2"></i>
                    Cancelar
                </button>
            </>
            )  
          }
        
        </div>
       
      </form>
      </>
    );
}




