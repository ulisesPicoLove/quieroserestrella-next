import EstrellasContainer from '../components/EstrellasContainer'
import HeaderEstrellas from '../components/HeaderEstrellas'
import Steps from '../components/Steps'
import Expectations from '../components/Expectations'
import Goals from '../components/Goals'
import Benefits from '../components/Benefits'
import FooterStarts from '../components/FooterStarts'
import WhatsNext from '../components/WhatsNext'
import FooterPrivacy from '../components/FooterPrivacy'
import Script from 'next/script'

export default function estrella() {
  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
        onLoad={() => {
          $(document).ready(function () {
            $("#mobile-menu").click(function () {
              $(this).toggleClass('active');
              $("#nav-menu").toggleClass('shown');
              $("body, html").toggleClass("scroll-off");
            });
            $(".menu-item").click(function () {
              $("#mobile-menu").removeClass('active');
              $("#nav-menu").removeClass('shown');
              $("body, html").removeClass("scroll-off");
            });
          });
        }}
      />
      <EstrellasContainer>
        <HeaderEstrellas />
        <Steps />
        <Expectations />
        <Goals />
        <Benefits />
        <FooterStarts />
        <WhatsNext />
        <FooterPrivacy/>
      </EstrellasContainer>
    </>
  )
}

