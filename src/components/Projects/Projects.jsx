import React from 'react'
import styles from './Projects.module.css'
import projects from '../../data/projects.json'
import { ProjectCard } from './ProjectCard'

export const Projects = () => {
  return (
    <section className={styles.container} id='projects'>
        <h2 className={styles.title}>Trabalhos</h2>
        <div className={styles.projects}>
            {projects.map((projects, id)=>{
                return (
                    <ProjectCard key={id} projects={projects}/>
                );
            })}
        </div>
    </section>
  )
}
