import { styled } from 'uebersicht'

export const Container = styled('div')({
  fontFamily: 'sans-serif',
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(0, 0, 0, 0.5)',
  margin: '3rem',
  padding: '3rem',
  color: '#fff',
})


export const LargeText = styled('h1')`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
`
export const MediumText = styled('h2')`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
`
export const SmallText = styled('h3')`
  margin: 0;
  padding: 0;
  font-size: 1rem;
`
