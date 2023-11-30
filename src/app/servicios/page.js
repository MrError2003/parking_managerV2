import React from 'react'
import {Nav} from '../components/Nav'
import { Mecanic } from '../components/Mecanic'
import { Ft } from '../components/Footer'
import { Monitoreo } from '../components/Monitoreo'
import Parking from '../components/Parking'
import Autolavado from '../components/Autolavado'
import { Electricos } from '../components/Electricos'


export default function page() {
  return (
    <>
    <Nav/>
    <Parking/>
    <Autolavado/>
    <Mecanic/>
    <Electricos/>
    <Monitoreo/>
    <Ft/>
    </>
  )
}
