import Link from "next/link";
import {FaStar, FaCodeBranch, FaEye} from 'react-icons/fa'

async function fetchRepo(name){
    const respone = await fetch(`https://api.github.com/repos/mubbarikali/${name}`);
    const repo = await respone.json();
    return repo;

}


const Repo = async ({name}) => {
    const repo = await fetchRepo(name)
    console.log(repo);

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
    
      <div className="card-stats">
            <div className="card-stat">
            <span>
                <FaStar /> {repo.stargazers_count}
            </span>
            </div>

            <div className="card-stat">
              <span>
                  <FaCodeBranch /> {repo.forks_count}
              </span>  
            </div>

            <div className="card-stat">
              <span>
                  <FaEye /> {repo.watchers_count}
              </span>        
            </div>
      </div>
      
    </>
  
  )
}

export default Repo