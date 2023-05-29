import { useEffect, useState } from "react";
import ProjectsGithub from "../ProjectsGithub/ProjectsGithub";

function Github(dates) {
    const dados = dates;
    const props = dados.dates;

    const [repositorio, setRepositorio] = useState([]);

    useEffect(() => {
        const repoUrl = "https://api.github.com/users/devamauryjunior/repos";
        async function getDatesRepos() {
            const dates = await fetch(repoUrl);
            const jsonDates = await dates.json();
            setRepositorio(jsonDates);
        }
        getDatesRepos()
    }, [])

    return (
        <div className="profile">
            <nav className="navigation">
                <div className="nav1">
                    <img src={props.avatar_url} alt="Avatar" className="nav1-img" />
                    
                </div>
                <a href={props.html_url} target="_blank">
                    Meu GitHub
                </a>
            </nav>
            <div className="container">
                <div className="my-projects">
                    <h1>Meus projetos</h1>
                    <h2>{props.login}</h2>
                </div>
                {
                    repositorio.map((repos, idx) => <ProjectsGithub key={idx} indice={idx} name={repos.name === "devamauryjunior" ? "devamauryjunior - readme" : repos.name} htmlUrl={repos.html_url}/>)
                }
            </div>
        </div>
    )
}

export default Github