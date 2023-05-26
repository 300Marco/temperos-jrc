import { styled } from '../../styles'

export const FooterContainer = styled('footer', {
  position: 'relative',

  width: '100%',
  padding: '2rem',
  // marginTop: '8.25rem',
  marginTop: '13.875rem',
  backgroundColor: '$gray800',
})

export const FooterWave = styled('div', {
  position: 'absolute',
  bottom: '95%',
  left: 0,

  width: '100%',
  height: '5.625rem',

  display: 'flex',
  alignItems: 'end',

  img: {
    width: '100%',
  },
})
