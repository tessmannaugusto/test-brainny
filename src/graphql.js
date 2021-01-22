import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
     mutation Login($identifier: String!, $password: String!) {
      login(input: { identifier: $identifier, password: $password }) {
        jwt
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
export const MY_REGISTERS_QUERY = gql`
      query MyRegisters($identifier: String!, $password: String!) {
        login(input: { identifier: $identifier, password: $password }) {
          jwt
        }
      }
    `
