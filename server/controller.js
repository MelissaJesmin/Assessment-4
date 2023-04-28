module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req,res) => {
        const fortunes = ["A lifetime of happiness lies ahead of you.", "A pleasant surprise is waiting for you.", "Happy life is just in front of you.","It is better to deal with problems before they arise.","It is honorable to stand up for what is right, however unpopular it seems.","It is worth reviewing some old lessons."];
        
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getFood: (req,res) => {
        
        let newFood = req.body
        res.status(200).send(newFood)
    }

}