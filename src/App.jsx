
import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements, 
  Route } from "react-router-dom"
import Layout from "./components/Layout"

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
      
      </Route>
    </Route>
))

  return (
    <RouterProvider router={routes} />
  )
}

export default App
