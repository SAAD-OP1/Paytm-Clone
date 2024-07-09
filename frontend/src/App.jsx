import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = lazy(() => import('./pages/Signup'));
const Signin = lazy(() => import('./pages/Signin'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const SendMoney = lazy(() => import('./pages/SendMoney'));
const UpdateDetails = lazy(() => import('./pages/UpdateDetails'));
function App() {

  return (
    <>
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Suspense fallback={"loading..."}><Signup /></Suspense>} />
          <Route path="/signin" element={<Suspense fallback={"loading..."}><Signin /></Suspense>} />
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
          <Route path="/send" element={<Suspense fallback={"loading..."}><SendMoney /></Suspense>} />
          <Route path="/updateDetails" element={<Suspense fallback={"loading..."}><UpdateDetails /></Suspense>} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
