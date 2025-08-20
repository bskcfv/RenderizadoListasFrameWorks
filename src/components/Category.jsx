export default function Category({data}){
    return (
        <div id="container-categorias">
                <h3>Categorias: </h3>
                {
                  data.categorias.map((ValorCategoria)=>(
                    <ul>
                        <li> - {ValorCategoria}</li>
                    </ul>
                  ))
                }
        </div>
    )
}