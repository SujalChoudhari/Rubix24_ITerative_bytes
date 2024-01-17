from roboflow import Roboflow
import supervision as sv
import cv2
import gradio as gr

def predict_with_roboflow(input_image):
    if isinstance(input_image, str):
        image = cv2.imread(input_image)
    else:
        image = input_image

    rf = Roboflow(api_key="W9VikDr39oibIVgg5UOS")
    project = rf.workspace().project("ripeness-fruits")
    model = project.version(2).model

    result = model.predict(image, confidence=40, overlap=30).json()

    labels = [item["class"] for item in result["predictions"]]

    detections = sv.Detections.from_roboflow(result)

    label_annotator = sv.LabelAnnotator()
    bounding_box_annotator = sv.BoxAnnotator()

    annotated_image = bounding_box_annotator.annotate(
        scene=image, detections=detections)
    annotated_image = label_annotator.annotate(
        scene=annotated_image, detections=detections, labels=labels)

    return annotated_image


iface = gr.Interface(
    fn=predict_with_roboflow,
    inputs=gr.Image(),
    outputs="image",
    live=True,
    title="Fruit Ripeness Prediction",
    description="Predict the ripeness of fruits in an image.",
)


iface.launch()
