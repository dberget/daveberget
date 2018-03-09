import React from "react"
import Link from "gatsby-link"
import Img from "gatsby-image"
import "./ProjectContent.css"

const getProjectList = projectEdges =>
  projectEdges.map(projectEdge => ({
    url: projectEdge.node.url,
    tools: projectEdge.node.tools,
    image: projectEdge.node.image,
    name: projectEdge.node.name,
    description: projectEdge.node.description
  }))

class ProjectContent extends React.Component {
  render() {
    const projectList = getProjectList(this.props.projects)

    return (
      <div className="project-container">
        {projectList.map(project => {
          const { name, url, description, image, tools } = project

          return (
            <div className="project-card" key={name}>
              <img src={`./${image}`} alt="Logo" />
              <h4 className="project-name">
                <a target="_blank" href={url}>
                  <h4>{name}</h4>
                </a>
              </h4>
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
