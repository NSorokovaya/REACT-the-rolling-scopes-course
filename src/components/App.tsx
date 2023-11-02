import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SharedLayout = lazy(() => import('../pages/SharedLayout/SharedLayout'));
const HomePage = lazy(() => import('../pages/HomePage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));


const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <SharedLayout />
            </Suspense>
          }
        >
          <Route index element={<HomePage />} />
          <Route
            path="/movies/:movieId"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MovieDetails />
              </Suspense>
            }
          >
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </>
  );
};

export default App;