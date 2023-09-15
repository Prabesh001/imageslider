const slider = document.querySelector('.slideImage')
const animeName = document.querySelector('.animeName')

const images=['onepiece.jpg','naruto.jpg','drstone.jpg','deathnote.jpg','akame.jpg','titan.jpg','demonslayer.jpg','boruto.jpg','codegeass.jpg','blackclover.jpg']

const name=['One Piece','Naruto','Dr. Stone','Death Note','Akame Ga Kill','Attack On Titan','Demon Slayer','Boruto','Code Geass','Black Clover']

const bg_color=['#f5f5f5','#e1bee7','#e1f5fe','#ffd8b1','#fffdd0','#faf3e0','#e0f2f1','#fff176','#ffb6c1','#d1c4e9']
let i=0;
    
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

btn1.addEventListener('click',leftscroll)
btn2.addEventListener('click',rightscroll)

document.addEventListener('keydown',(event)=>{
  if(event.key==='ArrowLeft' || event.key==='ArrowUp'){
    leftscroll()
  }
  if(event.key==='ArrowRight' || event.key==='ArrowDown'){
    rightscroll()
  }
})

function rightscroll(){
  i++
  i=i%images.length;
  slider.src=`${images[i]}`
  animeName.innerHTML=`${name[i]}`
  document.body.style.backgroundColor=`${bg_color[i]}`
}

function leftscroll(){
  i--
  i=i%(images.length);

  if(i<0){
    i=(images.length)+i%images.length;
  }
  slider.src=`${images[i]}`
  animeName.innerHTML=`${name[i]}`
  document.body.style.backgroundColor=`${bg_color[i]}`
}
