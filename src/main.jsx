
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Sidebar from './Sidebar.jsx'
import Dashboard from './Dashboard.jsx';

ReactDOM.render(
  <BrowserRouter>
    {/* <Sidebar/> */}
    <Dashboard/>
  </BrowserRouter>,
  document.getElementById('root')
)