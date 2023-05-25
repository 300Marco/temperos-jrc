'use client'

import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: 'none',
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$background',
    color: '$gray900',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontSize: '1.25rem',
    fontWeight: 400,
  },

  a: {
    textDecoration: 'none',
  },
})
