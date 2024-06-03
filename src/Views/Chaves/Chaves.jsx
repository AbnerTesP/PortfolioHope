import React, {useEffect} from 'react'
import Style from '../../../src/App.module.css'
import Navbar from '../../components/Navbar/Navbar'
import Chaves from '../../data/chaves.json'
import { ChavesCard} from './ChavesCard'
import styles from './Chaves.module.css'
import Contact from '../../components/Contact/Contact'

export const Resina = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={Style.App}>
    <Navbar/>
    <section className={styles.container} id='Chave'>
      <h2 className={styles.title}>Trabalhos Com Chaves</h2>
      <div className={styles.greenstrip}></div>
      <div className={styles.pecas}></div>
      {Chaves.map((Chaves, id)=>{
              return (
                  <ChavesCard key={id} Chaves={Chaves}/>
              );
          })}
    </section>
    <Contact />
  </section>
  )
}

export default Resina