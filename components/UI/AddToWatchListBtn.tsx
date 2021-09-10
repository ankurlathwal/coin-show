import { FC } from 'react';

interface props {
  onClick: () => void;
}

const AddToWatchListBtn: FC<props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="h-40 w-160 focus:outline-none bg-primary"
    >
      <span className="text-white">&#9734; Add to Watchlist</span>
    </button>
  );
};

export default AddToWatchListBtn;
