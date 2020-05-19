export const loginGraphQL = `
  mutation login(
    $email: String!,
    $password: String!,
    $favLang: LangEnum,
  ) {
    response: login(
      input: {
        email: $email,
        password: $password,
        favLang: $favLang
      }
    ) {
      user: data {
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
        type
        avatar
        isPhoneVerified
        isEmailVerified
        token
        lastLoginAt
        blocked
        activated
        createdAt
        updatedAt
      }
    }
  }
`;