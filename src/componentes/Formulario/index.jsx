import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import { useState } from "react"

const Formulario = () => {

    const times = [
        "Programação", 
        "Front-end",
        "Data Science"
    ]

    const[nome,setNome]=useState('');
    const[cargo,setCargo]=useState('');
    const[imagem, setImagem]=useState('');
    const[time, setTime]=useState('')
    
    const aoSalvar  = (event)=>{
        event.preventDefault();
        console.log(`Form submetido: ${nome}, ${cargo}, ${imagem},  ${time}`);
        console.log("Form submetido:", nome, cargo, imagem, time);
    }


    return(
            <section className="formulario"  >               
               <form onSubmit={aoSalvar}>
                   <h2 className="">Preencha os dados para criar o card do colaborador</h2> 
                   <CampoTexto 
                   obrigatorio = {true} label ="Nome" 
                   placeholder = "Digite seu nome"
                   valor = {nome}
                   valorAlterado = {valor => setNome(valor)}
                   />
                   
                   <CampoTexto 
                   obrigatorio = {true} 
                   label ="Cargo" 
                   placeholder = "Digite seu cargo"
                   valor = {cargo}
                   valorAlterado = {valor => setCargo(valor)}/>
                   <CampoTexto 
                   label ="Imagem" 
                   placeholder = "Digite a URL da imagem"
                   valor = {imagem}
                   valorAlterado = {valor => setImagem(valor)}
                   />
                   <ListaSuspensa 
                   obrigatorio = {true} 
                   label ="Time" 
                   itens = {times} 
                   valor = {time}
                   valorAlterado = {valor => setTime(valor)}
                   />
                   <Botao>
                        criar card
                   </Botao>


               </form>
           </section>
        
    )
}

export default Formulario