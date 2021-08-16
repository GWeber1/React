import React from 'react';

const Repo = ({repo}) => (
    <div className="card card-body mb-2">
        <div className="row">
            <div className="col-md-6 repos">
                <b><span href="#" target="_blank" style={{color: '#fff'}}>{repo.name}</span></b>
            </div>
            <div className="col-md-6 repo__div repo__flush">
                <br/>
                <span className="badge bg-primary repo--item ">Stars: {repo.stargazers_count}</span>
                <span className="badge bg-secondary repo--item ">Watch: {repo.watchers_count}</span>
                <span className="badge bg-success repo--item ">Forks: {repo.forks_count}</span>
            </div>
        </div>
    </div>
);

export default Repo;