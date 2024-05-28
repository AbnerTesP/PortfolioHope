import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, eu somos a Hope Chaves & Arte</h1>
        <p className={styles.description}> Chaveira habilidosa, especialista em calçados, resina e madeira. 
        Venha descobrir como trabalhamos em cada detalhe.</p>
        <a href="https://wa.me/+3519333307097" className={styles.contactBtn} target='_blank' rel='noopener noreferrer'>Contacte-me</a>
      </div>  
      <div className={styles.function}>
      <h3 >Proprietária</h3>
      </div>
      <img src={getImageUrl("hero/pixelcut2.png")} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  )
}
