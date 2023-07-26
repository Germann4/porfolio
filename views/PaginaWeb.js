document.addEventListener('mouseover', e => {
    if(e.target.alt === 'html' || e.target.alt === 'css' || e.target.alt === 'javascript' ||
      e.target.alt === 'react' || e.target.alt === 'sass' || e.target.alt === 'bootstrap' ||
      e.target.alt === 'node' || e.target.alt === 'mysql') {
        let div = document.createElement('div')
        document.querySelector('.icon_porfolio').appendChild(div)
        div.innerHTML = '<audio src="ES_Pulse Blip - SFX Producer.mp3" autoplay></audio>'
    }
})
document.querySelector('.arrow').onclick = function(){
    console.log(window.scrollTo({top:0}))
}
document.addEventListener('scroll', e => {
    if(window.scrollY > 626) {
        document.querySelector('.arrow').style = 'display:block'
    }
    if(window.scrollY < 626) {
        document.querySelector('.arrow').style = 'display:none'
    }
    console.log(window.scrollY)
})
document.querySelector('.hamburger-button').onclick = function(){
    document.querySelector('.window').classList.toggle('height')
    

}