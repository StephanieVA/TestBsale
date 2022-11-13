import {config} from 'dotenv'

config()

export const PORT = process.env.PORT || 3000
export const DB_HOST = process.env.DB_HOST || 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com'
export const DB_USER = process.env.DB_USER || 'bsale_test'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'bsale_test'
export const DB_DATABASE = process.env.DB_DATABASE || 'bsale_test'