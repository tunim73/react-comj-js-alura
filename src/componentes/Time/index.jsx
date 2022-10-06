import "./Time.css"
import Colaborador from "../Colaborador"

const Time = (props) => {

    const css = {
        backgroundColor: props.corSecundaria,
    }


    return(
        
        <section className="time" style ={css} >
            <h3 style={{borderColor: props.corPrimaria }}>{props.nome} </h3>

            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador
                colaborador ={colaborador}/>)} 
            </div>


            
        </section>
    )
}

export default Time


/*

pode ser usado 'const Time = (props)' e na hora de usar chama props.obj.'a propriedade que quer'

const Time = ({obj}) => { 

    const css = {
        backgroundColor: obj.corSecundaria
    }


    return(
        <section className="time" style ={css} >
            <h3 style={{borderColor: obj.corPrimaria }}>{obj.nome} </h3>
        </section>
    )
}



*/