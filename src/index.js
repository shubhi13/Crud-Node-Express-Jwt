const express = require("express")
const logger = require("morgan")
const baseRouter = require("./routes/index")

const app = express()

app.set("secretKey", "hcuahicudhuihfciuhXXYcbyhdbauAAASSSSDdbaiu&22212") // jwt secret token

app.use(logger("dev"))
app.use(
  express.urlencoded({
    extended: false,
  })
)
app.use(express.json())

app.use("/api", baseRouter)

// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use("*", (req, res, next) => {
  if (Object.keys(res.locals).length) return next()
  else {
    res.locals.status = 404
    res.locals.error = "NOT FOUND"
    return next()
  }
})

// handle errors
app.use((req, res, next) => {
  console.log(JSON.stringify(res.locals))

  if (Object.keys(res.locals).length && res.locals.status) {
    res.status(res.locals.status).json({
      message: res.locals.error,
    })
  } else {
    res.status(500).json({
      message: Object.keys(res.locals).length
        ? res.locals.error
        : "Something looks wrong :( !!!",
    })
  }
})

app.listen(3000, () =>
  console.log(`Express server currently running on port 3000`)
)
