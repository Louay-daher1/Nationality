fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(json=> {
        json.forEach(country => {
            console.log(country);
        let AllCountries=document.getElementById("AllCountries");
        let countries=document.getElementById("countries");
        let flags=document.getElementById("flags");
       
        let count=document.createElement('img');
        count.src=country.flags.png;
        count.addEventListener("click",() =>{
         const message=`Country name is ${country.name.common}`
         alert(message)
        })
        flags.appendChild(count);
        let option=document.createElement('option');
        option.innerHTML=country.name.common;

        AllCountries.appendChild(option);
        });
    });
