import React from 'react'
import Style from '../../../src/App.module.css';
import styles from './Madeira.module.css'
import Navbar from '../../components/Navbar/Navbar'
import madeira from '../../data/madeira.json'
import { MadeiraCard } from './MadeiraCard'


export const Madeira = () => {
  return (
    <section className={Style.App}>
      <Navbar/>
      <section className={styles.container} id='madeira'>
        <h2 className={styles.title}>Trabalhos Em Madeira</h2>
        <div className={styles.pecas}></div>
        {madeira.map((madeira, id)=>{
                return (
                    <MadeiraCard key={id} madeira={madeira}/>
                );
            })}
      </section>
    </section>
  )
}

export default Madeira