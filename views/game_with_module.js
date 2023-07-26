export function proximityCondition(){
    if(document.querySelector('.warrior').getBoundingClientRect('').width - 
               document.querySelector('.zombie').getBoundingClientRect('').width >
               document.querySelector('.zombie').getBoundingClientRect('').x) {
                   document.querySelector('.window').style = 'display:block';
    }   
}
export function proximityCondition2(){
    if(document.querySelector('.warrior').getBoundingClientRect('').width - 
               document.querySelector('.zombie2').getBoundingClientRect('').width >
               document.querySelector('.zombie2').getBoundingClientRect('').x) {
                   document.querySelector('.window').style = 'display:block';
    }   
}
export function positionText(){
   document.querySelectorAll('.container_h2 h3')[0].style = 'left: -36rem'
            console.log(document.querySelectorAll('.container_h2 h3')[0].textContent = 'Cuidado este enemigo tiene mas Vida')
            document.querySelector('.container_h2').style = 'display:block';
            if(document.querySelector('.zombie2').getBoundingClientRect('').x < 440) document.querySelectorAll('.container_h2 h3')[0].style = 'left: -32rem;font-size:.9rem'
            if(document.querySelector('.zombie2').getBoundingClientRect('').x < 433) document.querySelectorAll('.container_h2 h3')[0].style = 'left: -34rem;font-size:.9rem'
            if(document.querySelector('.zombie2').getBoundingClientRect('').x < 427) document.querySelectorAll('.container_h2 h3')[0].style = 'left: -35.8rem;font-size:.9rem'
            console.log(document.querySelector('.zombie2').getBoundingClientRect('').x)
}
export function ConditionalCounter2(counter2){
    if(counter2 === 1) document.querySelector('.life2').style = 'background-color: white;width: 25%;transition: background-color .6s ease-in-out;'
    if(counter2 === 2) document.querySelector('.life2').style = 'background-color: white;width: 50%;transition: background-color 3s ease-in-out;'
    if(counter2 === 3) document.querySelector('.life2').style = 'background-color: white;width: 75%;transition: background-color .6s ease-in-out;'
    if(counter2 === 4)  document.querySelector('.life2').style = `background-color: white;width: 100%;transition: background-color .6s ease-in-out;`
    
    console.log(counter2);
}
export function Win(){
           document.querySelector('.window').style = 'display:block',document.querySelectorAll('.window p')[0].textContent = 'Ganaste',
           document.querySelectorAll('.window p')[0].style = 'background-color: #3c4738;color:#18f68bb0;';
}