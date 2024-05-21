/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'localhost',
            'amazonaws.com',
            `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}`,
            'kofuku-cms.alpha.geekydev.com',
            'kofuku-be.blr0.geekydev.com',
            '139.84.137.62',
            'kofuku-jobs.s3.amazonaws.com',
            'kofuku-bucket.s3.ap-south-1.amazonaws.com',
            'kofuku-cms-bucket.s3.ap-south-1.amazonaws.com',
            '10.51.1.96',
            'kofuku-cms.blr0.geekydev.com',
            'kofuku-cms-bucket.s3.amazonaws.com',
          ],
    },
};

export default nextConfig;
