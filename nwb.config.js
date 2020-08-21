module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'MiradorDemo',
      externals: {
        react: 'React'
      }
    }
  }
}
