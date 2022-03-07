var cardExist=false;

const cardPokemon = pokemonsBoard.getElementsByClassName("card");
console.log(cardPokemon.length)
const cardInfo = document.getElementById("cardInfo");

for(let i=0;i<cardPokemon.length;i++){
    const card = document.getElementById(`${pokemons[0].pokemon[i].name}`);
    card.addEventListener("click",()=>{

        var weaknesses = pokemons[0].pokemon[i].weaknesses;
        var typesArray = pokemons[0].pokemon[i].type;

        var preE = pokemons[0].pokemon[i].prev_evolution;
        var nextE = pokemons[0].pokemon[i].next_evolution;

        console.log(preE)
        console.log(nextE)

        var cardInfoDetails;
        var cardInfoContainer;
        if(window.innerWidth<780){
            cardInfoDetails="cardInfoDetailsMovil"
            cardInfoContainer="cardInfoContainerMovil"
        }
        else{
            cardInfoDetails="cardInfoDetailsPC"
            cardInfoContainer="cardInfoContainerPC"
        }
        if(cardExist==false){
            cardInfo.innerHTML=`
            <div id="Card${pokemons[0].pokemon[i].name}" class="${cardInfoContainer}"> 
                <div class="cardInfoContent">
                    <div class="cardInfoHeader type${typesArray[0]}">
                        <h1>${pokemons[0].pokemon[i].name}</h1>
                        <input type="button" id="cardBigButton"  value="x">
                    </div>
                    <div class="cardInfoResume">
                        <img src=${pokemonDes[i].art_url} alt="">
                        <div class="${cardInfoDetails}">
                            <div class="detailsType" id="detailsType">
                                <p class="pokeId">${pokemons[0].pokemon[i].id}</p>
                            </div>
                            <div class="infoPokemon">
                                ${pokemonDes[i].description}
                            </div>

                        </div>
                    </div>
                    <div class="cardInfoFeatures">
                        <div class="featuresPoke">
                            <div>
                                <h5>Height</h5>
                                <p>${pokemons[0].pokemon[i].height}</p>
                            </div>
                            <div>
                                <h5>Weight</h5>
                                <p>${pokemons[0].pokemon[i].weight}</p>
                            </div>
                            <div id="weaknesses">
                                <h5>Weaknesses</h5>
                                
                            </div>
                        </div>
                        <div class="evolutionsPoke" id="divEvolutions">
                            
                        </div>
                        
                    </div>
                
                </div>

            </div>`

            const divEvolutions = document.getElementById("divEvolutions");
            
            if(preE!=undefined){
                for(let i=0;i<preE.length;i++){
                    for(let j=0;j<pokemonDes.length;j++){
                        if(pokemonDes[j].name == preE[i].name){
                            divEvolutions.innerHTML+=`
                            <div>
                                <p>${preE[i].name}</p>
                                <img src="${pokemonDes[j].art_url}"/>
                            </div>`
                        }
                    }
                }
                console.log("existe")
            }
            if(nextE!=undefined){
                for(let i=0;i<nextE.length;i++){
                    for(let j=0;j<pokemonDes.length;j++){
                        if(pokemonDes[j].name==nextE[i].name){
                            divEvolutions.innerHTML+=`
                            <div>
                                <p>${nextE[i].name}</p>
                                <img src="${pokemonDes[j].art_url}"/>
                            </div>`
                        }
                    }
                }
            }
            

            const detailsType=document.getElementById("detailsType");
            for(let i=0;i<typesArray.length;i++){
                detailsType.innerHTML+=`<p class="type${typesArray[i]}">${typesArray[i]}</p>`
            }

            const weaknessesAdd = document.getElementById("weaknesses");
            for(let i=0;i<weaknesses.length;i++){
                weaknessesAdd.innerHTML+=`<p class="type${weaknesses[i]}">${weaknesses[i]}</p>`
            }


            const cerrarCard=document.getElementById("cardBigButton");
            cerrarCard.addEventListener("click",()=>{
                cardInfo.innerHTML="";

            })
        }
        
        
    })
}


