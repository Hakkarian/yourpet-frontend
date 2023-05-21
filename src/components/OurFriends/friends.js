const titleName = (title) => {
  if(title.includes('LicoVet') )return "LicoVet"
  if(title.includes('Велике серце') )return "PetHelp"
  if(title.includes('Харківський') )return "Харківський Притулок"
  if(title.includes('Сіріус') )return "Сіріус"
  if(title.includes('БАРБОС') )return "БАРБОС"
   }
   const worksTime = (id) => {
    if(id.includes('645fc66d51fd90465066ed1a') )return "09:00-20:00" //LicoVet
    if(id.includes('645fc66d51fd90465066ed1d') )return "09:00-17:00" //Josera
    if(id.includes('645fc66d51fd90465066ed1c') )return "day and night" //Whiskas
    if(id.includes('645fc66d51fd90465066ed15') )return "09:00-17:00" //Happy Paw
    if(id.includes('645fc66d51fd90465066ed14') )return "11:00-16:00" //сірікс
}

// const addressTitle = (id) => {
//   if(id.includes('645fc66d51fd90465066ed1a') )return "09:00-20:00" //LicoVet
//   if(id.includes('645fc66d51fd90465066ed1d') )return "09:00-17:00" //Josera
//   if(id.includes('645fc66d51fd90465066ed1c') )return "day and night" //Whiskas
//   if(id.includes('645fc66d51fd90465066ed15') )return "09:00-17:00" //Happy Paw
//   if(id.includes('645fc66d51fd90465066ed14') )return "only weekend" //Cshsec
// }

     export  {titleName , worksTime}