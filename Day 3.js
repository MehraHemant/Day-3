// Use the rest countries API URL -> https://restcountries.com/v3.1/all and display all the countries

fetch('https://restcountries.com/v3.1/all')
.then((response)=>response.json())
.then((data)=>{
    console.log(data);
    let countries_data = data;
    countries_data.map(country_data=>{
        console.log({Name: country_data.name.common, Region: country_data.region, SubRegion: country_data.subregion, Population: country_data.population})
    })
})
