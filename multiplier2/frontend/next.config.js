// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true
// }

// module.exports = nextConfig

module.exports = (phase, { defaultConfig }) => {
  return {
    ...defaultConfig,
    reactStrictMode: true,
    webpack: (config) => {
      // config.resolve = {
      //   ...config.resolve,
      //   fallback: {
      //     "fs": false,
      //     "path": false,
      //     "os": false,
      //   }
      // },
      config.module = {
        ...config.module,
        rules: [
          {
            ...config.module.rules[0],
            test: /\.m?js/,
            resolve: {
                fullySpecified: false
            },
            // exclude: [/node_modules/],
            loader: require.resolve('source-map-loader'),
          },
        ]
      }
      // config.module.rules.push({
      //   exclude: [/node_modules/],
      //   // loader: require.resolve('source-map-loader'),
      // })

      return config
    },
  }
}

