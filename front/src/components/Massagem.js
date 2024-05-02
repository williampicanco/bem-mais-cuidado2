import React from "react";

export default function Massagem(props){
    function localLabel(param){
        switch(param){
          case '1':
            return 'Prédio Adm';
          case '2':
            return 'BUS';
          case '3':
            return 'ZPE';
          default:
            return 'Não definido';
        }
       }
    
       function statusLabel(param){
        switch(param){
          case '1':
            return 'Disponível';
          case '2':
            return 'Reservada';
          default:
            return 'Não definido';
    
        }
       }
    
       function statusStyle(param, icone){
        switch(param){
          case '1':
            return icone ? 'circle' : 'success';
          case '2':
            return icone ? 'circle' : 'danger';
          default:
            return 'Não definido';
        }
       }

return(
    <div className='card mb-2 shadow-sm'>         
    <div className="card-body">
      <div className="d-flex justify-content-between">
        <h5 className="card-title">
        <span className="badge bg-secondary me-1">{props.mas.id}</span>
          - {props.mas.nome} 
        </h5>
        <h6> 
            Status:
            <span className={'ms-1 text-' + statusStyle(props.mas.status)}>
              <i className={"me-1 fa-solid fa-"+ statusStyle(props.mas.status, true)}></i>
              {statusLabel(props.mas.status)}
            </span>       
        </h6>
      </div> 
      <p className='card-text'>
         {props.mas.lotacao} - {localLabel(props.mas.local)} - {props.mas.horario}
      </p> 
      <div className="d-flex justify-content-end pt-2 m-0 border-top">
      <button 
            className='btn btn-sm btn-outline-primary me-2'
            onClick={() => props.pegarMassagem(props.mas.id)}
      >
           <i className='fas fa-pen me-2'></i>
           Editar
      </button>
      <button 
          className='btn btn-sm btn-outline-danger' 
          onClick={() => props.deletarMassagem(props.mas.id)}>
           <i className='fas fa-trash me-2'></i>
           Excluir
      </button>
      </div>

    </div>
  </div>
)

}