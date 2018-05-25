import Head from 'next/head'
import Navbar from '../components/navbar'
import MoreInfo from '../components/more_info'
import LongModal from '../components/long-modal'
import ShortModal from '../components/short-modal'
import ResouceSection from '../components/resource_section'

export default () => (
  <div>
    <Head>
      <title>Launch guide</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
    </Head>
    <Navbar />
    <MoreInfo />
    <p className="normal-text">Utiliza el siguiente contenido para promocionar la app a tus clientes:</p>
    <ResouceSection sectionTitle="Para Medios Digitales">
      <div className="digital-media-wrapper">
        <LongModal
          launchButtonText="Redes Sociales"
          id="redes"
          thumbnail="/static/img/promo-thumb-social_media.jpg"
          modalTitle="Redes Sociales"
          modalExplanationText="Publica en redes sociales una imágen y un texto con el link de descarga."
          file="/static/files/rocket-redes_sociales.jpg"
        />
        <LongModal
          launchButtonText="Whatsapp"
          id="whatsapp"
          thumbnail="/static/img/promo-thumb-chat.jpg"
          modalTitle="Whatsapp"
          modalExplanationText="Manda el link de descarga y esta imagen a clientes y grupos via chat."
          file="/static/files/rocket-whatsapp.jpg"
        />
      </div>
    </ResouceSection>

    <ResouceSection sectionTitle="Para imprimir">
      <div className="digital-media-wrapper">
        <ShortModal
          launchButtonText="Banners"
          id="banners"
          thumbnail="/static/img/promo-thumb-banners.jpg"
          modalTitle="Banners"
          modalExplanationText="Imprime banners promocionales para poner en tu Gimnasio"
          file="/static/files/rocket-banner.zip"
        />
        <ShortModal
          launchButtonText="Posters"
          id="posters"
          thumbnail="/static/img/promo-thumb-poster.jpg"
          modalTitle="Posters"
          modalExplanationText="Imprime banners promocionales para poner en tu Gimnasio"
          file="/static/files/rocket-poster.zip"
        />
        <ShortModal
          launchButtonText="Flyers"
          id="flyers"
          thumbnail="/static/img/promo-thumb-flyer.jpg"
          modalTitle="Flyers"
          modalExplanationText="Imprime banners promocionales para poner en tu Gimnasio"
          file="/static/files/rocket-flyers.zip"
        />
      </div>
    </ResouceSection>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T" crossOrigin="anonymous"></script>

    <style jsx>
      {
        `
        .digital-media-wrapper {
          text-align: center;
        }
        .normal-text {
          font-family: Montserrat;
          font-size: 17px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          margin: 30px 0 0 0;
          color: #1a1a1a;
        }
        `
      }
    </style>
  </div>
)
