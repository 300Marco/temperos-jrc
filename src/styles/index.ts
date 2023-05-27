import { createStitches } from '@stitches/react'

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      white: '#ffffff',
      background: '#fafafa',

      gray100: '#f3f2f2',
      gray200: '#ededed',
      gray400: '#e6e5e5',
      gray500: '#d7d5d5',
      gray600: '#8c8585',
      gray700: '#574f4d',
      gray800: '#403937',
      gray900: '#272221',

      green100: '#e9f8f5',
      green500: '#2abb98',
      green700: '#00a082',
      green900: '#006653',

      yellow500: '#ffc244',
      yellow700: '#F9B01A',
      yellow100: '#fdf2e3',
    },
  },
  media: {
    mobile: '(min-width: 200px) and (max-width: 767px)',
    tablet: '(min-width: 768px) and (max-width: 1023px)',
    laptop: '(min-width: 1024px) and (max-width: 1439px)',
  }, // settings at the end of the project
})
