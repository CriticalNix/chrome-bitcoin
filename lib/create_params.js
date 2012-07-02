
function createParams(id , name , send)
{
  var first = '{"jsonrpc": "1.0", "id":"' + id + '", "method":"' + name + '", '
  var last = '"params": ['
  for (s in send)
  {
    var last += s;
  }
  last += ']';
  return first + last;
}
