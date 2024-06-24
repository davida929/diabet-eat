from flask import Blueprint, render_template

chat = Blueprint('chat', __name__)
@chat.route('/')
def msg():
    return render_template("chat.html")
