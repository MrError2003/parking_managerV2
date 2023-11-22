import {Nav} from './components/Nav'
import {Ft} from './components/Footer'
import { Serv } from './components/Secserv'
import { Header } from './components/Header'
import { UncontrolledExample} from './components/Intento' 

export default function Home() {
  return (
    <>
      <Nav/>
      <Header/>
      <UncontrolledExample/>  
      <Serv/>
      <Ft/>
    </>
  )
}
