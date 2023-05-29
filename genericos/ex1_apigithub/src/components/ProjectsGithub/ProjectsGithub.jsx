function ProjectsGithub(props) {
    return (
        <div className="projects">
            <h3>#{props.indice + 1} {props.name.toUpperCase()}</h3>
            <a href={props.htmlUrl} target="_blank">VEJA NO GITHUB</a>
        </div>
    )
}

export default ProjectsGithub