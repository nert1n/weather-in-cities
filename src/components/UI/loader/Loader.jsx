import cl from './Loader.module.scss';

const Loader = () => {
  console.log('!!! Loader rendered');

  return (
    <div className={cl.loader__holder}>
      <div className={cl.loader}></div>
    </div>
  );
};

export default Loader;