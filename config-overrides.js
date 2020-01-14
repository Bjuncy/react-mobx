const { override, fixBabelImports, addLessLoader, addWebpackPlugin, addDecoratorsLegacy } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { 
      '@primary-color': '#FFB230', // 全局主色
      '@link-color': '#5683E2', // 链接色
      '@success-color': '#8FC31F', // 成功色
      '@warning-color': '#FFB230', // 警告色
      '@error-color': '#FF5C5C', // 错误色
      '@font-size-base': '14px', // 主字号
      '@heading-color': '#4A4A4A', // 标题色
      '@text-color': '#777', // 主文本色
      '@text-color-secondary': '#BBBBBB', // 次文本色
      '@disabled-color': '#BBBBBB', // 失效色
      '@layout-sider-background': '#35302C',
      '@menu-dark-bg': '#35302C',
      '@menu-dark-submenu-bg': '#494540',
      '@layout-trigger-background': '#494540'
    }
  }),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addDecoratorsLegacy()
);