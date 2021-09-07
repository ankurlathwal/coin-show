import { FC } from 'react';
import ReactLoader from 'react-loader-spinner';

const Loader: FC = () => {
  return (
    <div className="w-full h-80 flex justify-center align-middle">
      <ReactLoader type="Puff" color="#15803D" height={80} width={100} />
    </div>
  );
};

export default Loader;
