//https://storage.googleapis.com/tm-model/EEWqfeXnT/model.json
synth = window.speechSynthesis;

classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/EEWqfeXnT/model.json",modelReady)
function modelReady(){
    console.log("Modelo Pronto :D");
}
function classificar(){
    img = document.getElementById("selfie");
    classifier.classify(img, gotResults);
}
Webcam.set({
    width:300,height:300,imageformat:'png',pngQuality:90
})
camera = document.getElementById("webcam")
Webcam.attach(camera)
function TirarFoto(){
    Webcam.snap((uri)=>{
        document.getElementById("foto").innerHTML = "<img id='selfie'src="+uri+">"
    })
}
function gotResults(erro,result){
    
}