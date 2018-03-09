import React from "react"
import Link from "gatsby-link"
import "./ProjectContent.css"

const getProjectList = projectEdges =>
  projectEdges.map(projectEdge => ({
    url: projectEdge.node.url,
    tools: projectEdge.node.tools,
    name: projectEdge.node.name,
    description: projectEdge.node.description
  }))

class ProjectContent extends React.Component {
  render() {
    const projectList = getProjectList(this.props.projects)

    return (
      <div className="project-container">
        {projectList.map(project => {
          const { name, url, description, tools } = project

          return (
            <div className="project-card" key={name}>
              <div>
                <h4 className="project-name">
                  <Link to={url}>{name}</Link>
                </h4>
              </div>
              <section className="project-description">
                <p>{description}</p>
              </section>
              <span className="project-tools">{tools.join(", ")}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default ProjectContent
