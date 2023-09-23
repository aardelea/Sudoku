from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
CORS(app)
db = SQLAlchemy(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)


@app.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data['username']
    password = data['password']
    new_user = User(username=username, password=password)
    db.session.add(new_user)
    db.session.commit()
    return 'User created.'


@app.route('/get_users', methods=['GET'])
def get_users():
    users = User.query.all()
    for user in users:
        print(f"Username: {user.username}, Password: {user.password}")
    return "Check console for list of users", 200


@app.route('/reset_db', methods=['GET'])
def reset_db():
    db.session.query(User).delete()
    db.session.commit()
    return "Database has been reset"


if __name__ == '__main__':
    app.run(debug=True)
