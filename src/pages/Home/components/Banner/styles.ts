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
})

export const BoxContent = styled('div', {
  width: '70rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  div: {},

  img: {
    width: '28rem',
    height: '28rem',
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

  button: {
    backgroundColor: '$yellow500',
    fontSize: '1.25rem',
    fontWeight: '700',
    padding: '1rem 2rem',
    borderRadius: '8px',
    cursor: 'pointer',
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
