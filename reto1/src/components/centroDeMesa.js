import React from 'react';
import Flor from './Flor';

class centroDeMesa extends React.Component {
    render(){
        return(
             <div className="centro--mesa"> 
                <div className="centro--mesa_item100">
                <Flor/>                      
                </div>

                <div className="centro--mesa_item70">
                <Flor/>  
                <Flor/>    
                </div> 
                  


             </div> 

        );
    }
}

export default centroDeMesa;