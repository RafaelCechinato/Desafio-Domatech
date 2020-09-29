import React from 'react';
import ViaCep from 'react-via-cep';
import { Button, Input } from 'reactstrap';

class PesquisaCep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cep: ""
    }
    this.atribuirCep = this.atribuirCep.bind(this);
  }

  atribuirCep(event) {
    this.setState({ cep: event.target.value });
  }
  

  render() {
    return (
      <div class="d-lg-flex justify-content-around" >
        <div class="align-self-center">
          <ViaCep cep={this.state.cep} lazy>
            {({ data, loading, error, fetch }) => {
              if (loading) {
                return <div class="alert alert-primary" role="alert">
                <h2>Carregando...</h2>
                </div>
              }

              if (data) {
                return <div class="d-lg-flex justify-content-around" >
                    <div class="align-self-center">
                    <h2>Encontrar endereço</h2>
                    <Input type="text" value={this.state.cep} onChange={this.atribuirCep} placeholder="Digite seu CEP aqui:" />
                    <br></br>
                    <Button color="primary" onClick={fetch}>Buscar</Button>
                    <h2>Resultado</h2>
                    <p>
                      Cep: {data.cep} <br />
                      Endereço: {data.logradouro} <br />
                      Bairro: {data.bairro} <br />
                      Cidade: {data.localidade} <br />
                      Estado: {data.uf} <br />
                    </p>
                  </div>
                </div>
              }

              if (error) {
                return <div>
                  <div class="alert alert-danger" role="alert">
                    CEP incorreto
                  </div>
                  <h2>Encontrar endereço</h2>
                  <Input type="text" value={this.state.cep} onChange={this.atribuirCep} placeholder="Digite seu CEP aqui:" />
                  <br></br>
                  <Button color="primary" onClick={fetch}>Buscar</Button>
                  <h2>Resultado</h2>
                </div> 
              }
              return <div class="d-lg-flex justify-content-around" >
                <div class="align-self-center">
                  <h2>Encontrar endereço</h2>
                  <Input type="text" value={this.state.cep} onChange={this.atribuirCep} placeholder="Digite seu CEP aqui:" />
                  <br></br>
                  <Button color="primary"  onClick={fetch}>Buscar</Button>
                  <h2>Resultado</h2>
                </div>
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