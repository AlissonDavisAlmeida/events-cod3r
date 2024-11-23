/* eslint-disable @typescript-eslint/no-explicit-any */
import { use } from "react"


export default function Invitation(props:any) {

  const params = use<any>(props.params)

  return (
    <div>{params.alias}</div>
  )
}
