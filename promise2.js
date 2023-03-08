var myPromise = new Promise(function (resolve){
    setTimeout(function (){
        resolve("Te quiero")
    }, 5000);
})

myPromise.then((text) => {
    console.log(text)
});