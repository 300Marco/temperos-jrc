import { styled } from '../../styles'

export const HeaderContainer = styled('header', {
  width: '100%',
  background: '$yellow100',
  padding: '2rem 0',

  display: 'flex',
  justifyContent: 'center',
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
})
