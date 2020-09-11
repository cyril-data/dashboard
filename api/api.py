import time
from flask import Flask, request, render_template
import pickle
import numpy as np
import h5py
import seaborn as sns
import os
from statsmodels.nonparametric.kde import KDEUnivariate
from flask_cors import CORS


flask_app = Flask(__name__, static_folder='../build', static_url_path='/')
# flask_app = Flask(__name__,)
CORS(flask_app)

path = "api/"

@flask_app.route('/')
def index():
    return flask_app.send_static_file('index.html')


THR_OPTI = 0.5172413793103449

data = pickle.load(open(path+'data_20ieme.sav', 'rb'))
print("data loaded")

loaded_model = pickle.load(open(path+'model_lgbm.sav', 'rb'))
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

knn = pickle.load(open(path+'knn_1_20ieme.sav', 'rb'))

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


@flask_app.route('/api/dashboard')
def get_current_pred():

  idx_clients = pickle.load(open(path+'idx_clients.sav', 'rb'))

  s = pickle.load(open(path+'data_20ieme.sav', 'rb'))
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



@flask_app.route('/api/dashboard/change', methods=['POST'])
def change_pred():
  print("requette ID arrivée")

  ClientFeature = request.json
  print("ClientFeature", ClientFeature)
  # y_proba = loaded_model.predict_proba(data)
  # print("y_proba calculated", y_proba)

  # y_pred = predict(y_proba)
  # print("y_pred calculated")



@flask_app.route('/api/dashboard/id', methods=['POST'])
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

# if __name__ == "__main__":
#   flask_app.run(host='0.0.0.0', debug=True)

  if __name__ == "__main__":
    flask_app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))