const clearScreen = function(){
    const content = document.querySelector('.content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
};

export default clearScreen;