import "./banner.css"

const Banner = () => {

    return(
        <header className="banner">
            <img src="/assets/banner.png" alt="Banner do organo" />
        </header>            
    )
}
/*
infos:

pasta public no diretório raiz e não usar o caminho de retorno ../../../public/assets/banner.png
a dorma acima não funcionou no deploy da página.


*/



export default Banner