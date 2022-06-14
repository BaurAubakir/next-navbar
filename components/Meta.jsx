import Head from 'next/head';
import PropTypes from 'prop-types';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Next JS App',
  description: 'Frontend Dev Bundle',
  keywords: 'nextjs react frontend ssr',
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
};

export default Meta;
