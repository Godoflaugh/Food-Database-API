const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const path = require('path')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var fs = require('fs')
require('dotenv/config')
//Image processing
var multer = require('multer')
var imgModel = require('./models/User')

const { typeDefs, resolvers } = require('./schemas')
const db = require('./config/connection')

const PORT = process.env.PORT || 3001
const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// //EJS as templating engine
// app.set("view engine", "ejs")

// //Multer code for Image processing
// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '_' + Date.now())
//   }
// })

// var upload = multer({storage: storage})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
}

// //Get request handler that provies the HTML UI
// app.get('/', (req, res) => {
//   imgModel.find({}, (err, items) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('An error occurred', err);
//     }
//     else {
//       res.render('imagesPage', { items: items });
//     }
//   });
// });

// //Get request handler that provies the uploaded file
// app.post('/', upload.single('image'), (req, res, next) => {

//   var obj = {
//     name: req.body.name,
//     desc: req.body.desc,
//     img: {
//       data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//       contentType: 'image/png'
//     }
//   }
//   imgModel.create(obj, (err, item) => {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       // item.save();
//       res.redirect('/');
//     }
//   });
// });

// app.get('/', (req, res) => {
//   res.sendfile(path.join(__dirname, '../client/build/index.html'))
// })

const startApolloServer = async (typeDefs, resolvers) => {
  await server.start()
  server.applyMiddleware({ app })

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`)
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
    })
  })
}

startApolloServer(typeDefs, resolvers)