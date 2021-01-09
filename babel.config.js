module.exports = function(api) {
  api.cache(true)
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false, // prevents modules from transpiling to commonjs. helps in tree-shaking
        useBuiltIns: 'usage',
        corejs: {
          version: 3,
          proposals: true
        }
      }
    ],
    '@babel/preset-react'
  ]
  const plugins = [
    '@babel/plugin-transform-runtime',
    'babel-plugin-styled-components'
  ]
  return { presets, plugins }
}
