export const currentUserGraphQL = `
  query {
    response: getCurrentUser {
      currentUser: data {
        id
        fName
        lName
        email
        birthDate
        favLang
        gender
        phone
        wallet
        addresses {
          id
          address
          suburb
          postalCode
          city
          country
        }
        userSocialAccounts {
          provider
          providerId
          createdAt
          updatedAt
        }
        type
        role {
          id
          group
          permissions
        }
        avatar
        isEmailVerified
        isPhoneVerified
        token
        lastLoginAt
        blocked
        activated
        updatedAt
        createdAt
      }
    }
  }
`