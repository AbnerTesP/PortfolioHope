import React, {useState} from 'react'
import { Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import styles from './SapatosCard.module.css'
import {getImageUrl} from '../../utils'

export const SapatosCard = ({sapatos :{title, imageSrc, description, skills, link}, }) => {
    const [fullSizeImageIndex, setImageFullSizeIndex] = useState(-1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (index) => {
        setImageFullSizeIndex(index);
        setIsModalOpen(true);
    }

  return (
    <div className={styles.container}>
        <Carousel showThumbs={false}>
            {imageSrc.map((imageSrc, index) => (
                <div key={index} onClick={() => handleImageClick(index)}>
                    <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`}
                    className={styles.img}/>
                </div>
            ))}
        </Carousel>
        {isModalOpen && (
            <div className={styles.modal} onClick={() => setIsModalOpen(false)}>
                <img src={getImageUrl(imageSrc[fullSizeImageIndex])} alt={`Image of ${title}`} 
                className={styles.imgFullSize}/>
            </div>
        )}
        <h3 className={styles.title}>
            {title}
        </h3>
        <p className={styles.description}>
            {description}
        </p>
        {/*<ul className={styles.skills}>
            {skills.map((skills, id)=> {
            return <li key={id} className={styles.skill}>
                {skills}
            </li>
        })}</ul>*/}
        <div className={styles.links}>
            <a href={`tel:${link}`} className={styles.link}>Ligue e Encomende</a>
        </div>
    </div>
  
  )
}
