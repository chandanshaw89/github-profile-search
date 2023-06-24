import React from 'react'

const GithubProfileDetails = ({data}) => {
  return (
   <>
    <div className="card">
        <div className="card-header">
            <span className='badge bg-success mx-2 '>{data.followers} Followers</span>
            <span className='badge bg-warning mx-2 '>{data.Public_repos} Repos</span>
            <span className='badge bg-danger mx-2 '>{data.Public_gists} Gists</span>
            <span className='badge bg-primary mx-2'>{data.following} Following</span>

        </div>
        <div className="card-body">
            <div className="list-group">
                <div className="list-group-item">
                    NAME : <span className='fw-bold'>{data.name}</span>
                </div>
                <div className="list-group-item">
                    Email : <span>{data.email}</span>
                </div>
                <div className="list-group-item">
                Location : <span>{data.location}</span>
                </div>
                <div className="list-group-item">
                Company : {data.company}
                </div>
                <div className="list-group-item">
                Blog :{" "}
              <span>
                <a href={data.blog}>Click</a>
              </span>
                </div>
                <div className="list-group-item">
                Member since :  
              <span>
                {data.created_at}
              </span>
                </div>

            </div>
        </div>
    </div>
   </>
  )
}

export default GithubProfileDetails