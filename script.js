let speech=new SpeechSynthesisUtterance();
// for diffrent voices
let voices=[];
let voiceselect=document.querySelector("select");
window.speechSynthesis.onvoiceschanged=()=>{
    voices=window.speechSynthesis.getVoices();
    //by default it speaks 1st voice
    speech.voice=voices[0];
    //display each voices in dropdown but not speak
    voices.forEach((voice,i)=>(voiceselect.options[i]=new Option(voice.name,i)))
};
voiceselect.addEventListener("change",()=>{
    speech.voice=voices[voiceselect.value];
})
// for speaking
document.querySelector("button").addEventListener("click",()=>{
    speech.text=document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})