import { useSelector } from 'react-redux';

import { Loader } from 'components';

const AboutPage = () => {
  const { isLoading } = useSelector((state) => state.app);

  return (
    <div className='container'>
      <Meta title='About Page' />
      {isLoading ? <Loader /> : <h1>About Page</h1>}
    </div>
  );
};

export default AboutPage;
