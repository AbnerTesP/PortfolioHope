import React from 'react'
import styles from './ResinaCard.module.css'
import {getImageUrl} from '../../utils'

export const ResinaCard = ({resina :{title, imageSrc, videoSrc, description, skills}, }) => {

  return (
    <div className={styles.container}>
        <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.img} />
        <h3 className={styles.title}>
            {title}
        </h3>
        <p className={styles.description}>
            {description}
        </p>
        <ul className={styles.skills}>
            {skills.map((skills, id)=> {
            return <li key={id} className={styles.skill}>
                {skills}
            </li>
        })}</ul>
    </div>
  
  )
}
