/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  // 指定最大换行长度
  printWidth: 120,
  // 缩进制表符宽度
  tabWidth: 2,
  // 使用制表符进行缩进
  useTabs: true,
  // 结尾分号
  semi: true,
  // 括号空格
  bracketSpacing: true,
  jsxSingleQuote: false,
  trailingComma: "none",
  bracketSameLine: false,
  arrowParens: "always",
  requirePragma: false,
};

export default config;
