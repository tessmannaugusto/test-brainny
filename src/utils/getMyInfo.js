import {useQuery} from '@apollo/client'
import {ME_QUERY} from '../graphql'


export const GetMyInfo = () => {
        
    const {loading, error, data} = useQuery(ME_QUERY, {
        fetchPolicy: "network-only"
      })

    if(loading) return null
    if(error) return <h1>Query error!</h1>

    localStorage.setItem('userId', data.me.id);
    localStorage.setItem('userRole', data.me.role.name);
    localStorage.setItem('userName', data.me.username)
}