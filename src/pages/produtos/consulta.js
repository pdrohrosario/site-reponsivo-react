import React from 'react';
import Navbar from '../../components/navbar2';

import Card from '../../components/card.js';
import ProdutosTable from './produtosTable.js';
import Footer2 from '../../components/footer2'

import ProdutoService from '../../app/produtoService';
import {withRouter} from 'react-router-dom';

class ConsultaProdutos extends React.Component{
  
  state = {
    produtos : []
  }

  constructor(){
    super()
    this.service = new ProdutoService();
  }

  componentDidMount(){
    const produtos = this.service.obterProdutos();
    this.setState({produtos})
  }
  
  preparaEditar = (sku) =>{
      this.props.history.push(`/cadastro-produtos/${sku}`)
      console.log('sku para editar: ' ,sku )
  }

  deletar = (sku) =>{
    const produtos = this.service.deletar(sku)
    this.setState({produtos: produtos})
  }
  render(){
    return(
      <div>
        <Navbar />
       
        <Card header="Consulta Produtos">
          <ProdutosTable produtos={this.state.produtos}
                        editarAction={this.preparaEditar}
                        deletarAction={this.deletar}
          />
        </Card>
        <Footer2 />
        
      </div>
    )
  }
}

export default withRouter(ConsultaProdutos);