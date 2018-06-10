function capitalize(s){
    let string1 = ''
    let string2 = ''
    for(let i=0; i<s.length; i++){
    if( i % 2 === 0){
    string1 += s[i].toUpperCase();
    }else {
    string1 += s[i];
    }
    }
    for(let i=0; i<s.length; i++){
    if( i % 2 === 1){
    string2 += s[i].toUpperCase();
    }else {
    string2 += s[i];
    }
    
    }
    return[string1,string2]
    }