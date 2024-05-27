import Link from 'next/link';
import React from 'react';


function Breadcrumb(props: any) {
  function isLast(index: any) {
    return index === props.crumbs.length - 1;
  }

  return (
    <div className={`breadcrumb `}>
      <ul className="flex items-center">
        
        {props.crumbs.map((crumb: any, ci: any) => {
          const disabled = isLast(ci);
          return  (
            <li key={ci} className="inline-flex items-center whitespace-nowrap">
              <Link href={`${disabled ? '#' : crumb.path}`}>
                <div>
                  <p
                    className={`  ${
                      props.size == 'lg' ? 'text-md lg:text-lg' : 'text-lg'
                    }  ${
                      ci === 0
                        ? `  text-black-350 hover:text-primary`
                        : `  text-gray-750 `
                    } ${disabled ? 'cursor-default' : 'cursor-pointer'} font-extrabold`}
                  >
                    {crumb.title}
                  </p>
                </div>
              </Link>

              <svg
                className={`h-auto fill-current text-black-100 md:mx-1 md:w-4  lg:mx-1 lg:w-4 xl:mx-2 xl:w-5 ${
                  disabled ? 'hidden' : 'block'
                }  `}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
              </svg>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumb;
