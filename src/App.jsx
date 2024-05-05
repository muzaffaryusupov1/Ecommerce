import { Route, Routes } from "react-router-dom"
import { CategoriesModal, Footer, Header, RegisterModal } from "./components"
import { routes } from "./utils/routes"
import { useSelector } from "react-redux"
import { createPortal } from "react-dom"
import { ToastContainer } from "react-toastify"

function App() {

  const { registerModal } = useSelector(state => state.modals)
  const { registerCategoriesModal } = useSelector(state => state.categoriesmodal)

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          {routes.map(route => (
            <Route key={route.id} path={route.path} element={route.component} />
          ))}
        </Routes>
      </main>

      {registerModal && createPortal(<RegisterModal />, document.querySelector('.wrapper'))}
      {registerCategoriesModal && createPortal(<CategoriesModal />, document.querySelector('.wrapper'))}
      <ToastContainer />
      <Footer />
    </>
  )
}

export default App
