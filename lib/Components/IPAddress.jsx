import { SmallText } from "./Common.jsx"

export const IPAddress = ({ data }, dispatch) => {
  return (
    <SmallText>IP: {data.ip_address}</SmallText>
  )
}
