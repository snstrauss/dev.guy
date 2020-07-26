export function removeHash(str){
    return str.replace('#', '');
}

export function getCurrentTab(){
    return document.location.hash.length ? parseInt(removeHash(document.location.hash)) : 0;
}

export default {
    removeHash,
    getCurrentTab
}