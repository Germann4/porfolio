import { proximityCondition,proximityCondition2,positionText,Win,ConditionalCounter2 } from './game_with_module.js';

        let counter = 0
        let counter2 = 0
        let count_zombie_proximity = 30
        let count_zombie_proximity2 = -210
        let counter_life2_proximity2 = -3.6
        let stop 
        let stop2
        let stopText

       document.querySelector('.zombie2').style = 'visibility: hidden'
       document.querySelector('.container_life2').style = 'visibility: hidden'
       
        document.querySelector('button').onclick = function(){
            
            document.querySelector('button').disabled = true
            setTimeout(() => {
                document.querySelector('.container_h2').style = 'display:block';
            }, 400);
            setTimeout(() => {
                document.querySelector('.container_h2').style = 'display:none';
            }, 3000);
            setTimeout(() => {
               
            document.querySelector('.zombie').onclick = function(){
            counter++;
            if(counter === 1) document.querySelector('.life').style = 'background-color: white;width: 33.3%;transition: background-color .6s ease-in-out;'
            if(counter === 2) document.querySelector('.life').style = 'background-color: white;width: 66.6%;transition: background-color 3s ease-in-out;'
            if(counter === 3) document.querySelector('.life').style = `background-color: white;width: 99.9%;transition: background-color 3s ease-in-out;
            ${clearInterval(stop)}`,document.querySelector('.zombie').style = `transform: translate(${count_zombie_proximity}px,4rem) rotate(89deg);`
            
            if(document.querySelector('.life').style.width === '99.9%') {
                document.querySelector('.container_life').style = ' visibility: hidden;'
                setTimeout(() => {
                    document.querySelector('.zombie').style = 'visibility: hidden;'
                    count_zombie_proximity = 30
                    
                }, 1900);

            }
            if(counter === 3 && window.innerWidth < 1030) `${clearInterval(stop)}`,document.querySelector('.zombie').style = `transform: translate(${count_zombie_proximity}px,3rem) rotate(89deg);`
            if(counter === 3 && window.innerWidth < 1020) `${clearInterval(stop)}`,document.querySelector('.zombie').style = `transform: translate(${count_zombie_proximity}px,2.8rem) rotate(89deg);`
            if(counter === 3 && window.innerWidth < 881) `${clearInterval(stop)}`,document.querySelector('.zombie').style = `transform: translate(${count_zombie_proximity}px,3.3rem) rotate(89deg);`
            if(counter === 3 && window.innerWidth < 836) `${clearInterval(stop)}`,document.querySelector('.zombie').style = `transform: translate(${count_zombie_proximity}px,2.4rem) rotate(89deg);`
            if(counter === 3 && window.innerWidth < 711) `${clearInterval(stop)}`,document.querySelector('.zombie').style = `transform: translate(${count_zombie_proximity}px,1.4rem) rotate(89deg);`
            if(counter === 3 && window.innerWidth < 687) `${clearInterval(stop)}`,document.querySelector('.zombie').style = `transform: translate(${count_zombie_proximity}px,2rem) rotate(89deg);`
            
            } 
          stop = setInterval(() => {
               count_zombie_proximity -= 100
               document.querySelector('.zombie').style = `transform: translateX(${count_zombie_proximity}px);transition: transform 1.1s linear;`    
               document.querySelector('.container_life').style = `transform: translateX(${count_zombie_proximity}px);transition: transform 1.6s linear;`
               proximityCondition();
            }, 1000);
        }, 3000);
      
    }
    stop2 = setInterval(() => {
        if(document.querySelector('.life').style.width === '99.9%') { 
           setTimeout(() => {
            count_zombie_proximity2 -= 80
            counter_life2_proximity2 -= 4.9
            document.querySelector('.zombie2').style = `transform: translate(${count_zombie_proximity2}px,0px);transition: transform 1.1s linear;`
            document.querySelector('.container_life2').style = `animation: ani 14s linear forwards;`
            proximityCondition2();     
        }, 4900);
     }
    }, 1000);

    stopText = setInterval(() => {
        if(document.querySelector('.life').style.width === '99.9%') {            
            clearInterval(stopText)
            setTimeout(() => {
                document.querySelector('.container_h2').style = 'display:none';
                if(document.querySelector('.container_h2').style.display === 'none'){
                    document.querySelector('.zombie2').onclick = function(){
                       counter2++ 
                       ConditionalCounter2(counter2);
                       if(document.querySelector('.life2').style.width === '100%') Win(); 
                    }   
                }
        }, 4000)
        setTimeout(() => {
            positionText();
            document.querySelector('.container_life2').style = 'visibility: visible';
            document.querySelector('.zombie2').style = 'visibility: visible';
        }, 1800);         
    }
}, 1000);

document.querySelector('.return').onclick = function(){
    window.location.href = 'http://localhost:3000'
}

    