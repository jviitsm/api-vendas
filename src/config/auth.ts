import environment from './environment';

export default {
  jwt: {
    secret: environment.jwtSecret,
    expiresIn: '1d',
  },
};
