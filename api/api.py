import time
from flask import Flask, request, render_template
import pickle
import numpy as np


app = Flask(__name__)

THR_OPTI = 0.5172413793103449

data = pickle.load(open('data.sav', 'rb'))
print("data loaded")

loaded_model = pickle.load(open('finalized_model.sav', 'rb'))
print("model loaded")

y_proba = loaded_model.predict_proba(data)
print("y_proba calculated")


def predict(y_pred_proba, thr = THR_OPTI) : 
  y_pred = []
  for prob in y_pred_proba[:, 1] : 
    if prob>= thr : y_pred.append(int(1))
    else : y_pred.append(int(0))
  return y_pred

y_pred = predict(y_proba)
print("y_pred calculated")

@app.route('/dashboard')
def get_current_pred():
  
  return {'loaded': len(y_pred)}


@app.route('/dashboard/id', methods=['POST'])
def my_form_post():
  print("requette ID arrivée")

  client_id = int(request.json)
  print("clientId", client_id, type(client_id))

  return {'pred_id': y_pred[client_id]}

if __name__ == "__main__":
  app.run(debug=True)