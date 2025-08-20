export default function Reactions({dataReactions}){
    return(
        <section id="section-reacciones">
            <h3>Reacciones: </h3>
            {
                dataReactions.reacciones.map((vra)=>(
                    <div id="container-reacciones">
                        <h5>Reaccion: {vra.tipo}</h5>
                        <h6>User: {vra.usuario.nombre}</h6>
                        <h6>Rol: {vra.usuario.rol}</h6>
                    </div>
                ))
            }
        </section>
    )
}