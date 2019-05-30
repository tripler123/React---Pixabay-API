import React, { Component } from "react";

class Buscador extends Component {
    busquedaRef = React.createRef();
    obtnerDatos = (e) =>{
        e.preventDefault();
        this.props.datosBusqueda(this.busquedaRef.current.value);
    }
  render() {
    return (
      <form onSubmit={this.obtnerDatos}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              type="text"
              ref = {this.busquedaRef}
              name=""
              id=""
              className="form-control form-control-lg"
              placeholder="Buscar tu Imagen. Ejemplo: Futbol"
            />
          </div>
          <div className="form-group col-md-4">
            <input type="submit" className="btn btn-danger btn-block" value="Buscar..." />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
