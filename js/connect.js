//Masculino
const genderM = 'https://rickandmortyapi.com/api/character/47'
const episodesM = 'https://rickandmortyapi.com/api/episode/22,26,37'
//Feminino
const genderF = 'https://rickandmortyapi.com/api/character/344'
const episodesF = 'https://rickandmortyapi.com/api/episode/11,16,21'

// Fetch do personagem MASCULINO que foi buscado na API
async function getContentM() {
    try{
        const response = await fetch(genderM)
        const data = await response.json()
        console.log(data)
        
        let character = data
        return character
        
    }catch(error){
        console.error(error)
    }
}


// Fetch do personagem FEMININO que foi buscado na API
async function getContentF() {
    try{
        const response = await fetch(genderF)
        const data = await response.json()

        let character = data
        return character

    }catch(error){ 
        console.error(error)
    }
}

// Reconhece os EPISODIOS do personagem Masculino
async function getEpisodesM(){
    try{
        const response = await fetch(episodesM)
        const data = await response.json()
        
        let episode = data
        return episode

    }catch(error){
        console.error(error)
    }
}

// Reconhece os EPISODIOS do personagem Feminino
async function getEpisodesF(){
    try{
        const response = await fetch(episodesF)
        const data = await response.json()
        
        let episode = data
        return episode
        
    }catch(error){
        console.error(error)
    }
}
// Sincronizar os dados da API para as IDs no HTML
    //Personagem Masculino
async function showCharacterM(){
    try{
        let character = await getContentM()
        document.getElementById('nameM').innerHTML = character.name

        let imgM = character.image
        document.getElementById('imageM').src = (imgM)

        document.getElementById('genderM').innerHTML = character.gender
        document.getElementById('statusM').innerHTML = character.status
        document.getElementById('originM').innerHTML = character.origin.name
        
        //Episodios
        let episode = await getEpisodesM()
        document.getElementById('nameEpM1').innerHTML = episode[0].name
        document.getElementById('airDateEpM1').innerHTML = episode[0].air_date
        document.getElementById('nameEpM2').innerHTML = episode[1].name
        document.getElementById('airDateEpM2').innerHTML = episode[1].air_date
        document.getElementById('nameEpM3').innerHTML = episode[2].name
        document.getElementById('airDateEpM3').innerHTML = episode[2].air_date

    }catch(error){
        console.error(error)
    }
}
showCharacterM();

async function showCharacterF(){
    try{
        let character = await getContentF()
        document.getElementById('nameF').innerHTML = character.name
        let imgF = character.image
        document.getElementById('imageF').src = (imgF)
        document.getElementById('genderF').innerHTML = character.gender
        document.getElementById('statusF').innerHTML = character.status
        document.getElementById('originF').innerHTML = character.origin.name
        
        //Episodios
        let episode = await getEpisodesF()
        document.getElementById('nameEpF1').innerHTML = episode[0].name
        document.getElementById('airDateEpF1').innerHTML = episode[0].air_date
        document.getElementById('nameEpF2').innerHTML = episode[1].name
        document.getElementById('airDateEpF2').innerHTML = episode[1].air_date
        document.getElementById('nameEpF3').innerHTML = episode[2].name
        document.getElementById('airDateEpF3').innerHTML = episode[2].air_date

    }catch(error){
        console.error(error)
    }
}
showCharacterF();