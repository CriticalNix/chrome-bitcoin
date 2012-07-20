function lastSpent(res)
{
  transactions = JSON.parse(res);
  results = transactions.result;
  if (results.length > 0)
  {
    amount = results[results.length - 1].amount;
    if (amount < 0)
    {
      msg = "Last spent: " + amount;
      $("#spent").html(msg);
    }
    else
    {
      msg = "Last receive: " + amount;
      $("#spent").html(msg);
    }
  }
}

function errorLastSpent(res)
{
  $("#spent").html("Error encountered when retrieving last transaction.")
}
