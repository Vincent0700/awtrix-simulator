module.exports = {
  // prettier 配置
  'prettier/prettier': [
    'error',
    {
      printWidth: 100,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      quoteProps: 'as-needed',
      jsxSingleQuote: false,
      trailingComma: 'none',
      bracketSpacing: true,
      jsxBracketSameLine: false,
      arrowParens: 'always',
      rangeStart: 0,
      rangeEnd: Infinity,
      requirePragma: false,
      insertPragma: false,
      proseWrap: 'preserve',
      htmlWhitespaceSensitivity: 'css',
      endOfLine: 'lf'
    }
  ],
  // vue 标签属性顺序
  'vue/attributes-order': [
    'error',
    {
      order: [
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'GLOBAL',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ]
    }
  ],
  // vue 组件属性熟悉
  'vue/order-in-components': [
    'error',
    {
      order: [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'fetch',
        'asyncData',
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        'head',
        ['template', 'render'],
        'renderError'
      ]
    }
  ]
};
