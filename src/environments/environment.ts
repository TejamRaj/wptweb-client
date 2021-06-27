

export const environment = {
  production: false,
  apiUrl: 'https://localhost:44301/api/',
  openIdConnectSettings: {
    authority: 'https://localhost:5001/',
    client_id: 'wpt-webclient',
    redirect_uri: 'https://localhost:4200/signin-oidc',
    scope: 'openid profile roles workplaceontourapi',
    response_type: 'id_token token',
    post_logout_redirect_uri:'https://localhost:4200/',
    automaticSilentRenew: true,
    silent_redirect_uri: 'https://localhost:4200/redirect-silentrenew'
    
  }
};

