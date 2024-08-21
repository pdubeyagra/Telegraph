module.exports = {
    // other configurations...
    resolve: {
      fallback: {
        "zlib": require.resolve("browserify-zlib"),
        "querystring": require.resolve("querystring-es3"),
        "buffer": require.resolve("buffer/"),
        "path": require.resolve("path-browserify"),
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "util": require.resolve("util/"),
        "fs": false, // If you are not using fs, you can disable it
        "http": require.resolve("stream-http"),
        "net": false // Disable if not in use
      }
    }
  }
  