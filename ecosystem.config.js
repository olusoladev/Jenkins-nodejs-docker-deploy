module.exports = {
  apps: [
    {
      name: 'jenkins-hello-world',
      script: 'src/server.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
};
