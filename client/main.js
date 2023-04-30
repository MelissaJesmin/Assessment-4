

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector("#fortuneButton")

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


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click',getFortune)


/*Part 2 */
//get elements from html
const albumContainer = document.querySelector('#album-container')
const form = document.querySelector('form')

//set base url
const baseURL = `http://localhost:4000/api/albums`


//callback function for catch
const errCallback = err => console.log(err.response.data)


const getAllAlbums = () => {
    axios.get(baseURL).then((res) => {
        albums = res.data
        displayAlbum(albums)
    })
    .catch(errCallback)
}

const createMusicAlbum = (body) => {
    axios.post(baseURL,body).then((res) => {
        albums = res.data
        displayAlbum(albums)
    })
    .catch(errCallback)
}

const updateAlbum = (id,type) => {
    axios.put(`${baseURL}/${id}`,{type}).then((res) => {
        albums = res.data
        displayAlbum(albums)
    })
    .catch(errCallback)
}

const deleteAlbum = (id) => {
    axios.delete(`${baseURL}/${id}`).then((res) => {
        albums = res.data
        displayAlbum(albums)
    })
    .catch(errCallback)
}

function submitHandler(event) {
    event.preventDefault()
    
    let albumTitle = document.querySelector('#title')
    let albumImageURL = document.querySelector('#img')
    let albumArtist = document.querySelector('#artist')
    let albumHearts = document.querySelector('input[name="hearts"]:checked')
    


    //create body object for post
    let body = {
        albumTitle: albumTitle.value,
        albumArtist: albumArtist.value,
        albumHearts: albumHearts.value, 
        albumImageURL: albumImageURL.value
    }

    createMusicAlbum(body)

    albumTitle.value = ''
    albumArtist.value = ''
    albumHearts.checked = false
    albumImageURL.value = ''
}

function createAlbumCard(album) {
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')

    albumCard.innerHTML = `<img alt='album cover' src=${album.albumImageURL} class="album-cover"/>
    <p class="album-title"> ${album.albumTitle}</p>
    <p class="album-artist">Artist: ${album.albumArtist}</p>
        <div class="btns-container">
        <button onclick="updateAlbum(${album.id}, 'decreaseHearts')">💔</button>
        <p class="album-hearts">${album.albumHearts} hearts</p>
        <button onclick="updateAlbum(${album.id}, 'increaseHearts')">❤️</button>
    </div>
    <button onclick="deleteAlbum(${album.id})">Remove</button>
    `
    albumContainer.appendChild(albumCard)
}


function displayAlbum(arr) {
    albumContainer.innerHTML = ''
    for(let i =0; i < arr.length; i++) {
        createAlbumCard(arr[i])
    }
}

form.addEventListener('submit',submitHandler)

getAllAlbums()