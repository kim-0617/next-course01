/** @type {import('next').NextConfig} */
const API_KEY = "4dce5e2aa071cda3c95daac64628defc";
const nextConfig = {
  // reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?page=1&api_key=${API_KEY}&language=ko-KR`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?&api_key=${API_KEY}&language=ko-KR`,
      },
    ];
  },
};

module.exports = nextConfig;
