var quotes = [
  '“It’s not about ideas. It’s about making ideas happen.”<br/><b> - Scott Belsky</b><br/>co-founder of Behance',
  '“Ideas are easy. Implementation is hard.” <br/><b> - Guy Kawasaki</b><br/>founder of AllTop',
  '“If you just work on stuff that you like and you’re passionate about, you don’t have to have a master plan with how things will play out.” <br/><b> - Mark Zuckerberg</b><br/>founder of Facebook',
  '"The best time to plant a tree was 20 years ago. The second best time is now." <br/><b> - Chinese proverb</b>',
  '“Never give in–never, never, never, never, in nothing great or small, large or petty, never give in except to convictions of honour and good sense. Never yield to force; never yield to the apparently overwhelming might of the enemy.” <br/><b> - Winston Churchill</b><br/>British Prime Minister.'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];

}
