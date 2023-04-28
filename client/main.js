const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")
const submitFoodBtn = document.querySelector("#foodBtn")
const form = document.querySelector('form')
const body = document.querySelector('body')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFood = (event) => {
    event.preventDefault();
    let foodtext = document.querySelector('#food')
    let body = {
        foodtext: foodtext.value
    }
    
    axios.post("http://localhost:4000/api/body/",body).then((res)=> {
        data = res.data

        console.log(data)
    })
}



complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click',getFortune)
form.addEventListener('submit',getFood)