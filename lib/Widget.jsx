import { React, run } from 'uebersicht'

import { Container, LargeText, IPAddress } from './Components'

export const Widget = (props, dispatch) => {
  return (
    <Container>
      <LargeText>Nettle</LargeText>
      <IPAddress {...props} dispatch />
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Container>
  )
}
