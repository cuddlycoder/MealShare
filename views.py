from flask import Blueprint, render_template,request
views = Blueprint(__name__, "views")

foods = []



@views.route("/")
def home():
    return render_template("index.html")

@views.route("/donate",methods = ["POST", "GET"])
def donate():
    global foods
    #recieve data from front end
    if request.method == "POST": 
        data = request.get_json()
        print(data)
        print(data["name"])
        image = request.files["image"]
        donatedfood = [data["name"],data["email"],data["meal-name"],data["meal-image"],data["meal-ingredients"],data["allergies"]]
        foods.append(donatedfood)
    return render_template("donate.html")

@views.route("/deliver", methods = ["POST", "GET"])
def deliver():
    #recieve data from front end
    if request.method == "POST":
        data = request.get_json()
        print(data)
    return render_template("deliver.html")

@views.route("/receive")
def receive():
    global foods
    #foods = [["apples","image","seed,skin,white stuff","fruit allergy"]]    
    return render_template("receive.html",meals = foods)

@views.route("/login")
def login():
    return render_template("login.html")

@views.route("/signup")
def signup():
    return render_template("signup.html")