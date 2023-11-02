import Loader from '../components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import DetailedMovie from '../components/DetailedMovie/DetailedMovie';

const MovieDetails: React.FC = () => {
  return (
    <>
      <DetailedMovie />
      <Suspense fallback={<Loader/>}>
        <Outlet/>
      </Suspense>
    </>
  );
};

export default MovieDetails;