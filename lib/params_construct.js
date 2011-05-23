    var params = '{"jsonrpc": "1.0", "id":"curltest", "method": "sendtoaddress", "params": ["' + address + '",' + amount + '] }';

function createParms()
{
  var self = this;
  self.rpc = function()
  {
    return '{"jsonrpc": "1.0",';
  }
}
