function validateUsr(username) {
    //   res =  //regex here/.test(username) 
    //   return res
    //('^[0-9]+$')=('^\\d+$') 
    
    res = /^([a-z0-9_]{4,16})$/.test(username)
    return res
    
    }