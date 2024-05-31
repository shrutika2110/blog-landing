import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


    
export default function SocialIconList() {

  const SocialList = [
    {
      id: 1,
      icon: <FaFacebook  />,
      link: 'https://www.facebook.com/kofukutechnologies/'
      ,
    },
    {
      id: 2,
      icon: <FaInstagram  />,
      link: 'https://www.instagram.com/kofukutechnologies/'
      ,
    },
    {
      id: 3,
      icon: <FaLinkedin  />,
      link: 'https://www.linkedin.com/company/kofuku-technologies-private-limited/?viewAsMember=true',
      
    },
    {
      id: 4,
      icon: <FaXTwitter  />,
      link: 'https://twitter.com/kofukuengine',
      
    },
  ];
    
  return (
        <>
          {SocialList &&
              SocialList.map((data:any) => {
              return (
                  <div key={data.id}>
                      <Link href={data.link} target="_blank" className='text-2xl lg:text-5xl'>
                          {data.icon}
                      </Link>
                  </div>
              );
          })}
        </>
    );
  };



 {/* <Link href="/" className="text-2xl lg:text-5xl">
        <FaGoogle  />
    </Link>
   

    <Link href="/" className="text-2xl lg:text-5xl">
        <FaYoutube  />
    </Link>

    */}
    




