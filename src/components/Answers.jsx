import Reactions from "./Reactions"
export default function Answers({dataAnswers}){
    return(
        <section id="section-respuestas">
            <h3>Respuestas: </h3>
            {
                dataAnswers.respuestas.map((vre)=>(
                    <div id="container-respuestas">
                        <h5>{vre.usuario}</h5>
                        <p>{vre.texto}</p>
                        <Reactions dataReactions={vre}></Reactions>
                    </div>
                ))
            }
        </section>
    )
}