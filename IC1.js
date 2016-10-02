function videoGG1(id,name) { 
  str = '<marquee>'+name+'</marquee><iframe src="https://docs.google.com/file/d/'+id+'/preview" width="100%" height="350" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>';
  return str;
}

function videoG1(id,name) {
  document.getElementById("player1").innerHTML = videoGG1(id,name);		
}
