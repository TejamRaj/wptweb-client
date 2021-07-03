export const environment = {
  production: true,
  apiUrl: 'https://wotbackend.azurewebsites.net/api/',
  openIdConnectSettings: {
    authority: 'https://wot-idp.azurewebsites.net/',
    client_id: 'wpt-webclient',
    redirect_uri: 'https://wot-idp.azurewebsites.net/signin-oidc',
    scope: 'openid profile roles workplaceontourapi',
    response_type: 'id_token token',
    post_logout_redirect_uri:'https://wot.azurewebsites.net/',
    automaticSilentRenew: true,
    silent_redirect_uri: 'https://wot-idp.azurewebsites.net/redirect-silentrenew'
    
  }
};
