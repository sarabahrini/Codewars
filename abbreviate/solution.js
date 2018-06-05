function abbrevName(name){
    var fullName = name.split(' ');
    return (fullName[0][0] + '.' + fullName[1][0]).toUpperCase();
    }