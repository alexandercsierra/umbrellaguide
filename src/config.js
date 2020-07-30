const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const ISSUER = process.env.REACT_APP_ISSUER
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || true;

export default {
    oidc: {
      clientId: CLIENT_ID,
      issuer: ISSUER,
      redirectUri: 'http://localhost:3000/implicit/callback',
      scopes: ['openid', 'profile', 'email'],
      pkce: true,
      disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
    },
    resourceServer: {
      messagesUrl: 'http://localhost:3000/api/messages',
    },
  };