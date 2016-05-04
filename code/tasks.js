function one(){
    setTimeout(function(){
        console.log('one');
    },3000)
}

function two(){
    console.log('two');
}

function def(){
    one();
    two();
    console.log('def');
}
def();