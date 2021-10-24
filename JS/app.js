function myfun() {
  window.print();
}

var typed = new Typed(".typing", {
    strings:["","Tech Enthusisat" , "A Great Learner","A Beleiver"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
});


$('.profile_riple').ripples({
    dropRadius: 15,
    perturbance: 1
  });

  const bars=document.querySelectorAll('.progress-bar');
  bars.forEach(function(bar){
    let perc=bar.dataset.percent;
    let tool=bar.children[0];
    tool.innerText=perc+'%';
    bar.style.width=perc+'%';
  })

  const counters=document.querySelectorAll('.counter');
  function runCounter(){
      counters.forEach(counter=>{
          counter.innerText=0;
          let target = +counter.dataset.count;
          let step = target/100;
          let countIt=function(){
              let displayIt= +counter.innerText;
              if(displayIt < target)
              {
                  counter.innerText=Math.ceil(displayIt+step);
                  setTimeout(countIt,1);
              }
              else{
                  counter.innerText=target;
              }
          }
          countIt();
      })
  }
  

  let counterSection=document.querySelector('.counter-wrapper');
  let options = {
      rootMargin : '0px 0px -200px 0px'
  }
  const sectionOb= new IntersectionObserver(function(enteries){
  if(enteries[0].isIntersecting){
    runCounter();  
  }
  },options)
  sectionOb.observe(counterSection);

  var $wrapper =$('.portfolio-wrapper');
  $wrapper.isotope({
      filter:'*',
      layoutMode:'masonry',
      animationOptions:{
          duration:750,
          easing:'linear'
      }
  });

  let links=document.querySelectorAll('.tabs a');
//   console.log(links);
  links.forEach(link=>{
      let selector= link.dataset.filter;
      link.addEventListener('click',function(e){
          e.preventDefault();
          $wrapper.isotope({
            filter:selector,
            layoutMode:'masonry',
            animationOptions:{
                duration:750,
                easing:'linear'
            }
        });

        links.forEach(link=>{
            link.classList.remove('active');
        })
        e.target.classList.add('active');
      })
  })

  $('.magnify').magnificPopup({
      type:'image',
      gallery:{
          enabled:true
      },
      zoom:{
          enable:true
      }
  });

  $('.slider').slick({
      arrows:false,
      autoplay:true
  });