var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Myth buster


var mythList =["MYTH: Disability is a consequence of deeds of previous lives (karmas)",
  "MYTH: God or nature compensates a person with disability by giving some other super-ability",
  "MYTH: God will help us if we will help a disabled person",
  "MYTH: Accessibility is a concern only because of disabled people","MYTH: Persons with disabilities always need assistance and normal-bodied person are obliged to help them","MYTH: People with mental illness are always violent and unpredictable","MYTH: Accommodating workplace for workers with disability is too costly","MYTH: : People with disabilities are brave, courageous and inspirational for living with their disability.","MYTH: All persons with hearing disabilities can read lips.","MYTH: All persons with hearing disabilities can read lips."];
  var factList=["FACT: This is probably the most wide-spread and most often used cliché about disability. People, especially in Asian countries like India, believe in rebirth. According to them, every person on the earth has a previous life. The way a person is living in this life is highly influenced by what she did in her previous life. One has to pay back for all the bad karmas of past lives.You can easily find people telling a disabled person that “it’s all because of karmas“. But any modern and forward thinking society would know better.","FACT: It is not true.If a person with disability is successful in her life, many people in society tend to attribute this success to some mysterious “divine ability“ given to that person by God or nature. These people will not appreciate the hardwork invested in acquiring and honing a talent. They will also not appreciate the sacrifices made while making use of these talents to achieve success. They will simply put it all down to the blessings of the Lord. Such people think that if God takes one thing away, then he compensates it with something else.","FACT: Everyone in the society should help each other without thinking of give-and-take. Those who help others only as a way to seek rewards from a supreme power, their idea of help is certainly misplaced. If a disabled person asks for some help to overcome a disability-related hurdle in her way — you should help her simply because it is your social responsibility. Every member of a civil society are expected to extend a helping hand to those in need.","FACT: No,Anybody can become disabled within minutes and hence would require accessiblity.If something is accessible for disabled people, it will most likely be accessible for kids, elderly and pregnant women as well. Accessibility is essentially a design issue. Everything should be built in a way so as to ensure that everyone is the society can use it with ease.","FACT: It’s good if you want to help but most of the persons with disability like to do things independently and they have their own way to do it. If you want to help you may politely ask the person and if she says no then it certainly means no. Don’t be over-enthusiastic to hold a person climbing stairs with crutches; you may disturb their balance and hurt them.","FACT: In majority of the cases, a person with mental illness would be so calm and harmless that you won’t even know that the person has any kind of mental illness. In fact we have many more persons with mental illness around us than we can imagine. Due to lack of awareness, the person herself doesn’t know that she may have mental illness."," FACT: Making an accessible office is not a costly project. And most of the accommodations make things easier for non-disabled employees too.","FACT: Adjusting to a disability requires adapting to a lifestyle, not bravery and courage.","FACT:Lip-reading skills vary among people who use them and are never entirely reliable."]


var fact = document.getElementById("fact");
var myth=document.getElementById("myth")
var btn= document.getElementById("btn01");
var count = 0;

btn.addEventListener("click", displayFact);
btn.addEventListener("touchend",displayFact);

function displayFact()
{
  myth.innerHTML = mythList[count];
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
// Photos
// carousel
$(document).ready(function(){
  var intervalx=5000;
  $("#mycarousel").carousel( { interval: intervalx } );
  $("#carouselButton").click(function(){
      if($('#carouselButton').children('span').hasClass('fa-pause')){
          $("#mycarousel").carousel('pause');
          $('#carouselButton').children('span').removeClass('fa-pause')
          $('#carouselButton').children('span').addClass('fa-play')
      }
      else{
          $("#mycarousel").carousel('cycle');
          $('#carouselButton').children('span').removeClass('fa-play')
          $('#carouselButton').children('span').addClass('fa-pause')
      }
  });
});
