import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  width: '100%',
  background: '$yellow100',
  padding: '2rem 0',

  display: 'flex',
  justifyContent: 'center',

  '@mobile': {
    height: '8.25rem',
    padding: '1rem 0',
  },
})

export const BoxImage = styled('div', {
  width: '100%',
  maxWidth: '1120px',

  display: 'flex',
  justifyContent: 'center',

  img: {
    width: '9.375rem',
    height: '9.375rem',
  },

  '@mobile': {
    img: {
      width: '100%',
      height: '100%',
    },
  },
})
