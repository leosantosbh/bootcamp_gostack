module.exports = {
   dialect: 'postgres',
   host: 'localhost',
   username: 'postgres',
   password: 'mettapp',
   database: 'db_mettapp',
   define: {
      timestamp: true,
      underscored: true,
      unserscoresAll: true,
   },
};
