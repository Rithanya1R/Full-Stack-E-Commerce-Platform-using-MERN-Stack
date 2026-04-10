import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ExploreMenu from "./Components/ExploreMenu/ExploreMenu";
import FoodDisplay from "./Components/FoodDisplay/FoodDisplay";
import FoodItem from "./Components/FoodItem/FoodItem";

function App() {
  return (
    <div>
      <Navbar />
      <ExploreMenu />
      <FoodDisplay />
      <FoodItem />
      <Footer />
    </div>
  );
}

export default App;