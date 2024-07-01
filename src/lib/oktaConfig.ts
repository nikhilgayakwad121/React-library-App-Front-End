export const oktaConfig = {
    clientId: '0oah7cbto1opeoaYV5d7',
    issuer: 'https://dev-56099664.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}