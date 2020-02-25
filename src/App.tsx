import React from 'react';
import './App.scss';
import RouterOutlet from './router-nav/RouterOutlet';
import { Route } from './router-nav/Route';
import Dashboard from './pages/dashboard/Dashboard';

const routes: Route[] = [
  { path: '/dashboard', display: 'Dashboard', component: Dashboard }
]

function App() {
  return (
    <div className="container-fluid position-relative">
      <div className="row vh-100">
        <div className="navbar navbar-dark bg-dark h-100 flex-column text-white">
          place holder for nav bar
        </div >
        <div className="col h-100 px-0 overflow-auto">
          <RouterOutlet type="browser" routes={routes} ></RouterOutlet>
        </div>
      </div >
    </div>
  );
}

export default App;
