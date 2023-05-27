import { styled } from '../../../../styles'

export const BannerContainer = styled('section', {
  position: 'relative',

  width: '100%',
  height: '39.75rem',
  paddingTop: '2rem',
  backgroundColor: '$yellow100',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',

  '@mobile': {
    height: '100%',
    padding: '0 1rem',
  },

  '@tablet': {
    height: '32rem',
  },
})

export const BoxContent = styled('div', {
  width: '70rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  img: {
    width: '28rem',
    height: '28rem',
  },

  '@mobile': {
    width: '100%',
    paddingBottom: '3.5rem',

    flexDirection: 'column',
    gap: '1rem',

    img: {
      order: -1,
      width: '60%',
      height: '60%',
      marginBottom: '1rem',
    },
  },

  '@tablet': {
    border: '1px solid red',

    width: '100%',
    padding: '0 1rem',

    img: {
      width: '40%',
      height: '40%',
    },
  },

  '@laptop': {
    padding: '0 1rem',

    img: {
      width: '40%',
      height: '40%',
    },
  },
})

export const BoxInfo = styled('div', {
  width: '35.875rem',
  textAlign: 'center',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',

  h2: {
    fontSize: '2.5rem',
    lineHeight: '130%',
    fontFamily: '"Baloo 2", sans-serif',
    fontWeight: 700,
  },

  p: {
    fontSize: '1.5rem',
    color: '$gray700',
    lineHeight: '130%',
  },

  a: {
    backgroundColor: '$yellow500',
    color: '$gray900',
    fontSize: '1.25rem',
    fontWeight: '700',
    padding: '1rem 2rem',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 200ms',

    '&:hover': {
      backgroundColor: '$yellow700',
    },
  },

  '@mobile': {
    width: '100%',

    h2: {
      fontSize: '1.75rem',
    },

    p: {
      fontSize: '1rem',
    },
  },

  '@tablet': {
    width: '100%',

    h2: {
      fontSize: '2rem',
    },

    p: {
      fontSize: '1.125rem',
    },
  },
})

export const BoxYellowWave = styled('div', {
  width: '100%',

  display: 'flex',

  position: 'absolute',
  bottom: 0,
  left: 0,

  img: {
    width: '100%',
  },
})
