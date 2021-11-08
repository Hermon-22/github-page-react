import React from 'react'

function Repo({ resultRepos,repotitle }) {
    return (
        <div className='repoList'>
            <h5>{resultRepos.length} repositories</h5>
            <h4 className='repo'>{repotitle}</h4>
                {resultRepos && resultRepos.map(repo=>(

                    <div>
                        
                        <h6 key={repo.node_id}><a href={repo.html_url}target='_blank'rel="noreferrer">{repo.name} </a><br />{repo.description}</h6>
                    </div>
                    
                ))}
        </div>
    )
}
export default Repo