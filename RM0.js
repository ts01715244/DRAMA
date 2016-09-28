function videoGG0(id,name) { 
  str = '<marquee>'+name+'</marquee><iframe src="https://docs.google.com/file/d/'+id+'/preview" width="100%" height="350" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>';
  return str;
}

function videoG0(id,name) {
  document.getElementById("player1").innerHTML = videoGG0(id,name);		
}
