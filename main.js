// https://teachablemachine.withgoogle.com/models/LgpxFLtfF/


var cat = 0;
var dog = 0;
var background = 0;
var cow = 0;

function startClassification() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });

    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/LgpxFLtfF/model.json", modelReady);

}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results)
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;

        document.getElementById("count").innerHTML = "Sound Detected Dog-" + dog + " Cat" + cat + "cow" + cow;
        document.getElementById("result_label").innerHTML = "Detected voice is of" + results[0].label;

        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
        document.getElementById("count").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"

        img1 = document.getElementById("animal1");
        img2 = document.getElementById("animal2");
        img3 = document.getElementById("animal3");
        img4=document.getElementById("animal4");



        if (results[0].label == "Barking") {
            img1.src = "dogs.gif";
            img2.src = "cats.jpg"
            img3.src = "cows;.jpg";
            img4.src="background.jpg"
        } else if(results[0].label == "Mooing") 
        {
            img1.src = "dogs.jpg";
            img2.src = "cats.jpg";
            img3.src = "cows;.gif";
            img4.src="background.jpg"
        }
        else if(results[0].label=="Meowing") {
            img1.src="dogs.jpg";
            img2.src="cats.gif"
            img3.src="cows;.jpg";
            img4.src="background.jpg"

        }
        else{
            img1.src="dogs.gif";
            img2.src="cats.jpg"
            img3.src="cows;.jpg";
            img4.src="background.gif"
        }

    }


}