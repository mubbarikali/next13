import Link from "next/link";

async function fetchRepoDir(name){
    await new Promise((resolve)=>setTimeout(resolve, 1000));
    
    const respone = await fetch(`https://api.github.com/repos/mubbarikali/${name}/contents`, {
        next: {
            revalidate: 120,
        },
    });    
    const dirs = await respone.json();
    return dirs;
}

const RepoDirs = async ({name}) => {
  const contents = await fetchRepoDir(name);
  const dirs = contents.filter((content)=>(content.type === 'dir'));
    return (
    <>
    <h3>Dirs</h3>
    <ul>
        {dirs.map((dir)=>(
            <li key={dir.path}>
                <Link href={`code/repos/${name}/${dir.path}`}>
                    {dir.path}
                </Link>
            </li>
        ))}
    </ul>
    </>
  )
}

export default RepoDirs