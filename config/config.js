var config = {
    DATABASE_HOST: process.env.DATABASE_HOST?process.env.DATABASE_HOST:"52.230.40.117",
    DATABASE_NAME: process.env.DATABASE_NAME?process.env.DATABASE_NAME:"database",
    DATABASE_USER: process.env.DATABASE_USER?process.env.DATABASE_USER:"test@test.com",
    DATABASE_PASS: process.env.DATABASE_PASS?process.env.DATABASE_PASS:"test",
}

module.exports = config;