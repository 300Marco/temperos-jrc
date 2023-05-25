'use client'

import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 'none',
    boxSizing: 'border-box',
  },

  '@font-face': [
    {
      fontFamily: 'Inter',
      src: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@600&display=swap',
    },
    {
      fontFamily: 'Baloo 2',
      src: 'https://fonts.googleapis.com/css2?family=Baloo+2:wght@600&display=swap',
    },
  ],

  body: {
    backgroundColor: '$background',
    color: '$gray900',
  },

  'body, input, textarea, button': {
    fontFamily: 'Inter',
    fontSize: '1.25rem',
    fontWeight: 400,
  },

  a: {
    textDecoration: 'none',
  },
})
