import { Pool, QueryResult } from 'pg';

const PG_URI: string = process.env.KEY;

const pool: Pool = new Pool({
    connectionString: PG_URI,
});

pool.query(
    `
    CREATE TABLE IF NOT EXISTS users(
        id SERIAL PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255)
    )
    `
)
.then((): void => {
    console.log('User table created');
})
.catch((err: Error): void=> {
    console.error('Error creating user table: ', err);
})

pool.query(
    `
    CREATE TABLE IF NOT EXISTS applications(
        id SERIAL PRIMARY KEY,
        date DATE,
        company_name VARCHAR(255),
        job_title VARCHAR(255),
        job_location VARCHAR(255),
        status VARCHAR(255),
        comments VARCHAR(255),
        users_id INTEGER REFERENCES users(id)
    )
    `
)
.then((): void => {
    console.log('Table for Apps created successfully');
})
.catch((err: Error): void => {
    console.error('Error in creating apps table: ', err);
})


export const query = (
    text: string,
    params: any[],
    callback: (err: Error, result: QueryResult<any>) => void
  ): void => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  };