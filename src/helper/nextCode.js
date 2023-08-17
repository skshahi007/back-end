export const nextCode =(currentCode,deletedCode) => {
    var first=currentCode.charCodeAt(0);
    var second=currentCode.charCodeAt(1);

    if(second<122){
        second++;
    }else{
        second=97;
        first++;
    }
    return String.fromCharCode(first,second);
}