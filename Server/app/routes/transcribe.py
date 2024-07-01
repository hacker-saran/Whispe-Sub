from flask import request, jsonify
import os
import torch
import ffmpeg
import whisper
import json

UPLOAD_FOLDER = 'uploads'
RESULT_FOLDER = 'results'

if torch.cuda.is_available():
    device = torch.device("cuda")
    print("Current device = GPU")
else:
    device = torch.device("cpu")
    print("Current device = CPU")

# Ensure result directory exists
os.makedirs(RESULT_FOLDER, exist_ok=True)

# Extract audio from video
def extract_audio(input_video):
    extracted_audio = os.path.join(UPLOAD_FOLDER, 'extracted_audio.wav')
    stream = ffmpeg.input(input_video)
    stream = ffmpeg.output(stream, extracted_audio, loglevel="quiet")
    ffmpeg.run(stream, overwrite_output=True)
    return extracted_audio

# Load Whisper model
model = whisper.load_model('tiny')
print("Model loaded..!")

def register_transcribe_route(app):
    @app.route('/result', methods=['GET'])
    def get_result():
        filename = request.args.get('filename')
        if not filename:
            return jsonify({"error": "No filename provided"}), 400

        file_path = os.path.join(UPLOAD_FOLDER, filename)
        if not os.path.exists(file_path):
            return jsonify({"error": "File not found"}), 404

        # Extract audio from the uploaded video
        extracted_audio = extract_audio(file_path)
        print("Audio extracted..!")

        # Feed audio to model
        audio = whisper.load_audio(extracted_audio)

        # Transcribe audio
        result = whisper.transcribe(model, audio, word_timestamps=True, verbose=False)
        print("Transcription done..!")

        # Create a new dictionary with only the fields we're interested in
        output = [{'text': segment['text'], 'start': segment['start'], 'end': segment['end']} for segment in result['segments']]
        print("Output created..!")

        # Write output to a JSON file
        output_file = os.path.join(RESULT_FOLDER, 'output.json')
        with open(output_file, 'w') as f:
            json.dump(output, f)
        print("Output written to file..!")

        return jsonify(output), 200