import OS from "./Components/private-office.jpg";
import "./App.css"

function App() {

  const heading = "Office Space";
  const img = <img src={OS} height="25%" width="25%" alt="Office Space" />
  const Office = { name: "DBS", rent: 50000, address: "Chennai" };
  const colors = (Office.rent <= 60000) ? { color: "red" } : { color: "green" };

  return (
    <div className="App">
      <h1>{heading}, at Affordable Range</h1>
      {img}
      <h1>Name: {Office.name}</h1>
      <h3 style={colors}>Rent: Rs.{Office.rent}</h3>
      <h3>Address: {Office.address}</h3>
    </div>
  );
}

export default App;