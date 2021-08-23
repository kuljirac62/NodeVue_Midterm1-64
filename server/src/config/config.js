module.exports = {
    port:8081,
    db:{
        database: process.env.DB_NAME || 'TaxiDriverDb',
        user: process.env.DB_User || 'root',
        password: process.env.DB_PASS || '',
        options:{
            dialect: process.env.DIALEC || 'sqlite',
            storage: './TaxiDriver-db.sqlite'
        },
    },
    authentication:{
        jwtSecret: 'nodejs vuejs'
    }
}