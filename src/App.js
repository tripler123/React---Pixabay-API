import React, { Component } from "react";
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";


class App extends Component {
  state = {
    termino: "",
    imagenes: []
  };

  consultarApi = () => {
    const url = `https://pixabay.com/api/?key=7395204-baf2f8d9b18268aea7481d892&q=${
      this.state.termino
    }&per_page=30`;

    fetch(url)
    .then(res => res.json())
    .then(res => this.setState({imagenes: res.hits}) );
  };

  datosBusqueda = termino => {
    this.setState(
      {
        termino: termino
      },
      () => {
        this.consultarApi();
      }
    );
  };
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imagenes</p>
          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <Resultado 
          imagenes = {this.state.imagenes}
        />
      </div>
    );
  }
}

export default App;
