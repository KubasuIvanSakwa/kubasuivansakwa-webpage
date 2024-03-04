
import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements, 
  Route } from "react-router-dom"
import Layout from "./components/Layout"
import Description from "./components/Description"
import Pages from "./components/Pages"

function App() {

  const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Pages />} />
        <Route path="/description/:idno" element={<Description />} />
      </Route>
    </Route>
))

  return (
    <RouterProvider router={routes} />
  )
}

export default App
