import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>
                Contactos
            </h2>
            <p>
                Sinta-se à vontade para entrar em contato!
            </p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emaiIcon.png")} alt="Email Icon" />
                <a href="mailto:ckts1@hotmail.com">Hopechavesearte@hotmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/instaIcon.png")} alt="Instagram Icon" />
                <a href="https://www.instagram.com/hopechavesearte/">instagram.com/HopeChaves&Arte</a>
            </li>
            <li className={styles.link}> 
            <img src={getImageUrl("contact/faceIcon.png")} alt="Facebook Icon" />
                <a href="https://www.facebook.com/Hope.chaves.arte">facebook.com/HopeChaves&Arte</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/whatsappIcon.png")} alt="WhatsApp Icon" />
                <a href="https://wa.me/351933330709">+351 933330709</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/localIcon.png")} alt="Localization Icon" />
                <a href="https://maps.app.goo.gl/9eobNEUmuguJmSAc7"> R. Dr. Joaquim Francisco Alves 2490, 2490-573 Ourém</a>
            </li>
        </ul>
    </footer>
  )
}
export default Contact
