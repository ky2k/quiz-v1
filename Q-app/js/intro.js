
let up=document.querySelector('#up_clk')
let down=document.querySelector('#d_clk')
let focus=''
let focus1=''
let h=0
let m=0
let s=0
class Gros{
  static on(){
    let state=document.querySelector('.switch')
    let on=document.querySelector(".btn_switch")
      state.classList.forEach((item)=>{
        if('s_on'==item){
          state.classList.add("s_off")
          state.classList.add("b_off")
          state.classList.remove("b_on")
          state.classList.remove("s_on")
          on.classList.add("b_on")
          on.classList.remove("b_off")
        }else if('s_off'==item){
          state.classList.add("s_on")
          state.classList.add("b_on")
          state.classList.remove("b_off")
          state.classList.remove("s_off") 
          on.classList.add("b_off")
          on.classList.remove("b_on")
        }
      })
  }
 static smhUp(){
  let hh=document.querySelector('#h')
  let mm=document.querySelector('#m')
  let ss=document.querySelector('#s')
  ss.addEventListener('click',()=>{

    focus="s_up"
  })
  mm.addEventListener('click',()=>{
    focus="m_up"
  })
  hh.addEventListener('click',()=>{
    focus="h_up"
  })   
  up.addEventListener('click',()=>{
    switch (focus) {
      case 'm_up':
        if(m<59){
          m=m+1
          mm.value=m
        }
        break;
      case 's_up':
        if(s<59){
          s=s+1
          ss.value=s
        }
        break;
      case 'h_up':
        if(h<11){
          h=h+1
          hh.value=h
        }
        break;
      default:
        break;
    }
  })
  }
  static smhDown(){
    let hh=document.querySelector('#h')
    let mm=document.querySelector('#m')
    let ss=document.querySelector('#s')
    ss.addEventListener('click',()=>{
      focus1="s_down"
    })
    mm.addEventListener('click',()=>{
      focus1="m_down"
    })
    hh.addEventListener('click',()=>{
      focus1="h_down"
    })   
    down.addEventListener('click',()=>{
      switch (focus1) {
        case 'm_down':
          if(m>0){
            m=m-1
            mm.value=m
          } 
          break;
        case 's_down':
          if(s>0){
            s=s-1
            ss.value=s
          }
          break;
        case 'h_down':
          if(h>0){
            h=h-1
            hh.value=h
          }
          break;
        default:
          break;
      }
    })
  }
}

Gros.smhUp()
Gros.smhDown()