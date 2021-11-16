import logo from './logo.svg';
import 'styles/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Registro from 'pages/Registro';
import Admin from 'pages/admin/Index';
import Login from 'pages/Login';
import Index from 'pages/Index';
import PublicLayout from 'layouts/PublicLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import AuthLayout from 'layouts/AuthLayout';
import Clientes from 'pages/admin/Clientes';
import Vehiculos from 'pages/admin/Vehiculos';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/admin','/admin/vehiculos', '/admin/clientes']}>
          <PrivateLayout>
            <Switch>
            <Route path='/admin/vehiculos'>
                <Vehiculos/>
              </Route>
              <Route path='/admin/clientes'>
                <Clientes/>
              </Route>
              <Route path='/admin'>
                <Admin/>
              </Route>              
            </Switch>
          </PrivateLayout>
        </Route>
        <Route path={['/login', '/registro']}>
          <AuthLayout>
            <Switch>
              <Route path='/login'>
                <Login/>
              </Route>
              <Route path='/registro'>
                <Registro/>
              </Route>
            </Switch>
          </AuthLayout>
        </Route>
        <Route path={['/']}>
          <PublicLayout>
          <Switch>
            <Route path='/'>
              <Index/>
            </Route>
          </Switch>
          </PublicLayout>          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
