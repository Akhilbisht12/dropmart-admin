import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Users, Payouts } from "./Screens/Index";
import { Header} from "./Components/index";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/payouts">
          <Payouts />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
