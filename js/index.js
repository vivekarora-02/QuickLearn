

let category = document.getElementsByClassName('category');
 
for(let i =0;i<category.length;i++)
{

    category[i].querySelector('button').addEventListener('click',()=>{

        for(let i=0;i<category.length;i++)
        {
            let x = category[i].querySelector('ul');
        x.style.display="none";
        }

        let x = category[i].querySelector('ul');
        x.style.display="block";
        
    })
}
