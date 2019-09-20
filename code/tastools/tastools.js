var runner = new ActiveXObject("Wscript.Shell");
runner.run('setup.sh')
$('').keypress(function(event){
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if(keycode == '123'){
  $('').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '192'){
      runner.run('mouseget.sh')
    else if(keycode == '112'){
      runner.run('kd.sh')
    else if(keycode == '113'){
      runner.run('ku.sh')
    else if(keycode == '65'){
     runner.run('a.sh')
   else if(keycode == '66'){
     runner.run('b.sh')
   }
    }
    }
    }
