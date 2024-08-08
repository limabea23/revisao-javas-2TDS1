let armas = ["Laser", "Misséis","Canhão de Plasma", "Pistola", "Lança Chamas"];

let ataques = [];

ataques.push("wall-e"); //top robô mais fofo :)
ataques.push(armas[1]);
ataques.push(armas[3]);
ataques.push(armas[0]);
ataques.push(armas[4]);

for (let i = 0; i < ataques.length; i++){
    if(i == 0){
        console.log(`Nome do Robô: ${ataques[i]}`);
    } else{
        console.log(`Ataque ${i}: ${ataques[i]}`);
    }
}