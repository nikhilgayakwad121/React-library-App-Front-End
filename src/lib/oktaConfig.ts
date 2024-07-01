export const oktaConfig = {
    clientId: 'xxx',
    issuer: 'xxx',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}