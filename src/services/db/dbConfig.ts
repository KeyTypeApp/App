export const dbConfig = {
    dbname : process.env.POSTGRES_DB!,
    dbuser : process.env.POSTGRES_USER!,
    dbpass : process.env.POSTGRES_PASSWORD!,
    dburl : process.env.DATABASE_URL
}