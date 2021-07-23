import React from 'react'

function Repo({resultRepos,repotitle}) {
    return (
        <div className='repoList'>
            <h4 className='repo'>{repotitle}</h4>
                {resultRepos && resultRepos.map(repo=>(
                    <h6 key={repo.node_id}><a href={repo.html_url}target='_blank'rel="noreferrer">{repo.name} </a><br />{repo.description}</h6>
                ))}
        </div>
    )
}
export default Repo