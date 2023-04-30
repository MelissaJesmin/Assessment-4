const db = require('../server/db.json')

//global variable for album id
let id = db.length

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

    // Part 2

    getAllAlbums : (req,res) => {
        let allAlbums = db;
        res.status(200).send(allAlbums)
    },

    createMusicAlbum : (req,res) => {
        id++;
        let newMusicAlbum = {...req.body,id:id}
        db.push(newMusicAlbum)

        res.status(200).send(db);
    },

    updateAlbumHearts : (req,res) => {
        id++;
        const {album_id} = req.params;
        const {type} = req.body;

        for(let i=0; i < db.length; i++) {
            if(db[i].id === +album_id) {
                if(type === 'increaseHearts') {
                    db[i].albumHearts++;
                }
                if(db[i].albumHearts > 0 && type==='decreaseHearts') {
                    db[i].albumHearts--;
                }
            }
            
        }
        res.status(200).send(db)
    },

    deleteAlbum : (req,res) => {
        id++;
        const {album_id} = req.params;

        for(let i=0; i < db.length; i++) {
            if(db[i].id === +album_id) {
                db.splice(i,1)
            }
            
        }
        res.status(200).send(db)
        
    }
}