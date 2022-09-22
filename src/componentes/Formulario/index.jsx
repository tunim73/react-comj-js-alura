import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"

const Formulario = () => {

    const times = [
        "Programação", 
        "Front-end",
        "Data Science"
    ]

    const aoSalvar  = (event)=>{
        event.preventDefault();
        
    }


    return(
            <section className="formulario"  >               
               <form onSubmit={aoSalvar}>
                   <h2 className="">Preencha os dados para criar o card do colaborador</h2> 
                   <CampoTexto obrigatorio = {true} label ="Nome" placeholder = "Digite seu nome"/>
                   <CampoTexto obrigatorio = {true} label ="Cargo" placeholder = "Digite seu cargo"/>
                   <CampoTexto label ="Imagem" placeholder = "Digite a URL da imagem"/>
                   <ListaSuspensa obrigatorio = {true} label ="Time" itens = {times} />
                   <Botao>
                        criar card
                   </Botao>


               </form>
           </section>
        
    )
}

export default Formulario