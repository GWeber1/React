import React from 'react';

const Repo = ({repo}) => (
    <div className="card card-body mb-2">
        <div className="row">
            <div className="col-md-6 repos">
                <b><a href="repo.html_url" target="_blank" style={{color: '#fff'}}>{repo.name}</a></b>
            </div>
            <div className="col-md-6 list-group list-group-flush">
                <br/>
                <span className="badge bg-primary list-group-item">Stars: {repo.stargazers_count}</span>
                <span className="badge bg-secondary list-group-item">Watch: {repo.watchers_count}</span>
                <span className="badge bg-success list-group-item">Forks: {repo.forks_count}</span>
            </div>
        </div>
    </div>
);

export default Repo;