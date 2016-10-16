var quotes = [
  '"It’s not about ideas. It’s about making ideas happen."<br/><b> - Scott Belsky</b>',
  '"Ideas are easy. Implementation is hard." <br/><b> - Guy Kawasaki</b>',
  '"If you just work on stuff that you like and you’re passionate about, you don’t have to have a master plan with how things will play out." <br/><b> - Mark Zuckerberg</b>',
  '"The best time to plant a tree was 20 years ago. The second best time is now." <br/><b> - Chinese proverb</b>',
  '"Never give in–never, never, never, never, in nothing great or small, large or petty, never give in except to convictions of honour and good sense. Never yield to force; never yield to the apparently overwhelming might of the enemy." <br/><b> - Winston Churchill</b>',
  '"If I have seen further than others, it is by standing on the shoulders of giants." <br/><b> — Isaac Newton</b>',
  '"Failure isn’t failure unless you don’t learn from it." <br/><b> - Dr. Ronald Niednagel</b>',
  '"Run from what\'s comfortable. Forget safety. Live where you fear to live. Destroy your reputation. Be notorious. I have tried prudent planning long enough. From now on I\'ll be mad." <br/><b> - Jalaluddin Rumi</b>'

]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}
