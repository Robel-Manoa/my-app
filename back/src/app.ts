import express from 'express'
import routes from './adapters/routes'
import { errorHandler } from './infrastructure/middleware/errorHandler'
import { authMock } from './infrastructure/middleware/authMock'
import { requestLogger } from './infrastructure/middleware/requestLogger'

const app = express()

app.use(express.json())
app.use(requestLogger)
app.use(authMock)

app.use('/api', routes)

app.use(errorHandler)

export default app
