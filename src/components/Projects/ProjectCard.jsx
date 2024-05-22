import React from 'react'
import {getImageUrl} from '../../utils'
import styles from './ProjectCard.module.css'

export const ProjectCard = ({projects :{title, imageSrc, videoSrc, description, skills, demo, source}, }) => {
    const videoUrl = getImageUrl(videoSrc)
  return (
    <div className={styles.container}>
        <video className={styles.video} autoPlay muted loopb playsInline>
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
        <div className={styles.links}>
        <a href={demo} className={styles.link}></a>
        <a href={source} className={styles.link}></a>
        </div>
    </div>
  )
}
