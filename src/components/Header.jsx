
import "../styles/header.css";
import logoTR from "../images/logo_ok.png";
import logoMenu from "../images/menu-icon.png";

function header() {
  return (
    <>
    <header className="header">
    <div className='header_contact'>
        <p>+34 623 91 26 06 | contacto@trpsicologia.com</p>
        <p>Avenida de América / Diego de León</p>
        <p>Calle Méjico 15, local 10 (dentro del portal)</p>

        <a href="https://api.whatsapp.com/send/?phone=34623912606&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
        <button className='header_btn'>QUIERO UNA CITA</button>
        </a>
    </div>

    <div className="header_menu">

        <div >
            <img src={logoTR} alt="logo TR psicologia" className="header_logo"/>
        </div>

        <nav className="header_menu">
            <img src={logoMenu} alt="logo-menu" className="menu_logo"/>
      
            <div className="main_menu">
                <ul className="menu">
                        <li>INICIO</li>
                        <li>CONÓCENOS</li>
                        <li>TERAPIAS</li>
                        <li>TARIFAS</li> 
                    </ul>
                </div>
        </nav>
    </div>
    </header>

    </>
  )
}

export default header