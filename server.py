from flask import Flask, render_template, redirect, request

server = Flask(__name__)

@server.route('/')
def index():
    return render_template('under.html')
@server.route('/preview/status/website/geb')
def preview():
    return render_template('index.html')

if __name__ == '__main__':
    server.run(debug=True)