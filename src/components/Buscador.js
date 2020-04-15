import React, { Component } from 'react';

class Buscador extends Component {
    //para acceder a lo que el usuario escriva
    busquedaRef = React.createRef();
  
    obtenerDatos =(e)=>{
       
        e.preventDefault();
       
        const termino = this.busquedaRef.current.value

        this.props.datosBusqueda(termino);
        
    }

    render() { 
        return (  
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                   
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Una palabra vale más que mil"/>
                    </div>
                    <div className="form-group col-md-4 ">
                        <input type="submit" className="btn ntn-lg btn-primary btn-block" value="Buscar"
                        />
                     
                    </div>
                </div>
            </form>
        );
    }
}
 
export default Buscador;