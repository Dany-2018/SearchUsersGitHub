import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';





const UserProfile = ({ user }) => {
    if (!user) {
        return null;
    }
    
    return (
        <div class="card-group">
            <div class="card">
                <h5 class="card-title">{user.login}</h5>
                <img src={user.avatar_url} alt={user.login} className="card-img-top" />
            <div class="card-body">
                    <p className="card-text-create">{window.dateFns.format(new Date(user.created_at), 'MMMM do, yyyy')}</p>
            </div>
          </div>
            <div class="card2">
                <p className="card-title-name">{user.name}</p>
                <div class="row">
                    <div class="col-6">
                        <p class="card-location"><FontAwesomeIcon icon="fa-location-dot " /> {user.location}</p>
                    </div>
                    <div class="col-6">
                        <p className="card-twitter">@{user.twitter_username}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <p class="card-blog"><FontAwesomeIcon icon="rss" />
                            <a href="{user.blog}"> {user.blog}</a>
                        </p>
                    </div>
                </div>    
               
               
                <div class="card-body" id="follows">
                    <div class="row">

                        <div class="col-4">
                            <h6>REPOS</h6>
                            <FontAwesomeIcon icon="code-branch" />
                            <p class="card-public_repos">{user.public_repos}</p>
                        </div>
                        <div class="col-4">
                            <h6>FOLLOWERS</h6>
                            <FontAwesomeIcon icon="users" />
                            <p class="card-followers">{user.followers}</p>
                        </div>
                        <div class="col-4">
                            <h6>FOLLOWING</h6>
                            <FontAwesomeIcon icon="user-plus" />
                            <p class="card-following">{user.following}</p>
                        </div>
                       
                    </div>
             
            </div>
          </div>
        </div>
        

        
    );
};

export default UserProfile;




