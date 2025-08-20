export default function Answers({dataAnswers}){
    return(
        <section id="section-respuestas">
            <h3>Respuestas: </h3>
            {
                dataAnswers.respuestas.map((vre)=>(
                    <div id="container-respuestas">
                        <h5>{vre.usuario}</h5>
                        <p>{vre.texto}</p>
                        <section id="section-reacciones">
                            <h3>Reacciones: </h3>
                            {
                                vre.reacciones.map((vra)=>(
                                    <div id="container-reacciones">
                                        <h5>Reaccion: {vra.tipo}</h5>
                                        <h6>User: {vra.usuario.nombre}</h6>
                                        <h6>Rol: {vra.usuario.rol}</h6>
                                    </div>
                                ))
                            }
                        </section>
                    </div>
                ))
            }
        </section>
    )
}