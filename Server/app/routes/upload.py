# from flask import Flask, request, jsonify
# import os

# def upload_file(app):
#     UPLOAD_FOLDER = 'uploads'
#     app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
#     if not os.path.exists(UPLOAD_FOLDER):
#         os.makedirs(UPLOAD_FOLDER)

#     @app.route('/upload', methods=['POST'])
#     def upload_file():
#         if 'video' not in request.files:
#             return jsonify({"error": "No video part"}), 400

#         file = request.files['video']
#         if file.filename == '':
#             return jsonify({"error": "No selected file"}), 400

#         if file:
#             filename = file.filename
#             file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
#             file.save(file_path)
#             print(f"File uploaded successfully: {filename}")
#             # Process the video file as needed
#             return jsonify({"message": "File uploaded successfully", "filename": filename}), 200



from flask import request, jsonify
import os

UPLOAD_FOLDER = 'uploads'

# Ensure upload directory exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def register_upload_route(app):
    @app.route('/upload', methods=['POST'])
    def handle_upload():
        if 'video' not in request.files:
            return jsonify({"error": "No video part"}), 400

        file = request.files['video']
        if file.filename == '':
            return jsonify({"error": "No selected file"}), 400

        if file:
            filename = file.filename
            file_path = os.path.join(UPLOAD_FOLDER, filename)
            file.save(file_path)
            print("Video uploaded..!")
            return jsonify({"message": "File uploaded successfully", "filename": filename}), 200