import './styles.css';
import { ReactComponent as Yotube } from './youtube.svg'
import { ReactComponent as Instagram } from './instagram.svg'
import { ReactComponent as Likedin } from './linkedin.svg'
function Footer() {
  return (
    <>
      <footer className="main-footer">
        <p>App desenvolvido durante a 2ª ed. do evento Semana DevSuperior </p>
        <div className="footer-icons">
          <a href="https://www.youtube.com/channel/UC3twHmWQwtqEO7u-gB_2f7g" target="_new"><Yotube /></a>
          <a href="https://www.linkedin.com/school/devsuperior/" target="_new"><Likedin /></a>
          <a href="https://www.instagram.com/devsuperior.ig/" target="_new"><Instagram /></a>
        </div>

      </footer>
    </>
  )
}

export default Footer