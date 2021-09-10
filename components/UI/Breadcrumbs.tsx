import { FC } from 'react';
import Link from 'next/link';

interface props {
  crumbs: string[];
}

const BreadCrumbs: FC<props> = ({ crumbs }) => {
  if (!crumbs.length) return <></>;
  return (
    <div className="flex gap-16 mb-32">
      {crumbs.map((crumb, index) => (
        <div key={crumb} className="text-gray-400">
          {index !== 0 && (
            <span>
              <span className="mr-16">{'>'}</span>
              <span>{crumb}</span>
            </span>
          )}
          {index === 0 && (
            <Link href="/">
              <a href="/">{crumb}</a>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
