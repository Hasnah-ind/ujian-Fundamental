 function tambahMatrix(i){
    let matrix = i.value;
    let a = "";
    let b = "";
    for(y=0;y<matrix; y++){
    for(z=0;z<matrix; z++){
           a += "<table><tr><td><input type ='text' id='a1'></td></tr></table>" ;
              
    }
    document.getElementById("mx1").innerHTML = a;
    }
   
   for(y=0;y<matrix; y++){
    for(z=0;z<matrix; z++){
           b += "<table ><tr><td><input type ='text' id='a2'></td></tr></table>" ;
              
    }
    document.getElementById("mx2").innerHTML = b;
    }
  
}


function jumlah(i){
    let matrix = i.value;
    let c = "";
    let hasil = "";
    let g = document.getElementById('a1').value;
    let h = document.getElementById('a2').value;
    for(y=0;y<matrix; y++){
    for(z=0;z<matrix; z++){
    c += "<table><tr><td><input type ='text' id='a2'></td></tr></table>"  
    hasil = g + h;    
    }
    }

   document.getElementById("hasil").innerHTML = c;
   tambahMatrix(hasil);
}