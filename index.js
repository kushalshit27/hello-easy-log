module.exports.log = (code, msg, data) => {
        if(!code){
            code = null;
        }
        if(!msg){
            msg = null;
        }
        if(!data){
            data = null;
        }
        return (`${code}, ${msg}, ${data}`)
}

module.exports.welcome= (name) => {
    return (`Hello ${name}`)
}