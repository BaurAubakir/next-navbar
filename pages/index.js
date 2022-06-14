import { Fragment } from 'react';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('components/Meta'), {
  ssr: true,
});

const Home = () => {
  return (
    <Fragment>
      <DynamicComponentWithNoSSR />
      <div className='container'>
        <h1>Hello from Next</h1>
      </div>
    </Fragment>
  );
};

export default Home;
