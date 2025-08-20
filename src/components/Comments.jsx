import Answers from "./Answers"
export default function Comments({datacomments}){
    return (
        <section id="section-Comentarios">
            <h3>Comentarios: </h3>
            {
                datacomments.comentarios.length > 0 ? (
                    datacomments.comentarios.map((vc)=>(
                    <div id="Container-Comentarios">
                        <h4>Usuario: {vc.usuario}</h4>
                        <p>Comentario: {vc.texto}</p>
                        <Answers dataAnswers={vc}></Answers>
                    </div>
                ))
                )
                :   <div id="Container-Comentarios">
                        <h1>No Existen Comentarios</h1>
                    </div>
            }
        </section>
    )
}