export const oktaConfig = {
    clientId: '0oajo4pcfxuViem3I5d7',
    issuer: 'https://dev-56099664.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}

// export const oktaConfig = {
//     clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
//     issuer: process.env.REACT_APP_OKTA_ISSUER,
//     redirectUri: process.env.REACT_APP_OKTA_REDIRECT_URI,
//     scopes: process.env.REACT_APP_OKTA_SCOPES.split(','),
//     pkce: process.env.REACT_APP_OKTA_PKCE === 'true',
//     disableHttpsCheck: process.env.REACT_APP_OKTA_DISABLE_HTTPS_CHECK === 'true',
// }