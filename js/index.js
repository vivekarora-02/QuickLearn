

let category = document.getElementsByClassName('category');
 
const selectBtn = document.querySelectorAll(".btn-style");
const contributionBtn = document.querySelector(".contribution-btn");

for(let i =0;i<category.length;i++)
{

    category[i].querySelector('.btn-style').addEventListener('click', () => {
       
        contributionBtn.style.backgroundColor = "white";
        contributionBtn.style.color = "black";
        for (let j = 0; j < category.length; j++){
        selectBtn[j].style.backgroundColor = "white";
        selectBtn[j].style.color = "black";
        }
        selectBtn[i].style.backgroundColor = "#6940d3";
        selectBtn[i].style.color = "white";

        for(let i=0;i<category.length;i++)
        {
            let x = category[i].querySelector('.select-option');
             x.style.display="none";
        }

        let x = category[i].querySelector('.select-option');
        x.style.display="block";
        
    })
}

