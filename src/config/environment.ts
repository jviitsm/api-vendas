const environment = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || 'api-vendas-secret',
};

export default environment;
