export default () => ({
  request: {
    method: "GET",
    url: "https://reqres.in",
    path: "/api/users",
    label: "",
    auth: "None",
    httpUser: "",
    httpPassword: "",
    passwordFieldType: "password",
    bearerToken: "",
    accessToken: "",
    headers: [],
    params: [],
    bodyParams: [],
    rawParams: "",
    rawInput: false,
    requestType: "",
    contentType: ""
  },
  gql: {
    url: "https://rickandmortyapi.com/graphql",
    headers: [],
    query: ""
  },
  oauth2: {
    accessTokenName: "",
    grantType: "code",
    callbackUrl: "",
    authUrl: "",
    accessTokenUrl: "",
    clientId: "",
    clientSecret: "",
    scope: "",
    state: "",
    clientAuth: "header"
  }
});
