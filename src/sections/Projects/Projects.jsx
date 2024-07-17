import styles from './ProjectsStyles.module.css';
import task from '../../assets/task.png';
import sal from '../../assets/saloon.jpg';
import student from '../../assets/student.png';
import grocery from '../../assets/grocery.jpg';
import bitcoin from '../../assets/bitcoin.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={task}
          link="https://github.com/Shashi2682/TaskManager"
          h3="Task Manager"
          p="React || Node JS || MongoDB"
        />
        <ProjectCard
          src={sal}
          link="https://github.com/Shashi2682/Saloon-Management-System"
          h3="Saloon Management System"
          p="HTML || Css || JavaScript"
        />
        <ProjectCard
          src={student}
          link="https://github.com/Shashi2682/Student-Management-System"
          h3="Student Management System"
          p="C++ || Data Structures and Algorithms"
        />
        <ProjectCard
          src={grocery}
          link="https://github.com/Shashi2682/grocerymanagementsystem"
          h3="Grocery Management System"
          p="Java"
        />
        <ProjectCard
          src={bitcoin}
          link="https://github.com/Shashi2682/CryptoApi"
          h3="CryptoAPI"
          p="NodeJS"
        />
      </div>
    </section>
  );
}

export default Projects;
