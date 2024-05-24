import React from 'react'
import styles from './MadeiraCard.module.css'
import {getImageUrl} from '../../utils'



export const MadeiraCard = ({madeira :{title, imageSrc, videoSrc, description, skills, link}, }) => {
    const videoUrl = getImageUrl(videoSrc)
  return (
    <div className={styles.container}>
        <video className={styles.video} autoPlay muted loop playsInline>
            <source src={videoUrl} type='video/mp4'/>
        </video>
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
