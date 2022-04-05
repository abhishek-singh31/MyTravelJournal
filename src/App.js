import Card from "./components/Card";
import data from "./data"
import Navbar from "./components/Navbar"
export default function App() {
  const cardItems = data.map(elements =>
    <Card item={elements}/>
  )
  return (
    <div>
      <Navbar/>
      <div className="card-container">
        {cardItems}
      </div>
    </div>
  );
}

