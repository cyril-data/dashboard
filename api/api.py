import time
from flask import Flask, request, render_template
import pickle
import numpy as np
import h5py
import seaborn as sns
import os


from flask_cors import CORS


# app = Flask(__name__, static_folder='../build', static_url_path='/')
app = Flask(__name__)
CORS(app)
# @app.route('/')
# def index():
#     return app.send_static_file('index.html')

THR_OPTI = 0.5172413793103449

data = pickle.load(open('data_20ieme.sav', 'rb'))
print("data loaded")

loaded_model = pickle.load(open('model_lgbm.sav', 'rb'))
print("model loaded")

y_proba = loaded_model.predict_proba(data)
print("y_proba calculated", y_proba)


def predict(y_pred_proba, thr = THR_OPTI) : 
  y_pred = []
  for prob in y_pred_proba[:, 1] : 
    if prob>= thr : y_pred.append(int(1))
    else : y_pred.append(int(0))
  return y_pred

y_pred = predict(y_proba)
print("y_pred calculated")

knn = pickle.load(open('knn_1_20ieme.sav', 'rb'))


# def knn(id_client) : 

#   path = "../bdd/"

#   idx_clients = pickle.load(open(path + 'idx/idx_clients.sav', 'rb'))


#   t_start = time.time()

#   nbr_nmatrix = 25
#   nbr_split_nmatrix = 10

#   nbr_sub = nbr_nmatrix * nbr_split_nmatrix 

#   nsub = "numero de la sub du client"
#   s_id = "numero de ligne de la sub du client"


#   for tab in np.arange(nbr_sub) : 
#     s = pickle.load(open(path + "idx/idx_split" + str(tab) + ".sav", 'rb'))

    
#     idx_d = np.where(s.values == id_client)[0]

#     if len(idx_d) == 1 : 
#       # print("on a stocké dans 's' uniquement les ID client des lignes de la sub : s_id. Dimension  =", np.shape(s))
      
#       nsub = tab
#       s_id = idx_d[0]

#       # print("le client est dans la sub" , nsub, " à la s_id", s_id)

#   s = pickle.load(open(path+ "idx/idx_split" + str(nsub) + ".sav", 'rb')) # on s = [s_id] du client

#   nmatrix = int(nsub / nbr_split_nmatrix) # numero de la matrix du client
#   c_id = s.index[s_id] # numero de colonne de la matrix du client

#   # print( "la ligne s_id:",s_id, "de la sub", nsub ,  "correspond à la colonne c_id:", c_id, "de la matrice", nmatrix)

#   col = idx_clients[nmatrix] # colonne matrix du client

#   # print("les colonnes de la matrix du client sont de dimension", np.shape(col))
#   # print("on confirme que le numéro du client est par les colonnes c_id: ", col[c_id], ", donc = au numero du client : ", id_client)
#   # print("on confirme que le numéro du client est par la sub s_id: ", s.iloc[s_id])

#   h5f = h5py.File(path + "h5/dist_split" + str(nsub) + ".h5",'r') # on charge la sub des distances entre les clients 
#   b = h5f['dist'][:]
#   dist = b[s_id,:] # on selectionne la ligne de la sub du client 
#   h5f.close()

#   # print("la ligne de la sub est de dimension ", np.shape(dist))
#   # print("la distance du client avec lui même devrait être nulle : ", dist[c_id])

#   idx_d_500_kkn = list(np.argpartition(dist,500))[0:500] # on selectionne les 500 clients les plus proches en distance sans ordre (dans la sub)
#   idx_knn_client = np.where(idx_d_500_kkn == c_id)[0][0] # on trouve dans cette liste knn non ordonné le c_id du client (dans la sub)
#   idx_d_500_kkn.pop(np.where(idx_d_500_kkn == c_id)[0][0]) # on enlève la distance du client avec lui même (0)

#   # print("on a trouvé les 499 plus proches voisins du client dans la sub ", np.shape(idx_d_500_kkn))

#   idx_500_kkn = col[idx_d_500_kkn]

#   # print("les ID des 10 clients parmis les 499 plus proches voisins sont : \n", idx_500_kkn[:10])

#   return idx_500_kkn

from statsmodels.nonparametric.kde import KDEUnivariate

def kde_statsmodels_u(y_data, x_grid, bandwidth=0.2, **kwargs):
    """Univariate Kernel Density Estimation with Statsmodels"""
    kde = KDEUnivariate(y_data)
    kde.fit(bw=bandwidth, **kwargs)
    return kde.evaluate(x_grid)

def density(pred , feature) : 
  x_grid = np.linspace(0, 1, 1000)
  y_data = data.loc[pred, feature]
  y = kde_statsmodels_u(y_data, x_grid, bandwidth=0.0075)

  return {"x":list(x_grid),"y":list(y)}


