import productos from "./productos.json";
import Card from "./componente/card";

function App() {
  return (
    <div className="container">
      {productos.map((p) => (
        <Card key={p.id} producto={p} />
      ))}
    </div>
  );
}

export default App;
