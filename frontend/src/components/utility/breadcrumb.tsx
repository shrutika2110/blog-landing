import Link from 'next/link';
import React from 'react';


function Breadcrumb(props: any) {
  function isLast(index: any) {
    return index === props.crumbs.length - 1;
  }
  const homeIcon = props.homeIcon;

  return (
    <div className={`breadcrumb ${homeIcon ? 'py-4' : ''}`}>
      <ul className="flex items-center">
        
        {props.crumbs.map((crumb: any, ci: any) => {
          const disabled = isLast(ci);
          return homeIcon ? (
            <li key={ci} className="inline-flex items-center whitespace-nowrap">
              <Link href={`${disabled ? '#' : crumb.path}`}>
                <div>
                  {ci === 0 ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mb-0.5"
                    >
                      <path
                        d="M8.33073 16.6667V11.6667H11.6641V16.6667H15.8307V10H18.3307L9.9974 2.5L1.66406 10H4.16406V16.6667H8.33073Z"
                        className="hover:fill-primary"
                        fill="black"
                      />
                    </svg>
                  ) : (
                    <p
                      className={`text-sm
                        ${
                          disabled
                            ? 'cursor-not-allowed font-bold text-primary'
                            : 'text-black-750 cursor-pointer font-regular hover:text-primary'
                        }`}
                    >
                      {crumb.title}
                    </p>
                  )}
                </div>
              </Link>

              <svg
                className={`text-black-750 mx-1 h-auto w-4 fill-current ${
                  disabled ? 'hidden' : 'block'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
              </svg>
            </li>
          ) : (
            <li key={ci} className="inline-flex items-center whitespace-nowrap">
              <Link href={`${disabled ? '#' : crumb.path}`}>
                <div>
                  <p
                    className={`  ${
                      props.size == 'lg' ? 'text-sm lg:text-base ' : 'text-sm'
                    }  ${
                      ci === 0
                        ? ` ${
                            props.size == 'lg' ? 'font-bold' : 'font-normal'
                          } text-offwhite-800 hover:text-primary`
                        : ` ${
                            props.size == 'lg' ? 'font-bold' : 'font-medium'
                          } text-[#262626]`
                    } ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
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
