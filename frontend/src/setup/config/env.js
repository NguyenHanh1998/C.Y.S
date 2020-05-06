import dotenv from 'dotenv'

//load .env
dotenv.config()

export const APP_URL = process.env.APP_URL

export const APP_URL_API = process.env.APP_URL_API

export const NODE_ENV = process.env.NODE_ENV

export const PORT = process.env.PORT || 3000