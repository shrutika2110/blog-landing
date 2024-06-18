import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';
import { FaGoogle, FaXTwitter, FaYoutube } from 'react-icons/fa6';

interface Props {
  socialData ?: any;
}

export default function SocialIconList({socialData}: Props) {
    
  const SocialLinks = socialData;
    
  return (
    <>
      {SocialLinks &&
        <div className="flex gap-10 my-10 justify-center">
            {
                SocialLinks.map((data:any, index:any) => {
                return (
                    <>
                      { data?.attributes?.link && 
                        <div key={index}>
                        <Link href={data?.attributes?.link } target="_blank" className='text-2xl lg:text-5.5xl'>
                          { data?.attributes?.title == 'google' ? <FaGoogle  /> : 
                            data?.attributes?.title == 'facebook' ?  <FaFacebook  /> :
                            data?.attributes?.title == 'instagram' ?  <FaInstagram  /> :
                            data?.attributes?.title == 'youtube' ?  <FaYoutube  /> :
                            data?.attributes?.title == 'linkedin' ?  <FaLinkedin  /> :
                            data?.attributes?.title == 'twitter' ?  <FaXTwitter  /> : null
                          }
                          
                        </Link>
                        </div>
                      }
                  </>
                    
                );
            })}
          </div>
      }
    </>
    );
  };

    




