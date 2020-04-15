import React,{Component} from 'react';
import Buscador from './components/Buscador'
import Resultado from './components/Resultado';
import Indicador from './components/Indicador';


class App extends Component {
  state={
    termino:'',
    imagenes: [],
    pagina:''
  }
  scroll =()=>{
    const elemento = document.querySelector('.jumbotron')
    elemento.scrollIntoView('smooth','start');
  }
  paginaAnterior = ()=>{
    let pagina=this.state.pagina;
    if(pagina ===1) return null
    pagina-=1;
    this.setState({pagina},()=>{this.consultarApi()
    this.scroll()} )
  }
  paginaSiguiente = ()=>{
    let pagina=this.state.pagina;
    pagina+=1;
    this.setState({pagina},()=>{this.consultarApi()
    this.scroll()})
  }
  consultarApi = ()=>{
    const pagina = this.state.pagina
    const url=`https://pixabay.com/api/?key=12395269-a9cbea12730f3a1e8b7d855ca&q=${this.state.termino}&per_page=10&page=${pagina}`
    fetch(url)
    .then(respuesta=>respuesta.json())
    .then(resultado =>this.setState({imagenes : resultado.hits}))
  }
  datosBusqueda=(termino)=>{
    this.setState({
      termino:termino,
      pagina:1
    },()=>{
      this.consultarApi();
    })
  }
  render() { 
    return (  
      <div className="app container mt-2">
        
      <div className="jumbotron">
     
      <h5 className="text-center ">
            BUSCA TU IMAGEN</h5>
          <Buscador
          datosBusqueda={this.datosBusqueda} />
         
      </div>
      <div className="row justify-content-center">
          <Resultado imagenes={this.state.imagenes}
          paginaAnterior={this.paginaAnterior}
          paginaSiguiente={this.paginaSiguiente}/>
          <Indicador/>
        
      </div>
    </div>
    );
  }
}
 
export default App;