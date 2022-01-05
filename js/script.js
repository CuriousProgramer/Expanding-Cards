const panels = document.querySelectorAll('.panel');

for(let i=0;i<panels.length;i++)
{
  
  panels[i].addEventListener('click',function(){
    removeActive();
    panels[i].classList.add('active');
    
  })
}

function removeActive()
{
  for(let i=0;i<panels.length;i++)
  {
    if(panels[i].classList.contains('active'))
    {
      panels[i].classList.remove('active');
    }
  }
}