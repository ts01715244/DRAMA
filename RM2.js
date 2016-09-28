function videoGG2(id,name) { 
  str = '<marquee>'+name+'</marquee><iframe src="https://docs.google.com/file/d/'+id+'/preview" width="100%" height="350" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>';
  return str;
}

function videoG2(id,name) {
  document.getElementById("player2").innerHTML = videoGG2(id,name);		
}
