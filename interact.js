let socratesMsg = ["What is truth? How would one find it?", "What is the air speed velocity of an unladen swallow?", "How are you today?", "Invention or discovery? Which leads to a greater understanding of the nature of things?",
"Why is it beneficial to live a life filled with a sense of curiosity?", "I know nothing, but why do you perceive me to be a teacher?", "Would you, dear student, take a stroll with me?"];
let studentAns = ["Zounds! What a terribly impertinent question!", "Prithee, Socrates, I was hoping you would teach me.", "I could guess, but, alas, I'm but a poor vagrant.",
"Can I appeal to the reader, Socrates, or is that robbing me of an opportunity?", "I'd say that arguing reality is merely an a priori adjunct of naturalistic ethics.", "Is it fine to say 'I don't know'?",
"Socrates, how am I to answer when I can be so easily deceived?"];

function generateQuestion() {
  let selector1 = Math.floor(Math.random() * 7);
  return document.getElementById('soc-msg').innerHTML = socratesMsg[selector1];
}

function generateAnswer() {
  let selector2 = Math.floor(Math.random() * 7);
  return document.getElementById('stud-msg').innerHTML = studentAns[selector2];
}
