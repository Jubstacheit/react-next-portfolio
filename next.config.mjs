/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'img.icons8.com',
			}
		]
	},
};

export default withNextIntl(nextConfig);
