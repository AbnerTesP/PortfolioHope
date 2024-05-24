
import React, {Component} from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>
            Sobre
        </h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/FotoCompleta.png")} alt="Eu no trabalho" className={styles.aboutImg}/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/calcadoImg.png")} alt="calcado-icon" />
                <div className={styles.aboutItemtext}>
                    <h4>Sapateira</h4>
                    <p>
                        Sua paixão por calçados a leva a restaurar sapatos, trazendo vida nova a cada par.
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/chaveImg.png")} alt="chave-icon" />
                <div className={styles.aboutItemtext}>
                    <h4>Chaveira</h4>
                    <p>
                        Com habilidades de chaveira, ela desvenda segredos de fechaduras e portas. 
                    </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <img src={getImageUrl("about/artesanatoImg.png")} alt="artesanato-icon" />
                <div className={styles.aboutItemtext}>
                    <h4>Artesã</h4>
                    <p>
                        Uma artesã multifacetada que transforma materiais comuns em verdadeiras obras de arte. 
                        Além disso, seu talento se estende à criação de peças únicas com resina e madeira
                    </p>
                </div>
            </li>
        </ul>
    </div>
    </section>
  )
}
