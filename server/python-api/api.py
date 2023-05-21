import mysql.connector
from flask import Flask, jsonify
import json

app = Flask(__name__)

def get_mysql_data():
    with open('config.json') as config_file:
        config = json.load(config_file)

    connection = mysql.connector.connect(**config)
    cursor = connection.cursor()

    query = "SELECT * FROM animals"
    cursor.execute(query)
    result = cursor.fetchall()

    cursor.close()
    connection.close()

    return result


# маршруты и функции представления API
@app.route('/api/animals', methods=['GET'])
def get_animals():
    result = get_mysql_data()
    return jsonify(result)

# запуск flask сервера
if __name__ == '__main__':
    app.run(port=8000)
