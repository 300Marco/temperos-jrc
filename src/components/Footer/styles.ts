import { styled } from '../../styles'

export const FooterContainer = styled('footer', {
  position: 'relative',

  width: '100%',
  padding: '8.25rem 0',
  marginTop: '13.875rem',
  color: '$white',
  backgroundColor: '$gray800',

  display: 'flex',
  justifyContent: 'center',
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

export const FooterBox = styled('section', {
  width: '70rem',

  display: 'flex',
  justifyContent: 'space-between',

  img: {
    width: '10rem',
    height: '10rem',
  },
})

export const SectionFooter = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  svg: {
    color: '$white',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    span: {
      fontSize: '1rem',
    },
  },
})

export const SectionTitle = styled('span', {
  fontWeight: 600,
})

export const Developer = styled('span', {
  display: 'flex',
  gap: '1rem',
})
