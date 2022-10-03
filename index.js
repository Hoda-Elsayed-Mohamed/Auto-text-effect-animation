const text = document.querySelector('.text')



    var longString = ['Web Developer', 'Freelancer',  'Youtuber', 'Instructor', 'Blogger', 'Influencer']

    let stringEl =0;
    let characterEl =0;


    newCareer();
    function newCareer(){
        characterEl++;

        var x = longString[stringEl].slice(0,characterEl);
       

        if(longString[stringEl].slice(0,1) ===  'I'){
        text.textContent = `I am An ${x}`;
        }else{
            text.textContent = `I am A ${x}`;
        }

       if(characterEl === longString[stringEl].length){
        stringEl++;
        characterEl = 0;
       }
    
       if(stringEl === longString.length){
        stringEl = 0;
       }
      setTimeout(newCareer, 300);
      
    }


 
      


