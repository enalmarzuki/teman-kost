import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../config/redux";

import LandingPage from "../LandingPage";
import DetailPage from "../DetailPage";

// Style
import "../../../assests/scss/style.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/" exact component={LandingPage} />
          <Route path="/detail-kost/:id" component={DetailPage} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
