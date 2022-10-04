/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

	// fix webpack hot reloading on file change not working inside docker & vagrant
	webpack: function (config, context) {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
}
