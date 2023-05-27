import { styled } from '../../styles'

export const FooterContainer = styled('footer', {
  position: 'relative',

  width: '100%',
  padding: '8.25rem 0',
  marginTop: '18rem',
  color: '$white',
  backgroundColor: '$gray800',

  display: 'flex',
  justifyContent: 'center',
})

export const FooterWave = styled('div', {
  position: 'absolute',
  top: '-10%',
  left: 0,

  width: '100%',
  height: '5.625rem',

  display: 'flex',
  alignItems: 'end',

  img: {
    width: '100%',
  },

  '@mobile': {
    top: '-8%',
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

  '@mobile': {
    padding: '0 1rem',

    flexDirection: 'column',
    justifyContent: 'center',

    img: {
      margin: '0 auto',
      marginBottom: '2rem',
    },
  },

  '@tablet': {
    width: '100%',
    padding: '0 1rem',
  },

  '@laptop': {
    width: '100%',
    padding: '0 1rem',
  },
})

export const SectionFooter = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  marginBottom: '4rem',

  '&:nth-last-child(1)': {
    marginBottom: 0,
  },

  svg: {
    color: '$white',
    transition: '200ms',

    '&:hover': {
      fontWeight: '700',
      backgroundColor: '$yellow700',
      borderRadius: '50%',
      padding: '3px',
    },
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
