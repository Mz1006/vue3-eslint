module.exports = {
  root: true,  // 禁止套娃
  parserOptions: {
    parser: 'babel-eslint',  // babel解析
    sourceType: 'module',
  },
	parser: "vue-eslint-parser",
  env: { // 环境变量
    browser: true,
    node: true,
    es6: true,
  },
  // 扩展风格
  extends: ['airbnb','plugin:vue/recommended', 'eslint:recommended'],
  rules: {
    // 规则
    "quotes": [1, "single"],            // 单引号
    "quote-props":[2, "as-needed"],     // 双引号自动变单引号
    "semi": [2, "never"],               // 一行结尾不要写分号
    "comma-dangle": [1,"always-multiline"],  // 对象或数组多行写法时，最后一个值加逗号
		"no-tabs": "off"
  }
}
