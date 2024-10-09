import { useRoutes } from 'react-router-dom';
import './App.css';
import { RoutePath } from './route/RoutePath';


export function App() 
{
  const element = useRoutes(
    [
      { path: "/*", element: <RoutePath /> }
    ]
  )
  return element
}
export default App;