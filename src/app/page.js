import {Nav} from './components/Nav'
import {Ft} from './components/Footer'
import { Serv } from './components/Secserv'
import Newcarrusel from './components/Newcarrusel'

export default function Home() {
  return (
    <>
      <Nav/>
      <Newcarrusel/>
      <Serv/>      
      <Ft/>
    </>
  )
}
