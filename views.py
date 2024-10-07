from flask import Blueprint, render_template

views = Blueprint(__name__, "views")

@views.route("/")
def home():
    return render_template("index.html")

@views.route("/donate")
def donate():
    return render_template("donate.html")

@views.route("/deliver")
def deliver():
    return render_template("deliver.html")

@views.route("/login")
def login():
    return render_template("login.html")

@views.route("/signup")
def signup():
    return render_template("signup.html")