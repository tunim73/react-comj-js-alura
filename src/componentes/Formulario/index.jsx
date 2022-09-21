import "./Formulario.css"
import CampoTexto from "../CampoTexto"

const Formulario = () => {
    return(
 
            <section className="formulario"  >               
               <form>
                   <h2 className="">Preencha os dados para criar o card do colaborador</h2> 
                   <CampoTexto label ="Nome" placeholder = "Digite seu nome"/>
                   <CampoTexto label ="Cargo" placeholder = "Digite seu cargo"/>
                   <CampoTexto label ="Imagem" placeholder = "Digite a URL da imagem"/>
               </form>
           </section>
        
    )
}

export default Formulario