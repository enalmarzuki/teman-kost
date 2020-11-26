import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../../config/redux";

import LandingPage from "../LandingPage";

// Style
import "../../../assests/scss/style.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/" exact component={LandingPage} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
