import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from '../common/loader/Loader';

const Home = React.lazy(() => import('../../pages/home/Home'));
const About = React.lazy(() => import('../../pages/about/About'));

const Routing = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<div />} />
          <Route path='/contact' element={<div />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default Routing;
