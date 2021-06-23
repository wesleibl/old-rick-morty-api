//Feminino
const genderF = 'https://rickandmortyapi.com/api/character/344'
const episodesF = 'https://rickandmortyapi.com/api/episode/11,16,21'



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