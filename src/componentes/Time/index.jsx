import "./Time.css"
import Colaborador from "../Colaborador"

const Time = (props) => {

    const css = {
        backgroundColor: props.corSecundaria,
    }

    const keyDefine = (colaborador) => {
        return `key${colaborador.nome}+${colaborador.time}`
    }    
/*
    function keyDefine (colaborador) {
        return `key${colaborador.nome}+${colaborador.time}`
    }
*/


    return(
        (props.colaboradores.length>0) ?
        <section className="time" style ={css} >
            <h3 style={{borderColor: props.corPrimaria }}>{props.nome} </h3>

            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador 
                key = {keyDefine(colaborador)}
                colaborador ={colaborador}
                corPrimaria = {props.corPrimaria}
                />)} 
            </div>        
        </section>
        : ''
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

/*
condicional de renderização props.colaboradores.length>0 && ou (props.colaboradores.length>0) &&
ou como operador ternário, caso eu queira uma situação de verdadeiro ou falso

*/