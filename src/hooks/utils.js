export const  getUrl = (progress) =>{    
    const camelized = progress.split(" ").map((character,index) =>{ 
        if(index === 0) return character.toLowerCase()
        else return character
    }).join("")
    const url = `http://localhost:3004/${camelized}`
    return url
}

