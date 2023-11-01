import { Loader } from './Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AditionalInfo } from 'components/DetailedMovie/AditionalInfo';
import { DetailedMovie } from 'components/DetailedMovie/DetailedMovie';

const MovieDetails = () => {
  return (
    <>
      <DetailedMovie />
      <AditionalInfo />
    <Suspense fallback={<Loader/>}>
        <Outlet/>
    </Suspense>
    </>
  );
};

export default MovieDetails;
