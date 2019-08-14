function removeUrlAnchor(url){
  for (i=0; i<url.length; i++){
    if(url[i] === '#'){
    return url.substr(0,i) 
    }
  }
  return url;
}
