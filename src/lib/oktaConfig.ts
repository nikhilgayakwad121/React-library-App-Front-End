export const oktaConfig = {
    clientId: '0oajo4pcfxuViem3I5d7',
    issuer: 'https://dev-56099664.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}