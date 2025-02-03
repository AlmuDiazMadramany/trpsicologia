
import "../styles/header.css";

function header() {
  return (
    <>
    <div className='header_contact'>
        <p>+34 623 91 26 06 | contacto@trpsicologia.com</p>
        <p>Avenida de América / Diego de León</p>
        <p>Calle Méjico 15, local 10 (dentro del portal)</p>

        <a href="https://api.whatsapp.com/send/?phone=34623912606&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
        <button className='header_btn'>QUIERO UNA CITA</button>
        </a>
    </div>

    </>
  )
}

export default header