
function createParams()
{
  var self = this;
  self.rpc = function()
  {
    return '{"jsonrpc": "1.0", ';
  }
  self.id = function(id)
  {
    return '"id":"#{id}", ';
  }
  self.method = function(name)
  {
    return '"method":"#{name}", ';
  }
  self.params = function(send)
  {
    var string = '"params": ["';
    for (s in send)
    {
      string = string + s + '","';
    }
    string = string + '] }';
    return string;
  }
}
