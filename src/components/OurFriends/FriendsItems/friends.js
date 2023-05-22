const titleName = (title) => {
  if(title.includes('LicoVet') )return "LicoVet"
  if(title.includes('Велике серце') )return "PetHelp"
  if(title.includes('Харківський') )return "Харківський Притулок"
  if(title.includes('Сіріус') )return "Сіріус"
  if(title.includes('БАРБОС') )return "БАРБОС"
   }
   const adresName = (title) => {
    if(title.includes('LicoVet') )return "Dryhetiv Street, 77 "
    if(title.includes('ЛЕВ') )return "Promuslova Street, 56"
    if(title.includes('Харківський') )return "St. Kvitky-Osnovyanenko, 7" 
    if(title.includes('Happy') )return "Chota Rystaveli Street, 44" 
    if(title.includes('Сіріус') )return "Fedorivka, Kyiv Oblast" 
    if(title.includes('БАРБОС') )return "Grigorenka Street, 25" 
}


     export  {titleName , adresName }