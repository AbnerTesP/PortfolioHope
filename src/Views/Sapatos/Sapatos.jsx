import React, {useEffect} from 'react'
import Style from '../../../src/App.module.css'
import Navbar from '../../components/Navbar/Navbar'
import sapatos from '../../data/sapatos.json'
import { SapatosCard} from './SapatosCard'
import styles from './Sapatos.module.css'
import Contact from '../../components/Contact/Contact'

export const Resina = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={Style.App}>
    <Navbar/>
    <section className={styles.container} id='sapato'>
      <h2 className={styles.title}>Acessórios para Sapatos</h2>
      <div className={styles.greenstrip}></div>
      <div className={styles.pecas}></div>
      {sapatos.map((sapatos, id)=>{
              return (
                  <SapatosCard key={id} sapatos={sapatos}/>
              );
          })}
    </section>
    <Contact />
  </section>
  )
}

export default Resina