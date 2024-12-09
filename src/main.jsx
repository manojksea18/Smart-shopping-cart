
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Sidebar from './Sidebar.jsx'

ReactDOM.render(
  <BrowserRouter>
    <Sidebar/>
  </BrowserRouter>,
  document.getElementById('root')
)