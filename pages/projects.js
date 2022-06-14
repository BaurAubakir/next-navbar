import { useSelector } from 'react-redux';

import { Loader } from 'components';
import Meta from 'components/Meta';

const ProjectsPage = () => {
  const { isLoading } = useSelector((state) => state.app);

  return (
    <div className='container'>
      <Meta title='Projects Page' />
      {isLoading ? <Loader /> : <h1>Progects Page</h1>}
    </div>
  );
};

export default ProjectsPage;
