import Image from "next/image";
import Post from "@/components/Post";

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
    active: true,
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
    active:false,
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
    active:true,
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
    active:false,
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
    active:true,
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
        <thead id="atributos1">
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoria</th>
          </tr>
        </thead>
        <tbody>
        {
          productos.map((valor, indice)=>(
            <tr key={valor.id} id="data1">
              <td>{valor.nombre}</td>
              <td>{valor.precio}</td>
              <td>{valor.categoria.nombre}</td>
            </tr>
          ))
        }
        </tbody>
      </table>

      <ul id="listaejercicio2">
        {
          usuarios.map((valor, indice)=>(
            <li key={valor.id} id="datalistaejer2">Nombre: {valor.nombre} Direccion: {valor.direccion.calle} - {valor.direccion.ciudad} - {valor.direccion.pais}</li>
          ))
        }
      </ul>

      <ol id="listaejercicio3">
        {
          cursos.map((valor, indice)=>(
            <li key={valor.id} id="datalistaejer3">Curso: {valor.nombre} Modulos: {valor.modulos.map(m => m.nombre).join(" / ")}</li>
          ))
        }
      </ol>

      <table id="tablaejercicio4">
        <thead>
          <tr id="tablaatributos">
            <th>Nombre</th>
            <th>Detalles Pedido</th>
          </tr>
        </thead>
        <tbody>
        {
          pedidos.map((valor, indice)=>(
            <tr key={valor.id} id="tabladatos">
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
        </tbody>
      </table>

      {/*Dos formas de Llamado del Componente*/}
      <Post blogs={blogs}></Post>
      
    </div>
  );
}