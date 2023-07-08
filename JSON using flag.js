Display  all country  flag in console

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rest API class</title>
</head>
<body>
    <h1>welcome</h1>
<script>
    var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var data = JSON.parse(request.response);
    console.log(data);
    var count = 0;
    data.forEach((element)=>{
        console.log(element.flag);
        
    })}
    //for(var i=0;i<data.length;i++)
   // {
      //  count += data[i].population;
   // }
   // console.log(count);
//}
</script>
</body>
</html>
