const environment = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'api-vendas-secret',
  APP_WEB_URL: process.env.APP_WEB_URL || 'http://localhost:3000',
};

export default environment;
