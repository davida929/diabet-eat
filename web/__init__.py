from flask import Flask 

def create_app():
    app = Flask(__name__)
    from chat import chat 
    
    app.register_blueprint(chat, url_prefix='/')
    
    return app 

if __name__ == '__main__':
    t = create_app()
    t.run(debug=True)