const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune} = require('./controller')




app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
// app.post("/api/body",getFood);

/*Part 2*/
const albumController = require('./controller')
const {getAllAlbums, createMusicAlbum, updateAlbumHearts, deleteAlbum} = albumController

//routes
app.get('/api/albums',getAllAlbums)
app.post('/api/albums',createMusicAlbum)
app.put('/api/albums/:album_id',updateAlbumHearts)
app.delete('/api/albums/:album_id',deleteAlbum)









app.listen(4000, () => console.log("Server running on 4000"));
