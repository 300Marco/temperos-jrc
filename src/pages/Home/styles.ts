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

  '@mobile': {
    width: '100%',
    padding: '0 1rem',
  },

  '@tablet': {
    width: '100%',
  },
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
    fontFamily: '"Baloo 2", sans-serif',
    fontWeight: 700,
    fontSize: '2.25rem',
    lineHeight: '160%',
  },

  p: {
    color: '$gray700',
  },

  '@mobile': {
    h2: {
      fontSize: '1.5rem',
      lineHeight: '130%',
    },

    p: {
      fontSize: '1rem',
    },
  },

  '@tablet': {
    h2: {
      fontSize: '2rem',
    },

    p: {
      fontSize: '1.125rem',
    },
  },
})

export const SectionVarietiesImages = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',

  img: {
    width: '8.25rem',
    height: '8.25rem',
  },

  '@mobile': {
    width: '100%',
    gap: '1rem 1rem',
    flexWrap: 'wrap',

    img: {
      width: '6rem',
      height: '6rem',
    },
  },

  '@tablet': {
    width: '100%',
    gap: '1rem',
    flexWrap: 'wrap',
  },
})

export const SectionOptions = styled('section', {
  width: '58rem',
  marginTop: '8.25rem',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2rem',

  img: {
    width: '21.875rem',
    height: '32.5rem',
  },

  '@mobile': {
    width: '100%',
    padding: '0 1rem',

    flexDirection: 'column',

    img: {
      display: 'none',
      visibility: 'hidden',
    },
  },

  '@tablet': {
    width: '100%',
    padding: '0 1rem',

    img: {
      width: '17.875rem',
      height: '28.5rem',
    },
  },
})

export const SectionOptionsContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.75rem',

  h2: {
    fontSize: '2.25rem',
    lineHeight: '160%',
    textAlign: 'center',
    fontFamily: '"Baloo 2", sans-serif',
  },

  '@mobile': {
    gap: '2rem',

    h2: {
      fontSize: '1.5rem',
    },
  },

  '@tablet': {
    h2: {
      fontSize: '1.75rem',
    },
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

  '@mobile': {
    fontSize: '1rem',
  },

  '@tablet': {
    fontSize: '1.125rem',
  },
})

export const SectionProcesses = styled('section', {
  width: '100%',
  maxWidth: '70rem',
  marginTop: '8.25rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '7.5rem',
})

export const SectionProcessContent = styled('div', {
  padding: '0 6rem',
  textAlign: 'center',

  h2: {
    marginBottom: '0.375rem',
    lineHeight: '160%',
    fontSize: '2.25rem',
    fontWeight: 700,
    fontFamily: '"Baloo 2", sans-serif',
  },

  p: {
    color: '$gray700',
    fontSize: '1.25rem',
    lineHeight: '130%',
    padding: '0 1rem',
  },

  '@mobile': {
    padding: '0 1rem',

    h2: {
      fontSize: '1.5rem',
      marginBottom: '2rem',
    },

    p: {
      fontSize: '1rem',
      padding: 0,
    },
  },

  '@tablet': {
    padding: '0 1rem',

    h2: {
      fontSize: '2rem',
    },

    p: {
      fontSize: '1.125rem',
    },
  },
})

export const SectionProcessCards = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  '@mobile': {
    padding: '0 1rem',

    flexDirection: 'column',
    gap: '6rem',
  },

  '@tablet': {
    padding: '0 1rem',

    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '6rem 1rem',
  },

  '@laptop': {
    padding: '0 1rem',

    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '6rem 1rem',
  },
})

export const Card = styled('div', {
  position: 'relative',

  width: '22.25rem',
  padding: '4.5rem 2rem 2rem',
  borderRadius: '2rem',
  backgroundColor: '$green100',
  textAlign: 'center',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  span: {
    position: 'absolute',
    top: '-46px',

    padding: '1rem',
    borderRadius: '50%',
    backgroundColor: '$green700',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    svg: {
      color: '$white',
    },
  },

  h3: {
    fontWeight: 600,
    lineHeight: '130%',
    fontSize: '1.5rem',
    fontFamily: '"Baloo 2", sans-serif',
  },

  p: {
    fontSize: '1rem',
    color: '$gray700',
    lineHeight: '130%',
  },

  '@mobile': {
    width: '100%',
  },

  '@tablet': {
    width: '18.25rem',
  },
})

export const Divider = styled('div', {
  width: '100%',
  margin: '6.25rem 0',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    width: '100%',
  },

  '@mobile': {
    height: '1px',
    margin: 0,

    img: {
      display: 'none',
      visibility: 'hidden',
    },
  },
})

export const SectionContact = styled('section', {
  width: '70rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '3.75rem',

  h2: {
    fontSize: '2.25rem',
    fontFamily: '"Baloo 2", sans-serif',
    fontWeight: 700,
  },

  '@mobile': {
    marginTop: '8.25rem',
    width: '100%',
    padding: '0 1rem',

    h2: {
      fontSize: '1.5rem',
      textAlign: 'center',
    },
  },

  '@tablet': {
    width: '100%',
    padding: '0 1rem',

    h2: {
      fontSize: '2rem',
      textAlign: 'center',
    },
  },

  '@laptop': {
    width: '100%',
  },
})

export const SectionContactContent = styled('div', {
  width: '50rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  img: {
    width: '21.875rem',
  },

  '@mobile': {
    width: '100%',
    justifyContent: 'center',

    img: {
      display: 'none',
      visibility: 'hidden',
    },
  },

  '@tablet': {
    width: '100%',
    padding: '0 1rem',

    img: {
      width: '50%',
    },
  },
})

export const SectionContentInfo = styled('div', {
  width: '18.875rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '3.75rem',

  span: {
    fontWeight: 600,
  },

  '@tablet': {
    span: {
      fontSize: '1.125rem',
    },
  },
})

export const CardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  a: {
    backgroundColor: '$yellow500',
    textAlign: 'center',
    padding: '1rem',
    fontWeight: 600,
    color: '$gray900',
    borderRadius: '8px',
    transition: 'background-color 200ms',

    '&:hover': {
      backgroundColor: '$yellow700',
    },
  },
})

export const CardInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',

  variants: {
    flexStart: {
      true: {
        alignItems: 'start',
      },
    },
    flexColumn: {
      true: {
        flexDirection: 'column',
        alignItems: 'start',
        gap: '1rem',
      },
    },
  },

  svg: {
    color: '$gray900',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
})
