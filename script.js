var wrap = document.body.querySelector(".wrapper");
var hit = Number(
  prompt(
    "A fierce dragon stands in your way, Bard. You think you can land up to 5 hits on the beast before he attacks in retaliation. How many times would you like to strike with your +1 Tuned Harp of Melody?"
  )
);
var uhp = 5;
var dhp = 10;
var num1 = Math.floor(Math.random() * 10) + 1;
var num2 = Math.floor(Math.random() * 2) + 1;
var sum = num1 + hit;

if(num1>=6){
  num1=1
}
while (hit <= 0 || hit >= 6) {
  hit = Number(
    prompt(
      "A fierce dragon stands in your way, Bard. You think you can land up to 5 hits on the beast before he attacks in retaliation. How many times would you like to strike with your +1 Tuned Harp of Melody?"
    )
  );
}
for (var i = 0; i < hit; i++) {
  num1 = num1 + 1;
  if(num1>5){
    num1=1;
  }
}
  if (sum >= dhp) {
    wrap.innerHTML =
      "You've slain the dragon and future bards will sing of your bravery. Game Over.";
  } else {
    for (var d = 0; d <= 5; i++) {
      num2 = num2 + 1;
      if (num2 >= uhp) {
        wrap.innerHTML =
          "The dragon lets out a blast of fire, dropping you and charring your body to a crisp. Game Over";
      } 
        
      while (hit <= 0 || hit >= 6) {
          hit = Number(
            prompt(
              "A fierce dragon stands in your way, Bard. You think you can land up to 5 hits on the beast before he attacks in retaliation. How many times would you like to strike with your +1 Tuned Harp of Melody?"
            )
          );
    for (var i = 0; i < hit; i++) {
  num1 = num1 + 1;
  if(num1>5){
    num1=1;
  }
}
  if (sum >= dhp) {
    wrap.innerHTML =
      "You've slain the dragon and future bards will sing of your bravery. Game Over.";
  } else {
    for (var d = 0; d <= 5; i++) {
      num2 = num2 + 1;
      if (num2 >= uhp) {
        wrap.innerHTML =
          "The dragon lets out a blast of fire, dropping you and charring your body to a crisp. Game Over";
      } 
    }      
    }
  }
    }
  }