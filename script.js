document.addEventListener('DOMContentLoaded',()=>{
  const border=document.getElementById('border')
  const container=document.querySelector('.container')
const btnCopy=document.getElementById('btnCopy')
const allBorder=document.getElementById('all')

const all_value=document.getElementById('all_value')
const code=document.getElementById('code')
const clr=document.getElementById('clr')

 var coding="";
function allBorderUpdate(){
 
  let all_radius=allBorder.value+"px";
all_value.innerText= all_radius;

coding=`
border-radius:${all_radius};
border-style : ${border.value};
border-color: ${clr.value};
`;
code.value=coding;
container.style.borderRadius=all_radius;

}
allBorder.addEventListener('mousemove',allBorderUpdate)
allBorder.addEventListener('change',allBorderUpdate)


btnCopy.addEventListener('click',()=>{
  code.select()
  code.setSelectionRange(0,99999);
  navigator.clipboard.writeText(code.value)
})
border.addEventListener('change',function(){
 
  container.style.border=border.value;
  allBorderUpdate()
})
border.addEventListener('mousemove',()=>{
  container.style.border=border.value;
  allBorderUpdate()
})
clr.addEventListener('change',()=>{
  container.style.borderColor= clr.value
  allBorderUpdate()
})
clr.addEventListener('mousemove',()=>{
  container.style.borderColor= clr.value;
  allBorderUpdate()
})

})