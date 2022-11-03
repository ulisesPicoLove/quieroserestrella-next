import EstrellasContainer from '../components/EstrellasContainer'
import HeaderEstrellas from '../components/HeaderEstrellas'
import Steps from '../components/Steps'
import Expectations from '../components/Expectations'
import Goals from '../components/Goals'
import Benefits from '../components/Benefits'
import FooterStarts from '../components/FooterStarts'
import WhatsNext from '../components/WhatsNext'

export default function estrella() {
  return (
    <EstrellasContainer>
      <HeaderEstrellas/>
      <Steps/>
      <Expectations/>
      <Goals/>
      <Benefits/>
      <FooterStarts/>
      <WhatsNext/>
    </EstrellasContainer>
  )
}