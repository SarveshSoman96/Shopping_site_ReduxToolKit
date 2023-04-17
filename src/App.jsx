import { Route, Routes } from "react-router-dom";
import './App.css';
import React, {useEffect} from "react";
import Navbar from './components/Navbar/Navbar';
import { useDispatch } from "react-redux";
import { fetchAllProduct } from "./RTK Store/CartSlice";

const LazyHome = React.lazy(() => import("./Pages/Home/Home"));
const LazyCart = React.lazy(() => import("./Pages/Cart/Cart"));
const LazyError = React.lazy(() => import("./Pages/ErrorPage/ErrorPage"));
const LazySingleProduct = React.lazy(() => import("./Pages/SingleProduct/SingleProduct"));

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProduct())

  }, [])
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback="Loading...">
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route
          path="/shoppingcart"
          element={
            <React.Suspense fallback="Loading...">
              <LazyCart />
            </React.Suspense>
          }
        />
        <Route
          path="/product/:id"
          element={
            <React.Suspense fallback="Loading...">
              <LazySingleProduct />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback="Loading...">
              <LazyError />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App
