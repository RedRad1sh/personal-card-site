export const env = {
    basename:   process.env.REACT_APP_LANDING_APP_BASENAME || '/',
    backendUrl:     process.env.REACT_APP_LANDING_APP_BACKEND_URL  || 'https://devradish.tech/',
    isDev:      process.env.NODE_ENV === 'development',
  };
console.log(env)