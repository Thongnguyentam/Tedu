import React from 'react';
import './App.css';
import Navbar from './pages/Navbar';
import Banner from './pages/Banner';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Banner_MO from './pages/Banner_MO';
import Banner_EO from './pages/Banner_EO';
import Banner_G from './pages/Banner_G';
import Banner_IC from './pages/Banner_IC';
import WMenu from './pages/WMenu';
import EMenu from './pages/EMenu';
import GMenu from './pages/GMenu';
import CMenu from './pages/CMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import W1 from './pages/W1';
import W2 from './pages/W2';
import W3 from './pages/W3';
import W4 from './pages/W4';
import W5 from './pages/W5';
import W6 from './pages/W6';
import W7 from './pages/W7';
import W8 from './pages/W8';
import W9 from './pages/W9';
import W10 from './pages/W10';
import W11 from './pages/W11';
import W12 from './pages/W12';
import E1 from './pages/E1';
import E2 from './pages/E2';
import E3 from './pages/E3';
import E4 from './pages/E4';
import E5 from './pages/E5';
import E6 from './pages/E6';
import E7 from './pages/E7';
import E8 from './pages/E8';
import E9 from './pages/E9';
import E10 from './pages/E10';
import E11 from './pages/E11';
import E12 from './pages/E12';
import C1 from './pages/C1';
import C2 from './pages/C2';
import C3 from './pages/C3';
import C4 from './pages/C4';
function App() {
  return (
      <Router>
          <Navbar />
          <Switch>
              <Route path="/" exact component={Banner} />
              <Route path="/MO" exact component={Banner_MO} />
              <Route path="/EO" exact component={Banner_EO} />
              <Route path="/G" exact component={Banner_G} />
              <Route path="/C" exact component={Banner_IC} />
              <Route path="/W1" exact component={Banner_MO} />
              <Route path="/W2" exact component={Banner_MO} />
              <Route path="/W3" exact component={Banner_MO} />
              <Route path="/W4" exact component={Banner_MO} />
              <Route path="/W5" exact component={Banner_MO} />
              <Route path="/W6" exact component={Banner_MO} />
              <Route path="/W7" exact component={Banner_MO} />
              <Route path="/W8" exact component={Banner_MO} />
              <Route path="/W9" exact component={Banner_MO} />
              <Route path="/W10" exact component={Banner_MO} />
              <Route path="/W11" exact component={Banner_MO} />
              <Route path="/W12" exact component={Banner_MO} />
              <Route path="/E1" exact component={Banner_EO} />
              <Route path="/E2" exact component={Banner_EO} />
              <Route path="/E3" exact component={Banner_EO} />
              <Route path="/E4" exact component={Banner_EO} />
              <Route path="/E5" exact component={Banner_EO} />
              <Route path="/E6" exact component={Banner_EO} />
              <Route path="/E7" exact component={Banner_EO} />
              <Route path="/E8" exact component={Banner_EO} />
              <Route path="/E9" exact component={Banner_EO} />
              <Route path="/E10" exact component={Banner_EO} />
              <Route path="/E11" exact component={Banner_EO} />
              <Route path="/E12" exact component={Banner_EO} />
              <Route path="/C1" exact component={Banner_IC} />
              <Route path="/C2" exact component={Banner_IC} />
              <Route path="/C3" exact component={Banner_IC} />
              <Route path="/C4" exact component={Banner_IC} />

          </Switch>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/MO" exact component={WMenu} />
              <Route path="/EO" exact component={EMenu} />
              <Route path="/G" exact component={GMenu} />
              <Route path="/C" exact component={CMenu} />
              <Route path="/W1" exact component={W1} />
              <Route path="/W2" exact component={W2} />
              <Route path="/W3" exact component={W3} />
              <Route path="/W4" exact component={W4} />
              <Route path="/W5" exact component={W5} />
              <Route path="/W6" exact component={W6} />
              <Route path="/W7" exact component={W7} />
              <Route path="/W8" exact component={W8} />
              <Route path="/W9" exact component={W9} />
              <Route path="/W10" exact component={W10} />
              <Route path="/W11" exact component={W11} />
              <Route path="/W12" exact component={W12} />
              <Route path="/E1" exact component={E1} />
              <Route path="/E2" exact component={E2} />
              <Route path="/E3" exact component={E3} />
              <Route path="/E4" exact component={E4} />
              <Route path="/E5" exact component={E5} />
              <Route path="/E6" exact component={E6} />
              <Route path="/E7" exact component={E7} />
              <Route path="/E8" exact component={E8} />
              <Route path="/E9" exact component={E9} />
              <Route path="/E10" exact component={E10} />
              <Route path="/E11" exact component={E11} />
              <Route path="/E12" exact component={E12} />
              <Route path="/C1" exact component={C1} />
              <Route path="/C2" exact component={C2} />
              <Route path="/C3" exact component={C3} />
              <Route path="/C4" exact component={C4} />

          </Switch>
      </Router>
  );
}

export default App;
