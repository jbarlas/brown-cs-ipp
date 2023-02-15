import React from 'react'
import { getCurrentPartners } from '../../firebase/utils'

export default function Partners() {
  return (
    <div onClick={() => getCurrentPartners()}>Partners</div>
  )
}
