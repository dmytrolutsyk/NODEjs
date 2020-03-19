
## Exercice 1
# Que fait le programme Node.js
Il affiche un message "hello word" sur un serveur http sur le port 3000
# Comment installer ?
```
1. Creer un fichier server.js
2. Coller: const express = require('express') const app = express()  app.get('/', function (req, res) {   res.send('Hello World!') })  app.listen(3000, function () {   console.log('Example app listening on port 3000!') }) 
3. Lancez: $ npm init
4. Lancez: $ npm install express --save
```
# Comment exécuter ?
Lancez: $ node server.js
# Comment tester ?
Lancez: $ curl -GET http://localhost:3000/

## Exercice 2
# Deployer l'app
app.get('/hello', function (req, res) {     if(req.query != undefined) {         res.send("Bonjour, " + req.query.nom+"!")     }else {         res.send("Quel est votre nom ?")     } })
# Mettre à jour le déploiement 
$ git push heroku master

# Ajouter un app.get
app.get('/hello', function (req, res) {})
