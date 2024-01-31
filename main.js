let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Explorer of the digital world, building stories through code')
  .pauseFor(200)
  .deleteChars(10)
  .start();
