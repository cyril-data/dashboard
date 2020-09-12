# Dashboard
_Flask - react app_

Dashboard Flask +  react + bootstrap dans le cadre de la formation data scientist d'openclassroom

## Developpement : 

### Pré-requis
- conda
- node js

### Cloner le repo et entrer dans la branch develop

Dans un terminal, executez les commandes : 

``git clone https://github.com/cyril-data/dashboard/ dashboard``

``cd dashboard``

``git checkout remotes/origin/develop``

### Lancer le serveur flask

``conda create --yes -n python_env_dashboard python=3``

``conda activate python_env_dashboard``

``pip install -r requirements.txt``

``python api/api.py``

Le serveur sera accessible sur le port http://localhost:5000/

### Lancer l'application client

Dans un autre terminal à la racine du projet lancer : 

``cd frontend``

``npm install``

``npm start``

L'application en mode developpement sera lancée automatiquement sur http://localhost:3000/



## Production : sur branch master


## Déploiement : 

[dashboard-heroku-react-flask.herokuapp.com]


## License

Ce projet est sous licence ``Licence MIT`` - voir le fichier [LICENSE.md](LICENSE.md) pour plus d'informations

