# Import flask and datetime module for showing date and time
from flask import Flask, render_template , request
import datetime
# pip install flask_cors
from flask_cors import CORS
x = datetime.datetime.now()
# Initializing flask app
app = Flask(__name__)
CORS(app)


@app.route('/')
def starting():
    return render_template("", response=False)
@app.route('/getDataFromReact',methods=["POST"])
def setTime():
    if request.method == 'POST':
        print('Posting....')
    print('Wrong')

if __name__ == '__main__':
    app.run(debug=True)
    
    
    
# @app.route('/data',methods=["GET"])
# def get_time():
#     return {
#         'Name':"geek",
#         "Age":"22",
#         "Date":x,
#         "programming":"python"
#     }
#     # Running app