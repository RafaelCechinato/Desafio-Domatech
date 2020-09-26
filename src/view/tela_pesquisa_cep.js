import React from 'react';
import ViaCep from 'react-via-cep';

class PesquisaCep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: ""
    }
    this.atribuirCep = this.atribuirCep.bind(this);
    this.pesquisarCep = this.pesquisarCep(this);
  }

  atribuirCep(event) {
    this.setState({ cep: event.target.value });
  }

  render() {
    return (
      <div>
        <div >
          <h2>Encontrar endereço</h2>
          <ViaCep cep={this.state.cep} lazy>
            {({ data, loading, error, fetch }) => {
              if (loading) {
                return <p>loading...</p>
              }

              if (data) {
                return <div>
                  <input type="text" value={this.state.cep} onChange={this.atribuirCep} placeholder="Digite seu CEP aqui:" />
                  <br></br>
                  <button onClick={fetch}>Buscar</button>
                  <h1>Resultado</h1>
                  <p>
                    Cep: {data.cep} <br />
                    Endereço: {data.logradouro} <br />
                    Bairro: {data.bairro} <br />
                    Cidade: {data.localidade} <br />
                    Estado: {data.uf} <br />
                  </p>
                </div>
              }

              if (error) {
                return <p>error</p>
              }
              return <div>
                <input type="text" value={this.state.cep} onChange={this.atribuirCep} placeholder="Digite seu CEP aqui:" />
                <br></br>
                <button onClick={fetch}>Buscar</button>
                <h1>Resultado</h1>
              </div>
            }
            }
          </ViaCep>

        </div>
      </div>
    );
  }

}


export default PesquisaCep;