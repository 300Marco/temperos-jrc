'use client'

import { globalCss } from '.'

export const globalStyles = globalCss({
  '@import url("https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700&display=swap")':
    {},

  '*': {
    margin: 0,
    padding: 0,
    border: 'none',
    boxSizing: 'border-box',
    listStyleType: 'none',
  },

  body: {
    backgroundColor: '$background',
    color: '$gray900',
  },

  'body, input, textarea, button': {
    fontFamily: '"Inter", sans-serif',
    fontSize: '1.25rem',
    fontWeight: 400,
  },

  a: {
    textDecoration: 'none',
  },
})
