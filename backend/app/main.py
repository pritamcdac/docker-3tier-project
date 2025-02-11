from flask import Flask, jsonify, Response
from pymongo import MongoClient
from bson import json_util

app = Flask(__name__)

# Setup MongoDB connection
client = MongoClient('mongodb://mongodb-container:27017/')
db = client['mydatabase']  # Replace with your database name

@app.route('/data', methods=['GET'])
def get_data():
    # Retrieve data from MongoDB collection
    data = db.collection_name.find()  # Replace with your collection name
    
    # Use json_util.dumps to serialize MongoDB data types including ObjectId
    return Response(
        json_util.dumps(data),
        mimetype='application/json'
    )

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

