
function createParams(id , name , send)
{
  var first = '{"jsonrpc": "1.0", "id":"' + id + '", "method":"' + name + '", '
  var last = '"params": [';
  if send != false
    last = last + send;
  last = last + '] }';
  console.log(first + last);
  return first + last;
}
