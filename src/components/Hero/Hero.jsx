import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hope Chaves & Arte</h1>
        <p className={styles.description}> Chaveiros habilidosos, especialistas em calçados, resina e madeira. 
        Venha descobrir como trabalhamos com cada detalhe.</p>
        <a href="https://wa.me/351933330709" className={styles.contactBtn} target='_blank' rel='noopener noreferrer'>Contacte-me</a>
      </div> 
      <img src={getImageUrl("nav/LogoHopeSemFundo2.png")} alt="Hero image of me" className={styles.heroImg}/>
      {/*<div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>*/}
    </section>
  )
}
