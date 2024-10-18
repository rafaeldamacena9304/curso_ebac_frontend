import styles from './global.module.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { AddContatoPage } from './pages/AddContatoPage'


const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: 'adicionar_contato',
    element: <AddContatoPage/>
  }
])

function App() {
  return (
   <div className={styles.container}>
      <RouterProvider router={rotas}/>
   </div>
  );
}

export default App;
