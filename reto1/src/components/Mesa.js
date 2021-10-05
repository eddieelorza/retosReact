import React from 'react';
import Mantel1 from './MantelesFilaDeTres';
import Mantel2 from './MantelesFilaDeDos';
import Centro from './centroDeMesa';




class Mesa extends React.Component {
    render(){
        return(
             <section className="principal">
                 <section className="mesa">
                  <Mantel1/>
                  <Centro/>
                  <Mantel2/>
                 </section> 
             </section>
            
        );
    }
}

export default Mesa;