import EstrellasContainer from '../components/EstrellasContainer'
import Privacy from '../components/Privacy';
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
        <Privacy/>
      </EstrellasContainer>
    </>
  )
}

