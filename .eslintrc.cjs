module.exports = {
  extends: ['mantine'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'arrow-body-style': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'no-trailing-spaces':'off',
    'semi':'off',
    'eol-last':'off',
    'padded-blocks':'off',
    'react/jsx-indent-props':'off',
    'no-multiple-empty-lines':'off',
    'no-multi-spaces':'off'
  },
};
