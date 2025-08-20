import Category from "./Category"
export default function Profile({dataprofile}){
    return(
        <div id="container-profile">
            <h2>° Titulo: {dataprofile.titulo}</h2>
            <h3>° Autor: {dataprofile.autor.nombre}</h3>
            <h3>° De: {dataprofile.autor.pais}</h3>
            <h3>Categorias: </h3>
            <Category data={dataprofile}></Category>
        </div>
    )
}