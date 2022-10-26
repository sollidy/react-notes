
module.exports = {
  webpack: function (config, env) {
    config.module.parser = {
      javascript: {
        reexportExportsPresence: false,
      },
    }
    console.log(config.module.parser.javascript)
    return config
  },
}
