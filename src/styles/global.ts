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

    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: '12px',
    },

    '&::-webkit-scrollbar-track': {
      borderRadius: 0,
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '$yellow700',
      borderRadius: '4px',
    },
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
