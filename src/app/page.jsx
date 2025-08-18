import Image from "next/image";

export default function Home() {
  const name = "Cristian";
  const nums = [1,2,3,4,5];
  const diccionario = [
    {'nombre':'cristian', 
      'apellido':'valderrama', 
      'edad':18}, 
    {'nombre':'Paula', 
      'apellido':'Barbosa', 
      'edad':19},
      {'nombre':'Juan', 
      'apellido':'Cardenas', 
      'edad':17}
  ];

  const animales = [
    {
      'nombre':'Leia',
      'raza':'Perro',
      'categoria':{
        'nombre':'Coker',
        'calificacion':4
      }
    },
    {
      'nombre':'Kira',
      'raza':'Gato',
      'categoria':{
        'nombre':'Persa',
        'calificacion':5
      }
    },
    {
      'nombre':'Max',
      'raza':'Perro',
      'categoria':{
        'nombre':'Salchica',
        'calificacion':3
      }
    }
  ];

  const productos = [
    {
      'nombre':'Shampoo',
      'Categoria':'limpieza',
      'detalles':{
        'Color':'Azul',
        'Marca':'H&S',
        'Cantidad': {
          'ml':300
        },
        'peso':{
          'gr':350.5
        }
      }
    },
    {
      'nombre':'Papas',
      'Categoria':'Alimento',
      'detalles':{
        'Color':'Naranja',
        'Marca':'Ricas',
        'Cantidad': {
          'gr':350
        },
        'peso':{
          'gr':360
        }
      }
    },
  ]

  //CallBack -> Funcion dentro de una funcion principal, en este caso el Callback, muestra los valores del array, mientras que el .map  va iterando el array
  const personas = ['Cristian', 'Juan', 'Paula', 'Cardenas', 'German'];

  return (
    <div>
      <p>Hola </p>
      <h1 className="text-blue-400">{name}</h1>
      {nums.map((valor, indice)=>(
        <div>
          <h1 key={indice}> Value: {valor} Indice: {indice}</h1>
        </div>
      ))}
      {
        personas.map((valor, indice)=>(
          <div>
            <h1 className="text-blue-950">Nombre: {valor} </h1>
          </div>
        ))
      }
      {
        diccionario.map((valor, indice)=>(
          <div>
            <h1>{valor.nombre} {valor.apellido} - Edad: {valor.edad}</h1>
          </div>
        ))
      }
      {
        animales.map((valor, indice)=>(
          <div>
            <h1>Nombre: {valor.nombre}</h1>
            <h1>Animal: {valor.raza}</h1>
            <h1>Raza: {valor.categoria.nombre}</h1>
            <h1>Calificacion: {valor.categoria.calificacion}</h1>
          </div>
        ))
      }
      {
        <div>
          <h1 className="text-fuchsia-900">Producto: {productos[0].nombre} Categoria: {productos[0].Categoria} Marca: {productos[0].detalles.Marca} Cantidad Neto: {productos[0].detalles.peso.gr}gr</h1>
        </div>
      }
    </div>
  );
}