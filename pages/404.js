import { Fragment } from 'react';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('components/Meta'), {
  ssr: true,
});

const Custom404 = () => {
  return (
    <Fragment>
      <DynamicComponentWithNoSSR title='404 - Page Not Found' />
      <div className='container'>
        <h1>404 - Page Not Found</h1>
      </div>
    </Fragment>
  );
};

export default Custom404;
