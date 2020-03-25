import app from './app'

const port = process.env.PORT || 2000
app.get('/', (request, response) => {
  response.status(200).json({
    status: 'success'
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
