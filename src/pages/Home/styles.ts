import { styled } from '../../styles'

export const HomeContainer = styled('main', {
  width: '100%',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})

export const SectionVarieties = styled('section', {
  width: '58rem',
  marginTop: '8.25rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.75rem',
})

export const SectionVarietiesContent = styled('section', {
  textAlign: 'center',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  span: {
    backgroundColor: '$yellow500',
    borderRadius: '50%',
    padding: '0.625rem',
    color: '$gray900',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  h2: {
    fontWeight: '700',
    fontSize: '2.25rem',
    lineHeight: '160%',
  },

  p: {
    color: '$gray700',
  },
})

export const SectionVarietiesImages = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',
})

export const SectionOptions = styled('section', {
  width: '58rem',
  marginTop: '8.25rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2rem',

  img: {
    width: '350px',
    height: '520px',
  },
})

export const SectionOptionsContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.75rem',

  h2: {
    fontSize: '2.5rem',
    lineHeight: '160%',
    textAlign: 'center',
  },
})

export const SectionOptionsInfo = styled('div', {
  color: '$gray700',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  ul: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',

    svg: {
      color: '$green700',
    },

    li: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
    },
  },
})
