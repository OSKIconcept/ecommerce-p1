import { RouterProvider } from 'react-router-dom'
import routes from './router'

function App() {
  // wrap all providers here
  return <RouterProvider router={routes} />
}

export default App
