import axios from 'axios'


export const baseUrl="https://bayut.p.rapidapi.com"
export  const fetchApi= async (url)=>{
const {data}=await axios.get((url),{
    headers: {
        'x-rapidapi-host': 'bayut.p.rapidapi.com',
        'x-rapidapi-key': 'fbc08597a6mshbb085564c74ba79p13484fjsn81105f3bdb35'
      }
})
return data
}