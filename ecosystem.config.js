module.exports = {
  apps: [
    {
      name: "twitter",
      script: "./bin/www",
      instances: 8,
      autorestart: true,
      watch: ".",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
