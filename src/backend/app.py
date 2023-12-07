from flask import Flask, request, jsonify
import boto3
from botocore.exceptions import NoCredentialsError

app = Flask(__name__)

AWS_ACCESS_KEY = ''
AWS_SECRET_KEY = ''
AWS_BUCKET_NAME = ''
AWS_REGION = ''

def sendToS3(arquivo, nome_arquivo):
    s3 = boto3.client('s3', aws_access_key_id=AWS_ACCESS_KEY, aws_secret_access_key=AWS_SECRET_KEY, region_name=AWS_REGION)

    try:
        s3.upload_fileobj(arquivo, AWS_BUCKET_NAME, nome_arquivo)
        return True
    except FileNotFoundError:
        return False
    except NoCredentialsError:
        return False

@app.route('/upload', methods=['POST'])
def upload_arquivo():
    if 'file' not in request.files:
        return jsonify({'erro': 'Nenhum arquivo enviado'}), 400

    arquivo = request.files['file']

    if arquivo.filename == '':
        return jsonify({'erro': 'Nome de arquivo inválido'}), 400

    try:
        sent = sendToS3(arquivo, arquivo.filename)
        if sent:
            return jsonify({'mensagem': 'Arquivo enviado com sucesso para o S3'}), 200
        else:
            return jsonify({'erro': 'Erro ao enviar arquivo para o S3'}), 500
    except Exception as e:
        return jsonify({'erro': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
