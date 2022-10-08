var nameSpan = document.getElementById("nameDisplay");
    
        nameSpan.addEventListener('click', function(e){
            console.log("Your Mom")
            var element = e.target;
            var url = element.getAttribute('data-href');
            window.open(url, '_blank').focus();
        });    