import Header from "./Header";
// import SliderImage from './SliderImage';
import Cardslider from "./CardSlider";
import SecCardSlider from "./SecCardSlider";
import MovieRecomenderSlider from "./MovieRecomenderSlider";
import Footer from "./Footer";
import AllMovies from "./AllMovies";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import {Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/movies">
            <AllMovies />
          </Route>

          <Route exact path="/">
            <MovieRecomenderSlider />
            <div className="BottomImg"style={{ paddingBottom: "30px", paddingLeft: "250px" }}>
              <img src="./assets/premierbottom.png" />
            </div>
            <Cardslider />
            <SecCardSlider />
            <MovieRecomenderSlider />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
