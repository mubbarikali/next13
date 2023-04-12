async function fetchRepos(){
    const response = await fetch('https://api.github.com/users/mubbarikali/repos');
    const repos =  await response.json();
    return repos;
}

const RepoPage = async () => {
    const repos = await fetchRepos();

  return (
    <>
    
    <div>RepoPage</div>
    <p>{repos.map(repo=>repo.name)}</p>

    </>
    
  )
}

export default RepoPage