import { Project } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'

interface ProjectSectionProps {
  projects: Project[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  return (
    <section id="projects">
      <SectionHeading title="// Projects" />

      <div className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.priority} data={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
