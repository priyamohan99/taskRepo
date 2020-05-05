setTimeout(() => process.exit(),2000);//process fun calling

process.on('exit',() => { //on event calling
    console.log('Process will exit now. See you later!');
});
console.log('Hello!');