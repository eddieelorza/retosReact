import React from 'react';
import Plato from './Plato';
import Cubierto from './Cubierto';
class Mantel extends React.Component {
    render(){
        return(
             <div className="mantel"> 
             <Cubierto/>    
              <Plato/>
              <Cubierto/>
             </div>
        );
    }
}

export default Mantel;