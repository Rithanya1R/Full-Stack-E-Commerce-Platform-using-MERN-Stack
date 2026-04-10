import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ExploreMenu from "./Components/ExploreMenu/ExploreMenu";
import FoodDisplay from "./Components/FoodDisplay/FoodDisplay";
import FoodItem from "./Components/FoodItem/FoodItem";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <ExploreMenu />
      <FoodDisplay />
      <FoodItem />
      <Footer />
    </div>
  );
}


export default App;