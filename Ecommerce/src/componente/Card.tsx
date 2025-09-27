import { useState } from "react";

type Reseña = {
  usuario: string;
  texto: string;
};

type Producto = {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  reseñas: Reseña[];
};

function Card({ producto }: { producto: Producto }) {
  const [mostrarReseñas, setMostrarReseñas] = useState(false);

  return (
    <div className="card">
      <img className="card-image" src={producto.imagen} alt={producto.nombre} />
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>

      {/* Botón para mostrar/ocultar reseñas */}
      <button onClick={() => setMostrarReseñas(!mostrarReseñas)}>
        {mostrarReseñas ? "Ocultar reseñas" : "Ver reseñas"}
      </button>

      {/* Lista de reseñas */}
      {mostrarReseñas && (
        <ul>
          {producto.reseñas.map((r, index) => (
            <li key={index}>
              <strong>{r.usuario}:</strong> {r.texto}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Card;
