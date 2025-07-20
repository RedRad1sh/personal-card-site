export const env = {
    basename:   process.env.LANDING_APP_BASENAME || '/',
    backendUrl:     process.env.LANDING_APP_BACKEND_URL  || 'http://localhost:8085',
    isDev:      process.env.NODE_ENV === 'development',
  };