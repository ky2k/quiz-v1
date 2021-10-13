
// start quiz
let start_quiz=document.querySelector(".submit_q")
let main=document.querySelector(".container__main")
start_quiz.addEventListener('click',()=>{
  main.style.display='none'
  //home for
})
//append elements
// store obj
let qtn=[
{
	question:'how are you',
	answers:{
	  a:'',
	  b:'',
	  c:'',
	  d:'',
	},
	correctAnswer:'b',
},

{
	question:'ddddddddddddddddd',
	answers:{
	  a:'dddd',
	  b:'ddd',
	  c:'ddddddddddd',
	  d:'ddddd',
	},
	correctAnswer:'',
},

{
	question:'',
	answers:{
	  a:'ddddddddd',
	  b:'dddddddddddddd',
	  c:'dddddddddddd',
	  d:'',
	},
	correctAnswer:'a',
},

{
	question:'dddddddddddwww',
	answers:{
	  a:'ww',
	  b:'wwwww',
	  c:'wwwww',
	  d:'yyyyyy',
	},
	correctAnswer:'d',
}
]
let pos=0
let show_type=''
let lander=document.querySelector('.lander')
let obj=[]
class Dfetch{
  static distData(){
    
    qtn.forEach((item)=>{
      console.log(item['question']);
      console.log(item['answers']['a']);
      console.log(item['answers']['b']);
      console.log(item['answers']['c']);
      console.log(item['answers']['d']);
      console.log(item['correctAnswer']);
  obj.push(qtns)
  console.log(qtn);
    })
    obj.forEach((item)=>{
      lander.innerHTML+=item
    })
  }
  static qtnType(state){
    show_type=state
    let next=document.querySelector('.q_next')
    
      switch (show_type) {
        case 'next':
          if(pos>=0){
            let qtns=`
<div class="qa border_2px">
<div class="title border_2px_bg_b"><span class="border_2px_wht_b">${pos+1}</span>${qtn[pos]['question']}</div>
<div class="opt border_2px_b"><input type="radio" value='a' name="option"><p>${qtn[pos]['answers']['a']}</p></div>
<div class="opt border_2px_b"><input type="radio" value='b' name="option"><p>${qtn[pos]['answers']['b']}</p></div>
<div class="opt border_2px_b"><input type="radio" value='c' name="option"><p>${qtn[pos]['answers']['c']}</p></div>
<div class="opt border_2px_b"><input type="radio" value='d' name="option"><p>${qtn[pos]['answers']['d']}</p></div>
<div class="sel_que">
<button class='q_prev b_2px_bg_b' onclick="Dfetch.qtnType('prev')">Prev</button>
<button class='q_next b_2px_bg_b' onclick="Dfetch.qtnType('next')">Next</button>
</div>
<div class="sign_wr">
  <div class="sign_k red_bg_wht">Created By: www.Kalvithugal.in</div>
</div>
</div>`
console.log(qtn[pos]['answers']['d']);
lander.innerHTML=qtns
pos=pos+1
}
          break;
      case 'prev':
        if(pos>=0)
        {
          pos=pos-1
        let pqtns=`
        <div class="qa border_2px">
        <div class="title border_2px_bg_b"><span class="border_2px_wht_b">${pos+1}</span>${qtn[pos]['question']}</div>
        <div class="opt border_2px_b"><input type="radio" value='a' name="option"><p>${qtn[pos]['answers']['a']}</p></div>
        <div class="opt border_2px_b"><input type="radio" value='b' name="option"><p>${qtn[pos]['answers']['b']}</p></div>
        <div class="opt border_2px_b"><input type="radio" value='c' name="option"><p>${qtn[pos]['answers']['c']}</p></div>
        <div class="opt border_2px_b"><input type="radio" value='d' name="option"><p>${qtn[pos]['answers']['d']}</p></div>
        <div class="sel_que">
        <button class='q_prev b_2px_bg_b' onclick="Dfetch.qtnType('prev')">Prev</button>
        <button class='q_next b_2px_bg_b' onclick="Dfetch.qtnType('next')">Next</button>
        </div>
        <div class="sign_wr">
          <div class="sign_k red_bg_wht">Created By: www.Kalvithugal.in</div>
        </div>
        </div>`
        lander.innerHTML=pqtns
        }
        
        break;
        default:
          break;
      }
    

  }
}
Dfetch.qtnType('next')