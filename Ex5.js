function isPal (s) { 
    if (s.length === 1 || s.length === 2) return true 

    if(s[0] !== s[s.length -1 ]) return false;
    return isPal(s.slice(1, -1))
}
console.log(isPal('level'))



