import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
     mutation Login($identifier: String!, $password: String!) {
      login(input: { identifier: $identifier, password: $password }) {
        jwt
        user{
          id
          username
          confirmed
          role{
            type
          }
        }
      }
    }
    `

export const REGISTER_TIME_MUTATION = gql`
  mutation RegisterTime($user: ID!, $timeRegistered: DateTime!) {
    createRegisteredTime(
      input: { data: { user: $user, timeRegistered: $timeRegistered } }
      ) {
      registeredTime {
        timeRegistered
      }
    }
  }
`
export const DASHBOARD_REGISTERS_QUERY = gql`
  query RegisteredTimes{
    registeredTimes(limit: 5){
      timeRegistered
      user{
        name
        id
      }
    }
  }
 `

export const MY_REGISTERS_QUERY = gql`
query MyRegisters($id: ID!){
  registeredTimes(limit:5 where: {user: {id: $id}}){
    timeRegistered
    user{
      name
      id
    }
  }
}
`
