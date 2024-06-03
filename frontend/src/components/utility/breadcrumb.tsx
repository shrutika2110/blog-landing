import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';

export default function Breadcrumb(props: any) {
  function isLast(index: any) {
    return index === props.crumbs.length - 1;
  }

  return (
      <ul className="flex items-center flex-row flex-wrap">
        {props.crumbs.map((crumb: any, ci: any) => {
          const disabled = isLast(ci);
          return (
            <li key={ci} className="inline-flex items-center lg:whitespace-nowrap">
              <Link href={`${disabled ? '#' : crumb.path}`}>
                  <p
                    className={`text-lg font-extrabold ${
                      !disabled
                        ? `  text-black-350  hover:text-primary`
                        : `  text-gray-750 `
                    } ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    {crumb.title}
                  </p>
              </Link>
              <div  className={`px-2 ${ disabled ? 'hidden' : 'block' } `}>
                <FaAngleRight />
              </div>
            </li>
          );
        })}
      </ul>
  );
}

