/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/about-us',
          destination: '/about-us.html',
        },
      ]
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'localhost',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'amazonaws.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}`,
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'kofuku-cms.alpha.geekydev.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'kofuku-be.blr0.geekydev.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: '139.84.137.62',
            pathname: '**',
          },{
            protocol: 'https',
            hostname: 'kofuku-jobs.s3.amazonaws.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'kofuku-bucket.s3.ap-south-1.amazonaws.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'kofuku-cms-bucket.s3.ap-south-1.amazonaws.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: '10.51.1.96',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'kofuku-cms.blr0.geekydev.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'kofuku-cms-bucket.s3.amazonaws.com',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
