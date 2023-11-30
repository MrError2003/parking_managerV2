import React from 'react'
import {Nav} from '../components/Nav'
import { Mecanic } from '../components/Mecanic'
import { Ft } from '../components/Footer'
import { Monitoreo } from '../components/Monitoreo'
import Parking from '../components/Parking'
import { Autolavado } from '../components/Autolavado'


export default function page() {
  return (
    <>
    <Nav/>
    <Parking/>
    <Mecanic/>
    <Autolavado/>
    <Monitoreo/>
    <Ft/>
    </>
  )
}
