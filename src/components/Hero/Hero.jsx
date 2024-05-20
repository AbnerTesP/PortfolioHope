import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, eu sou a Keila</h1>
        <p className={styles.description}>Conheça a chaveira habilidosa, especialista em calçados, mestre da resina e madeira. 
        Descubra como ela transforma materiais comuns em peças únicas e cheias de estilo.</p>
        <a href="https://wa.me/9333307097" className={styles.contactBtn} target='_blank' rel='noopener noreferrer'>Contacte-me</a>
      </div>
      <img src={getImageUrl("hero/pixelcut2.png")} alt="Hero image of me" className={styles.heroImg}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  )
}
