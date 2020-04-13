function inicio(){
    //1.Composite function
    console.log(rokketUno(2,5,3)) // this outputs 30
    console.log(rokketUno(4,2,2)) // this outputs 16
    console.log(rokketUno(8,2,1)) // this also outputs 16

   //2.Longest string
   console.log(rokketDos(list)) // this outputs 'company'
   //3. String repetition
   console.log(rokketTres('node', 5)) // this outputs 'nodenodenodenodenode'
   console.log(rokketTres('abc', 2)) // this outputs 'abcabc'
    //4. Only last names
    console.log(rokketCuatro(contacts)) // this outputs ['Rokket', 'Bond', 'Potter']
    // 5. Unique numbers
    console.log(rokketCinco([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
    console.log(rokketCinco([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]


}

//respuesta 1
function rokketUno(num1,num2,num3){

    return(num1*num2*num3);

}

//respuesta 2
const list = ['best', 'company', 'ever']
function rokketDos(list){
    let mayor = list[0].length;
    let posicion = 0;
   for(i=0;i<list.length;i++){
if(list[i].length >mayor){
posicion=i;

}
}
return("La palabra más larga es "+ list[posicion]);
}

//respuesta 3
function rokketTres(valor,repeticion){
  let sumatoria="";
for(i=1;i<=repeticion;i++){
    sumatoria+=valor;
}
return sumatoria;

}

//respuesta 4
const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' },
    ]
    
function rokketCuatro(contacts){

let arrayApellido=[];
contacts.forEach(function (elemento, indice, array){
    arrayApellido.push(elemento.lastName);
})

return arrayApellido;

}

//respuesta 5
function rokketCinco(arrayUno,arrayDos){
    arrayFinal= arrayUno.concat(arrayDos);
 
const distinto = (valor, indice, self) => {
    return self.indexOf(valor) === indice;
}
    return arrayFinal.filter(distinto);

}


