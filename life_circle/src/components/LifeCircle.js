import { React, Component } from "react";


class LifeCircle extends Component{
    constructor(props){
        super(props); //método super que extende o construtor de Components
        
        //métodos state deve ser chamado dentro do método construtor
        this.state = {
            nome: "José",
            idade: 30,
            altura: props.altura
        }
        console.log("1º ativa-se o método construtor");
    }
    //método menos usual, geralmente, usado quando se necessita de algo especifico do state e props
    static getDerivedStateFromProps(props, state){
        console.log('executando o getDerivedStateFromProps...');

        return null; //caso nao seja nulo, ele retorna para props o valor mencionado
    }
//método onde se faz AJAX e requisicoes a apis externas.Ele é chamado, após a alteração no DOM
    componentDidMount(){
        console.log("...último método componentDidMount, chamado para AJAX");
}   
    //método que verifica se o componente deve ou nao ser atualizado
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate ...")
        console.log("estado atual: " + this.state);
        console.log("próximo estado: " + this.nextState);
        return true; //se false, nao atualiza
    }








 adicionar_idade = () => {
     let contador = this.state.idade;
     console.log(contador)
     contador ++;
     console.log(contador)
     this.setState({idade : contador});

    }
    render(){
        console.log('renderizando o jsx, corpo da classe');
        return (
        <div>
            <h1>Hello, world!</h1>
            <div>bem vindo!</div>
            <p>idade:  {this.state.idade}</p>
            <p>nome:  {this.state.nome}</p>
            <p>altura:  {this.state.altura}</p>
            <button onClick={this.adicionar_idade}>
                Adicionar
            </button>
        </div>

    )
    }
}

export default LifeCircle;