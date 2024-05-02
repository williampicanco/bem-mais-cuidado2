import React from 'react'
import Massagem from './Massagem';

export default function MassagemLista(props) {
  return (
    <div className="mt-3">        
            {props.massagens.map((mas) => (        
                <Massagem 
                  key={mas.id}
                  mas={mas}
                  deletarMassagem={props.deletarMassagem}  
                  pegarMassagem={props.pegarMassagem}
                />
            ))}       
    </div>
  )
}
