

let category = document.getElementsByClassName('category');
 
for(let i =0;i<category.length;i++)
{

    category[i].querySelector('.btn-style').addEventListener('click',()=>{

        for(let i=0;i<category.length;i++)
        {
            let x = category[i].querySelector('.select-option');
             x.style.display="none";
        }

        let x = category[i].querySelector('.select-option');
        x.style.display="block";
        
    })
}

