//Componentes: Tienen Propiedades 'props' --> Capacidad de enviar valores "Similar a Parametros"
import Profile from "./Profile"
import Comments from "./Comments"
export default function Post({blogs}){
    return (
        <div>
        <h1 id="tittle-blog">BLOGS</h1>
        {
          blogs.map((valor, indice)=>(
            <div id="container-blog">
                <Profile dataprofile={valor}></Profile>
                <Comments datacomments={valor}></Comments>
            </div>
          ))
        }
      </div>
    )
}