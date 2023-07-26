let ws_btc = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1m");
let ws_eth = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@kline_1m");
let ws_sol = new WebSocket("wss://stream.binance.com:9443/ws/solusdt@kline_1m");
let ws_doge = new WebSocket("wss://stream.binance.com:9443/ws/dogeusdt@kline_1m");
let ws_polygon = new WebSocket("wss://stream.binance.com:9443/ws/maticusdt@kline_1m");
let ws_avalanche = new WebSocket("wss://stream.binance.com:9443/ws/avaxusdt@kline_1m");
let ws_tron = new WebSocket("wss://stream.binance.com:9443/ws/trxusdt@kline_1m");
let ws_decentraland = new WebSocket("wss://stream.binance.com:9443/ws/manausdt@kline_1m");

ws_btc.onmessage = function(e){

  document.querySelector('.text_btc').textContent = 'Precio Actual : ' + `${JSON.parse(e.data).k.o}`.split('')[0] +
  `${JSON.parse(e.data).k.o}`.split('')[1] + '.' + `${JSON.parse(e.data).k.o}`.split('')[2] +
  `${JSON.parse(e.data).k.o}`.split('')[3] + `${JSON.parse(e.data).k.o}`.split('')[4] + ',' +
  `${JSON.parse(e.data).k.o}`.split('')[6] + `${JSON.parse(e.data).k.o}`.split('')[7] + ' US$'
  //console.log(`${JSON.parse(e.data).k.o}`.split('')) 
   document.querySelector('.initial_release_btc').textContent = 'Fecha de lanzamiento : 3 de enero de 2009'
}
ws_eth.onmessage = function(e){
     document.querySelector('.text_eth').textContent = 'Precio Actual : ' + `${JSON.parse(e.data).k.o}`.split('')[0] +
     `${JSON.parse(e.data).k.o}`.split('')[1] + `${JSON.parse(e.data).k.o}`.split('')[2] +
     `${JSON.parse(e.data).k.o}`.split('')[3] + ',' + `${JSON.parse(e.data).k.o}`.split('')[5] + 
     `${JSON.parse(e.data).k.o}`.split('')[6] + ' US$'  
     document.querySelector('.initial_release_eth').textContent = 'Fecha de lanzamiento : 30 de julio de 2015'
}
ws_sol.onmessage = function(e){
     document.querySelector('.text_sol').textContent = 'Precio Actual : ' + `${JSON.parse(e.data).k.o}`.split('')[0] +
     `${JSON.parse(e.data).k.o}`.split('')[1] + ',' + `${JSON.parse(e.data).k.o}`.split('')[3] + 
     `${JSON.parse(e.data).k.o}`.split('')[4] + ' US$'
     document.querySelector('.initial_release_sol').textContent = 'Fecha de lanzamiento : marzo de 2020'
}
ws_doge.onmessage = function(e){
     document.querySelector('.text_doge').textContent = 'Precio Actual : ' + `${JSON.parse(e.data).k.o}`.split('')[0] +
     ',' + `${JSON.parse(e.data).k.o}`.split('')[2] + `${JSON.parse(e.data).k.o}`.split('')[3] +
     `${JSON.parse(e.data).k.o}`.split('')[4] + `${JSON.parse(e.data).k.o}`.split('')[5] +
     `${JSON.parse(e.data).k.o}`.split('')[6] + `${JSON.parse(e.data).k.o}`.split('')[7] + ' US$'
     document.querySelector('.initial_release_doge').textContent = 'Fecha de lanzamiento : 6 de diciembre de 2013'
}
ws_polygon.onmessage = function(e){
      document.querySelector('.text_polygon').textContent = 'Precio Actual : ' + `${JSON.parse(e.data).k.o}`.split('')[0] +
     ',' + `${JSON.parse(e.data).k.o}`.split('')[2] + `${JSON.parse(e.data).k.o}`.split('')[3] +
      `${JSON.parse(e.data).k.o}`.split('')[4] + `${JSON.parse(e.data).k.o}`.split('')[5] +
      `${JSON.parse(e.data).k.o}`.split('')[6] + `${JSON.parse(e.data).k.o}`.split('')[7] + ' US$'  
      document.querySelector('.initial_release_polygon').textContent = 'Fecha de lanzamiento : octubre de 2017'
}
ws_avalanche.onmessage = function(e){
     document.querySelector('.text_avalanche').textContent = 'Precio Actual : ' + `${JSON.parse(e.data).k.o}`.split('')[0] +
     `${JSON.parse(e.data).k.o}`.split('')[1] + ',' + `${JSON.parse(e.data).k.o}`.split('')[3] +
     `${JSON.parse(e.data).k.o}`.split('')[4] + ' US$'
     document.querySelector('.initial_release_avalanche').textContent = 'Fecha de lanzamiento :  21 de septiembre de 2020'

}
ws_tron.onmessage = function(e){
     document.querySelector('.text_tron').textContent = 'Precio Actual : ' + `${JSON.parse(e.data).k.o}`.split('')[0] +
     ',' + `${JSON.parse(e.data).k.o}`.split('')[2]  + `${JSON.parse(e.data).k.o}`.split('')[3] +
     `${JSON.parse(e.data).k.o}`.split('')[4] + `${JSON.parse(e.data).k.o}`.split('')[5] +
     `${JSON.parse(e.data).k.o}`.split('')[6] + `${JSON.parse(e.data).k.o}`.split('')[7] + ' US$'  
     document.querySelector('.initial_release_tron').textContent = 'Fecha de lanzamiento :  25 de junio de 2018'
}
ws_decentraland.onmessage = function(e){
     document.querySelector('.text_decentraland').textContent = 'Precio Actual : ' + `${JSON.parse(e.data).k.o}`.split('')[0] +
     ',' + `${JSON.parse(e.data).k.o}`.split('')[2] + `${JSON.parse(e.data).k.o}`.split('')[3] +
     `${JSON.parse(e.data).k.o}`.split('')[4] + `${JSON.parse(e.data).k.o}`.split('')[5] +
     `${JSON.parse(e.data).k.o}`.split('')[6] + `${JSON.parse(e.data).k.o}`.split('')[7] + ' US$'
     document.querySelector('.initial_release_decentraland').textContent = 'Fecha de lanzamiento : 20 de febrero de 2020'

}
fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
.then(response => response.json())
.then(result => {
     console.log(result)
    result.forEach(el => {
        if(el.id === 'bitcoin') {
         console.log(el.current_price)
         document.querySelector('.text_btc').textContent = el.current_price + ' US$'
         console.log(`${el.market_cap_change_percentage_24h}`.split("")[0])
         document.querySelector('.wentUp').textContent = '24hr ' + `${el.market_cap_change_percentage_24h}`.split("")[0]
          + `${el.market_cap_change_percentage_24h}`.split("")[1] + `${el.market_cap_change_percentage_24h}`.split("")[2] 
          + `${el.market_cap_change_percentage_24h}`.split("")[3] + '%'
        }
        if(el.id === 'ethereum') {
          console.log(el.current_price)
          document.querySelector('.text_eth').textContent = el.current_price + ' US$'
          console.log(`${el.market_cap_change_percentage_24h}`.split("")[0])
          document.querySelector('.wentUpEth').textContent = '24hr ' + `${el.market_cap_change_percentage_24h}`.split("")[0]
           + `${el.market_cap_change_percentage_24h}`.split("")[1] + `${el.market_cap_change_percentage_24h}`.split("")[2] 
           + `${el.market_cap_change_percentage_24h}`.split("")[3] + '%'
        }
        if(el.id === 'solana') {
          console.log(el.current_price)
          document.querySelector('.text_sol').textContent = el.current_price + ' US$'
          console.log(`${el.market_cap_change_percentage_24h}`.split("")[0])
          document.querySelector('.wentUpSol').textContent = '24hr ' + `${el.market_cap_change_percentage_24h}`.split("")[0]
           + `${el.market_cap_change_percentage_24h}`.split("")[1] + `${el.market_cap_change_percentage_24h}`.split("")[2] 
           + `${el.market_cap_change_percentage_24h}`.split("")[3] + '%'
        }
        if(el.id === 'dogecoin') {
          console.log(el.current_price)
          document.querySelector('.text_doge').textContent = el.current_price + ' US$'
          console.log(`${el.market_cap_change_percentage_24h}`.split("")[0])
          document.querySelector('.wentUpDoge').textContent = '24hr ' + `${el.market_cap_change_percentage_24h}`.split("")[0]
           + `${el.market_cap_change_percentage_24h}`.split("")[1] + `${el.market_cap_change_percentage_24h}`.split("")[2] 
           + `${el.market_cap_change_percentage_24h}`.split("")[3] + '%'
        }
        if(el.id === 'matic-network') {
          console.log(el.current_price)
          document.querySelector('.text_polygon').textContent = el.current_price + ' US$'
          console.log(`${el.market_cap_change_percentage_24h}`.split("")[0])
          document.querySelector('.wentUpPolygon').textContent = '24hr ' + `${el.market_cap_change_percentage_24h}`.split("")[0]
           + `${el.market_cap_change_percentage_24h}`.split("")[1] + `${el.market_cap_change_percentage_24h}`.split("")[2] 
           + `${el.market_cap_change_percentage_24h}`.split("")[3] + '%'
        }
        if(el.id === 'avalanche-2') {
          console.log(el.current_price)
          document.querySelector('.text_avalanche').textContent = el.current_price + ' US$'
          console.log(`${el.market_cap_change_percentage_24h}`.split("")[0])
          document.querySelector('.wentUpAvalanche').textContent = '24hr ' + `${el.market_cap_change_percentage_24h}`.split("")[0]
           + `${el.market_cap_change_percentage_24h}`.split("")[1] + `${el.market_cap_change_percentage_24h}`.split("")[2] 
           + `${el.market_cap_change_percentage_24h}`.split("")[3] + '%'
        }
        if(el.id === 'tron') {
          console.log(el.current_price)
          document.querySelector('.text_tron').textContent = el.current_price + ' US$'
          console.log(`${el.market_cap_change_percentage_24h}`.split("")[0])
          document.querySelector('.wentUpTron').textContent = '24hr ' + `${el.market_cap_change_percentage_24h}`.split("")[0]
           + `${el.market_cap_change_percentage_24h}`.split("")[1] + `${el.market_cap_change_percentage_24h}`.split("")[2] 
           + `${el.market_cap_change_percentage_24h}`.split("")[3] + '%'
        }
        if(el.id === 'decentraland') {
          console.log(el.current_price)
          document.querySelector('.text_decentraland').textContent = el.current_price + ' US$'
          console.log(`${el.market_cap_change_percentage_24h}`.split("")[0])
          document.querySelector('.wentUpDecentraland').textContent = '24hr ' + `${el.market_cap_change_percentage_24h}`.split("")[0]
           + `${el.market_cap_change_percentage_24h}`.split("")[1] + `${el.market_cap_change_percentage_24h}`.split("")[2] 
           + `${el.market_cap_change_percentage_24h}`.split("")[3] + '%'
        }
        
        
    });

})
