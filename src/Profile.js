import React from 'react';

const Profile = ({user}) => (
        <div className="row">
            <div className="col-md-4">
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={user.avatar_url} />
                    <ul className="profile__div profile__flush">
                        <li className="profile--item">
                            <b>Repositórios:</b>&nbsp;
                            <span className="badge bg-success">{user.public_repos}</span>
                        </li>
                        <li className="profile--item">
                            <b>Seguidores:</b>&nbsp;
                            <span className="badge bg-primary">{user.followers}</span>
                        </li>
                        <li className="profile--item">
                            <b>Seguindo:</b>&nbsp;
                            <span className="badge bg-info">{user.following}</span>
                        </li>
                    </ul>
                    <br/>
                    <div className="card-body">
                        <a href={`https://github.com/${user.login}`} className="btn btn-primary btn-block">
                            <b>Ver Perfil</b>
                        </a>
                    </div>
                </div>
            </div>
        </div>
);

export default Profile;
