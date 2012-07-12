function lastSpent(res)
{
  transactions = JSON.parse(res);
  results = transactions.result;
  if (results.length > 0)
  {
    amount = results[results.length - 1].amount;
    if (amount < 0)
    {
      $("#spent").html("Last spent: " + amount);
    }
    else
    {
      $("#spent").html("Last receive: " + amount);
    }
  }
}

function errorLastSpent(res)
{
  $("#spent").html("Error encountered when retrieving last transaction.")
}
