import { useEffect } from 'react'
import { atom, useRecoilState } from 'recoil'

// useRecoilState is like useState hook
const reposState = atom({
    key: "repos", // unique ID
    default: []
})

const App = () => {
// set two variables repos and setRepos just like with useState hook 
const [repos, setRepos] = useRecoilState(reposState)   

useEffect(() => {
    const getRepos = async() => {
        const url = "https:ghapi.huchen.dev/repositories?since=monthly"
        const resp = await fetch(url)
        const body = await resp.json()
        // get response from json API request
        setRepos(body)
    }

    getRepos()
}, [])    

  return repos.map((repo) => (
   <div key={repo.url}>
     <a href={repo.url}>
         {repo.author} / {repo.name}
     </a>
     <div>{repo.description}</div>
     <div>
         {repo.stars} stars / {repo.forks} forks
     </div>
   </div>
  ))
}

export default App