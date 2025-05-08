var pizza_btn = document.querySelector('.pizza-btn')
var burger_btn = document.querySelector('.burger-btn')
var mojito_btn = document.querySelector('.mojito-btn')
var order_ul = document.querySelector('#order-ul')

order_ul.addEventListener('click', (event)=>{
  if(event.target.tagName == 'BUTTON')
  event.target.parentElement.remove()
})

pizza_btn.addEventListener('click', ()=>{
  document.getElementById('order-title').style.display = 'block';
  let pizza_list = document.createElement('li')
  pizza_list.innerHTML = '<img style="height:200px; width:200px; border-radius:20px; margin-top:60px;" src="pizza.jpg" ><br><button style= "margin-left:60px; margin-top:10px; padding:10px; color:white; background-color:red; border-style:none; border-radius:10px;">Delete</button>'
  order_ul.append(pizza_list)
})

burger_btn.addEventListener('click', ()=>{
  document.getElementById('order-title').style.display = 'block';
  let burger_list = document.createElement('li')
  burger_list.innerHTML = '<img style="height:200px; width:200px; border-radius:20px; margin-top:60px;" src="burger.jpg" ><br><button style= "margin-left:60px; margin-top:10px; padding:10px; color:white; background-color:red; border-style:none; border-radius:10px;">Delete</button>'
  order_ul.append(burger_list)
})

mojito_btn.addEventListener('click', ()=>{
  document.getElementById('order-title').style.display = 'block';
  let mojito_list = document.createElement('li')
  mojito_list.innerHTML = '<img style="height:200px; width:200px; border-radius:20px; margin-top:60px;" src="mojito.jpg" ><br><button style= "margin-left:60px; margin-top:10px; padding:10px; color:white; background-color:red; border-style:none; border-radius:10px;">Delete</button>'
  order_ul.append(mojito_list)
})



gsap.registerPlugin(ScrollTrigger);

gsap.to(".foodie", {
scrollTrigger: {
trigger: ".foodie",    
start: "top 80%",   
toggleActions: "play none none none"
},
y: 0,
opacity: 1,
duration: 1,
ease: "power2.out"
});

gsap.utils.toArray('.card1, .card2, .card3').forEach((card, i) => {
gsap.from(card, {
scrollTrigger: {
trigger: card,
start: "top 85%", 
toggleActions: "play none none none"
},
opacity: 0,
y: 50,
duration: 0.8,
ease: "power2.out",
delay: i * 0.2 
});
});
