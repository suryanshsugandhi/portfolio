var allSections = document.getElementsByTagName('section');
var currentElement = allSections[0], nextElement = allSections[1];
var ind = 1;

function nextSection(){
    $container = $('#container-custom');
    if(nextElement){
        $scrollTo = $(nextElement); 
        console.log('here')       
        $container.scrollTop(
            $scrollTo.offset().top - $container.offset().top + $container.scrollTop()
        )
        
        if(ind < allSections.length){
            ind++;
            nextElement = allSections[ind];
        }
        else{
            nextElement = allSections[0];
        }
    }
}