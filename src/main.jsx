import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import TokenProvider from './context/TokenProvider.jsx'
import BusquedaProductos from './assets/useSearchParams.jsx'
import InputFocus from './assets/useRef.jsx'
import DogBreedsList from './assets/DogBreedsList.jsx'
import LocationPage from './assets/locationPage.jsx'
import PeapleListFilter from './assets/PeapleListFilter.jsx'
import RandomTextApi from './assets/RandomTextApi.jsx'
import ImageGrid from './assets/ImageGrid.jsx'
import Navbar from './assets/navbarComponent.jsx'
import Footer from './assets/Footer.jsx'
import FormPage from './assets/FormPage.jsx'
import ViewPage from './assets/ViewPage.jsx'

// Componente Layout que contiene el Navbar y Footer
function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Página de inicio
function Home() {
  return (
    <div>
      <h1>Bienvenido a MiApp</h1>
      <p>Selecciona una opción del menú para navegar</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { 
        path: "", 
        element: <Home /> 
      },
      { 
        path: "busqueda", 
        element: <BusquedaProductos /> 
      },
      { 
        path: "input-focus", 
        element: <InputFocus /> 
      },
      { 
        path: "dogs", 
        element: <DogBreedsList /> 
      },
      { 
        path: "location", 
        element: <LocationPage /> 
      },
      { 
        path: "personas", 
        element: <PeapleListFilter /> 
      },
      { 
        path: "random-text", 
        element: <RandomTextApi /> 
      },
      { 
        path: "images", 
        element: <ImageGrid /> 
      },
      {
        path: "form",
        element: <FormPage />
      },
      {
        path: "view",
        element: <ViewPage />
      }
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TokenProvider>
      <RouterProvider router={router} />
    </TokenProvider>
  </StrictMode>,
);

