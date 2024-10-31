# gives acess to Flask and views.py file
# Flask is a python module you to host a webpage and write backend code.
from flask import Flask
from views import views
import os 

#intiliaze application
#__name__ = built in var which holds name of python file   
app = Flask(__name__,template_folder = "templates", static_folder = "static")

#blue prints = every single webpage you can acess 
#/views = part of the ling that we put before  webpage link
app.register_blueprint(views,url_prefix = "/views")



imagesfolder = "static/images"
os.makedirs(imagesfolder,exist_ok = True)
app.config["image_folder"] = imagesfolder


if __name__ == "__main__": 
    #port = 8000 - local host port that hosts websites on home network
    app.run(debug = True, port = 8000)