module.exports = function check(str, bracketsConfig) {
    let config = bracketsConfig.map((e) => e.join(''));
    
    for (let i = 0; i < config.length; i += 1) {
        while(str.includes(config[i])) {
            str = str.replace(config[i], "");
            i = 0;
        }
    }
    return str.length === 0 ? true : false;
}