@app.route('/dashboard')
def get_current_pred():

  idx_clients = pickle.load(open('idx_clients.sav', 'rb'))

  s = pickle.load(open("data_20ieme.sav", 'rb'))
  nmatrix = 0
  c_id = s.index[0]
  col = idx_clients[nmatrix] # colonne matrix du client

  idx_pred_0 = [ idx for idx in col if y_pred[idx] == 0 ]
  idx_pred_1 = [ idx for idx in col if y_pred[idx] == 1 ]

  return {
    'loaded': {"size":len(y_pred), "THR_OPTI": THR_OPTI},
    'knn_pred_0': {
      "EXT_SOURCE_1" : density(idx_pred_0,"EXT_SOURCE_1"), 
      "EXT_SOURCE_2": density(idx_pred_0,"EXT_SOURCE_2"), 
      "EXT_SOURCE_3" : density(idx_pred_0,"EXT_SOURCE_3"), 
      "DAYS_EMPLOYED" : density(idx_pred_0,"DAYS_EMPLOYED"), 
      "DAYS_BIRTH" : density(idx_pred_0,"DAYS_BIRTH"), 
      "CREDIT_TERM" : density(idx_pred_0,"CREDIT_TERM")
    },
    'knn_pred_1': {
      "EXT_SOURCE_1" : density(idx_pred_1,"EXT_SOURCE_1"), 
      "EXT_SOURCE_2": density(idx_pred_1,"EXT_SOURCE_2"), 
      "EXT_SOURCE_3" : density(idx_pred_1,"EXT_SOURCE_3"), 
      "DAYS_EMPLOYED" : density(idx_pred_1,"DAYS_EMPLOYED"), 
      "DAYS_BIRTH" : density(idx_pred_1,"DAYS_BIRTH"), 
      "CREDIT_TERM" : density(idx_pred_1,"CREDIT_TERM")
    }}



@app.route('/dashboard/change', methods=['POST'])
def change_pred():
  print("requette ID arrivée")

  ClientFeature = request.json
  print("ClientFeature", ClientFeature)
  # y_proba = loaded_model.predict_proba(data)
  # print("y_proba calculated", y_proba)

  # y_pred = predict(y_proba)
  # print("y_pred calculated")



@app.route('/dashboard/id', methods=['POST'])
def my_form_post():
  print("requette ID arrivée")

  client_id = int(request.json)

  idx_knn = knn[client_id]
  idx_knn_pred_0 = [ idx for idx in idx_knn if y_pred[idx] == 0 ]
  idx_knn_pred_1 = [ idx for idx in idx_knn if y_pred[idx] == 1 ]

  return {
    'infoIdClient': {
      "y_pred" : y_pred[client_id], 
      "y_proba" : y_proba[client_id, 1],
      "EXT_SOURCE_1" : data.loc[client_id, "EXT_SOURCE_1"], 
      "EXT_SOURCE_2" : data.loc[client_id, "EXT_SOURCE_2"], 
      "EXT_SOURCE_3" : data.loc[client_id, "EXT_SOURCE_3"], 
      "DAYS_EMPLOYED" : data.loc[client_id, "DAYS_EMPLOYED"], 
      "DAYS_BIRTH" : data.loc[client_id, "DAYS_BIRTH"], 
      "CREDIT_TERM" : data.loc[client_id, "CREDIT_TERM"]
    },
    'knn_pred_0': {
      "EXT_SOURCE_1" : density(idx_knn_pred_0,"EXT_SOURCE_1"), 
      "EXT_SOURCE_2": density(idx_knn_pred_0,"EXT_SOURCE_2"), 
      "EXT_SOURCE_3" : density(idx_knn_pred_0,"EXT_SOURCE_3"), 
      "DAYS_EMPLOYED" : density(idx_knn_pred_0,"DAYS_EMPLOYED"), 
      "DAYS_BIRTH" : density(idx_knn_pred_0,"DAYS_BIRTH"), 
      "CREDIT_TERM" : density(idx_knn_pred_0,"CREDIT_TERM")
    },
    'knn_pred_1': {
      "EXT_SOURCE_1" : density(idx_knn_pred_1,"EXT_SOURCE_1"), 
      "EXT_SOURCE_2": density(idx_knn_pred_1,"EXT_SOURCE_2"), 
      "EXT_SOURCE_3" : density(idx_knn_pred_1,"EXT_SOURCE_3"), 
      "DAYS_EMPLOYED" : density(idx_knn_pred_1,"DAYS_EMPLOYED"), 
      "DAYS_BIRTH" : density(idx_knn_pred_1,"DAYS_BIRTH"), 
      "CREDIT_TERM" : density(idx_knn_pred_1,"CREDIT_TERM")
    }
   }

if __name__ == "__main__":
  # app.run(debug=True)
  app.run(host='0.0.0.0', debug=True)
  # app.run(host='0.0.0.0', debug=Fa0))