// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     {
//      s
//     }
//     return config;
// };

const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: "css",
    }),
    // 配置路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, "src")
    })
);