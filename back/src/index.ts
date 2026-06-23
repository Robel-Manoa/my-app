import app from './app'
import config from './infrastructure/config'

const port = config.port || 3001

app.listen(port, () => {
  console.log(`Internal Portal backend running on http://localhost:${port}`)
})
