import { useEffect } from 'react'

const App = () => {

useEffect(() => {
    const getRepos = async() => {
        const url = "https:ghapi.huchen.dev/repositories?since=monthly"
        const resp = await fetch(url)
        const body = await resp.json()
        console.log(body)
    }

    getRepos()
}, [])    

  return (
    <div>App</div>
  )
}

export default App