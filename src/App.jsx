import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import HomeIndex from "./pages/home/HomeIndex";
import ShopIndex from "./pages/shop/ShopIndex";
import ContactIndex from "./pages/contact/ContactIndex";
import RootLayouts from "./components/layouts/RootLayouts";

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayouts/>}>
    <Route index element={<HomeIndex/>} />
    <Route path="/contact" element={<ContactIndex/>} />
    <Route path="/shop" element={<ShopIndex/>}  />
  </Route>
));

function App() {
  

  return (
    
      <RouterProvider router={router} />
    
  )
}

export default App
