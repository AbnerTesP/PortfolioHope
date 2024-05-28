import React, {useEffect} from 'react'
import Style from '../../../src/App.module.css'
import Navbar from '../../components/Navbar/Navbar'
import resina from '../../data/resina.json'
import { ResinaCard} from './ResinaCard'
import styles from './Resina.module.css'
import Contact from '../../components/Contact/Contact'

export const Resina = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={Style.App}>
    <Navbar/>
    <section className={styles.container} id='resina'>
      <h2 className={styles.title}>Trabalhos Com Resina</h2>
      <div className={styles.pecas}></div>
      {resina.map((resina, id)=>{
              return (
                  <ResinaCard key={id} resina={resina}/>
              );
          })}
    </section>
    <Contact />
  </section>
  )
}

export default Resina