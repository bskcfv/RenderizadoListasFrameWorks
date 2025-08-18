import Image from "next/image";

export default function Home() {

  //Me mata el Css, Una Disculpa por usar IA en los Estilos
  
  //Ejercicio 1 – Lista de productos con categorías
  const productos = [
      { id: 1, nombre: "Camiseta", precio: 25, categoria: { id: 1, nombre: "Ropa" } },
      { id: 2, nombre: "Zapatos deportivos", precio: 60, categoria: { id: 2, nombre: "Calzado" }
      },
      { id: 3, nombre: "Gorra", precio: 15, categoria: { id: 1, nombre: "Ropa" } },
      { id: 4, nombre: "Pantalón", precio: 40, categoria: { id: 1, nombre: "Ropa" } },
      { id: 5, nombre: "Bolso", precio: 30, categoria: { id: 3, nombre: "Accesorios" } },
  ];

  //Ejercicio 2 – Lista de usuarios con direcciones
  const usuarios = [
    { id: 1, nombre: "Ana", direccion: { calle: "Calle 10", ciudad: "Bogotá", pais: "Colombia"
    } },
    { id: 2, nombre: "Luis", direccion: { calle: "Av. Reforma", ciudad: "Ciudad de México",
    pais: "México" } },
    { id: 3, nombre: "Marta", direccion: { calle: "Gran Vía", ciudad: "Madrid", pais: "España"
    } },
    { id: 4, nombre: "John", direccion: { calle: "Main St", ciudad: "New York", pais: "USA" }
    },
    { id: 5, nombre: "Pedro", direccion: { calle: "Rua Augusta", ciudad: "Lisboa", pais:
    "Portugal" } },
  ];

  //Ejercicio 3 - Lista de cursos con módulos
  const cursos = [
    { id: 1, nombre: "React", modulos: [{ nombre: "Componentes" }, { nombre: "Hooks" }] },
    { id: 2, nombre: "Next.js", modulos: [{ nombre: "SSR" }, { nombre: "Static Props" }] },
    { id: 3, nombre: "Node.js", modulos: [{ nombre: "Express" }, { nombre: "Middlewares" }]
    },
    { id: 4, nombre: "Django", modulos: [{ nombre: "Modelos" }, { nombre: "Templates" }] },
    { id: 5, nombre: "Flutter", modulos: [{ nombre: "Widgets" }, { nombre: "StateManagement" }] },
  ];

  //Ejercicio 4 – Lista de pedidos con productos
  const pedidos = [
    { id: 1, cliente: "Ana", productos: [{ nombre: "Camiseta", cantidad: 2 }, { nombre:
    "Gorra", cantidad: 1 }] },
    { id: 2, cliente: "Luis", productos: [{ nombre: "Zapatos", cantidad: 1 }, { nombre:
    "Bolso", cantidad: 2 }] },
    { id: 3, cliente: "Marta", productos: [{ nombre: "Pantalón", cantidad: 3 }] },
    { id: 4, cliente: "John", productos: [{ nombre: "Sudadera", cantidad: 1 }, { nombre:
    "Gorra", cantidad: 2 }] },
    { id: 5, cliente: "Pedro", productos: [{ nombre: "Camiseta", cantidad: 5 }] },
  ];

  //Ejercicio 5 – Lista de blogs con estructura de datos profundamente anidada
  const blogs = [
  {
    id: 1,
    titulo: "Aprendiendo React",
    autor: { nombre: "Ana", pais: "Colombia" },
    categorias: ["JavaScript", "Frontend"],
    comentarios: [
      {
        usuario: "Luis",
        texto: "Muy útil",
        respuestas: [
          {
            usuario: "Marta",
            texto: "Totalmente de acuerdo",
            reacciones: [
              { tipo: "like", usuario: { nombre: "Pedro", rol: "Estudiante" } },
              { tipo: "love", usuario: { nombre: "John", rol: "Desarrollador" } }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    titulo: "Next.js SSR",
    autor: { nombre: "Luis", pais: "México" },
    categorias: ["JavaScript", "SSR"],
    comentarios: [
      {
        usuario: "Marta",
        texto: "Interesante",
        respuestas: [
          {
            usuario: "Ana",
            texto: "Lo probaré",
            reacciones: [
              { tipo: "like", usuario: { nombre: "Luis", rol: "Frontend Dev" } }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    titulo: "Node.js API",
    autor: { nombre: "John", pais: "USA" },
    categorias: ["Backend", "API"],
    comentarios: [
      {
        usuario: "Pedro",
        texto: "Me sirvió mucho",
        respuestas: [
          {
            usuario: "Luis",
            texto: "Gracias por compartir",
            reacciones: [
              { tipo: "clap", usuario: { nombre: "Ana", rol: "Fullstack Dev" } }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    titulo: "Django ORM",
    autor: { nombre: "Marta", pais: "España" },
    categorias: ["Backend", "Python"],
    comentarios: [
      {
        usuario: "Ana",
        texto: "Claro y conciso",
        respuestas: [
          {
            usuario: "John",
            texto: "Lo usaré en mi proyecto",
            reacciones: [
              { tipo: "like", usuario: { nombre: "Luis", rol: "Backend Dev" } }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    titulo: "Flutter Widgets",
    autor: { nombre: "Pedro", pais: "Portugal" },
    categorias: ["Mobile", "UI"],
    comentarios: [
      {
        usuario: "Luis",
        texto: "Genial explicación",
        respuestas: [
          {
            usuario: "Marta",
            texto: "Muy claro todo",
            reacciones: [
              { tipo: "love", usuario: { nombre: "Ana", rol: "UI Designer" } }
            ]
          }
        ]
      }
    ]
  }
];





  return (
    <div>

      <table id="tableejercicio1">
        <tr id="atributos1">
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoria</th>
        </tr>
        {
          productos.map((valor, indice)=>(
            <tr id="data1">
              <td>{valor.nombre}</td>
              <td>{valor.precio}</td>
              <td>{valor.categoria.nombre}</td>
            </tr>
          ))
        }
      </table>

      <ul id="listaejercicio2">
        {
          usuarios.map((valor, indice)=>(
            <li id="datalistaejer2">Nombre: {valor.nombre} Direccion: {valor.direccion.calle} - {valor.direccion.ciudad} - {valor.direccion.pais}</li>
          ))
        }
      </ul>

      <ol id="listaejercicio3">
        {
          cursos.map((valor, indice)=>(
            <li id="datalistaejer3">Curso: {valor.nombre} Modulos: {valor.modulos.map(m => m.nombre).join(" / ")}</li>
          ))
        }
      </ol>

      <table id="tablaejercicio4">
        <tr id="tablaatributos">
          <th>Nombre</th>
          <th>Detalles Pedido</th>
        </tr>
        {
          pedidos.map((valor, indice)=>(
            <tr id="tabladatos">
              <td>{valor.cliente}</td>
              <td>
                {
                  valor.productos.map((detalles)=>(
                      <ul id="datalista">
                        <li id="datafromlista"> Producto: {detalles.nombre} Cantidad: {detalles.cantidad}</li>
                      </ul>
                  ))
                }
                </td>
            </tr>
          ))
        }
      </table>


      <div>
        <h1 id="tittle-blog">BLOGS</h1>
        {
          blogs.map((valor, indice)=>(
            <div id="container-blog">
              <h2>° Titulo: {valor.titulo}</h2>
              <h3>° Autor: {valor.autor.nombre}</h3>
              <h3>° De: {valor.autor.pais}</h3>
              <div id="container-categorias">
                <h3>Categorias: </h3>
                {
                  valor.categorias.map((ValorCategoria)=>(
                    <ul>
                      <li> - {ValorCategoria}</li>
                    </ul>
                  ))
                }
              </div>
              <section id="section-Comentarios">
                <h3>Comentarios: </h3>
                {
                  valor.comentarios.map((vc)=>(
                    <div id="Container-Comentarios">
                      <h4>Usuario: {vc.usuario}</h4>
                      <p>Comentario: {vc.texto}</p>
                      <section id="section-respuestas">
                        <h3>Respuestas: </h3>
                        {
                          vc.respuestas.map((vre)=>(
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
                    </div>
                  ))
                }
              </section>
            </div>
          ))
        }
      </div>




      
   
    </div>
  );
}