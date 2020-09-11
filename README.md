# Dashboard
_Flask - react app_

[![forthebadge](http://dashboard-heroku-react-flask.herokuapp.com/)  [![forthebadge](http://forthebadge.com/images/badges/powered-by-electricity.svg)](http://forthebadge.com)

Dashboard Flask +  react + bootstrap dans le cadre de la formation data scientist d'openclassroom

## Developpement : 

Entrez ici les instructions pour bien débuter avec votre projet...

### Pré-requis
- conda
- node js

### clone le repo et entrer dans la branch develop

Dans un terminal, executez les commandes : ``
git clone https://github.com/cyril-data/dashboard/ dashboard

cd dashboard

git checkout remotes/origin/develop``

### lancer le serveur flask

``conda create --yes -n python_env_dashboard python=3

conda activate python_env_dashboard

pip install -r requirements.txt 

python api/api.py``

Le serveur sera accessible sur le port http://localhost:5000/

### lancer l'application client

Dans un autre terminal à la racine du projet lancer : 

``cd frontend

npm install

npm start``

L'application en mode developpement sera lancée automatiquement sur http://localhost:3000/

## Fabriqué avec

Entrez les programmes/logiciels/ressources que vous avez utilisé pour développer votre projet

_exemples :_
* [Materialize.css](http://materializecss.com) - Framework CSS (front-end)
* [Atom](https://atom.io/) - Editeur de textes

## Contributing

Si vous souhaitez contribuer, lisez le fichier [CONTRIBUTING.md](https://example.org) pour savoir comment le faire.


## License

Ce projet est sous licence ``exemple: WTFTPL`` - voir le fichier [LICENSE.md](LICENSE.md) pour plus d'informations

