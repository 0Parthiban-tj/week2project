let name1=["bugatti","porsche","shelby","ferrari","bently"];
var name;
var count=0;
var a=[];
var k=1;
var j=1;
var sub=0;
var audio1=new Audio('win.mp3');
var audio2=new Audio('lose.mp3');
var audio3=new Audio('incorrect.mp3');
//validation function
function validation(counter){

   
       var choice=counter;
        var temp=name[choice-1];
        var element = document.getElementById(counter);
        var letter=element.value;
        
        element.style.color = '#ff0000';
        if(letter==temp)
        {
            
             element.style.color = '#008000';
             sub++;
            
        }
        else
        {
           audio3.play();
            window.alert("Incorrect letter.");
            element.value='';
            a[k]=letter;
            
            //To print Repeated Values
            console.log("Repeated values");
            document.getElementById('repeated').value = array();
            document.getElementById('repeatedval').value = name.length-k;

          //  for(var l=0;l<name.length;l++)
          k++;
                console.log(a);
            
            //Out of Chances
            count++;
            if(count==name.length)
            {
                audio2.play();
                alert("Out Of Chances");
                window.location.href = "./index.html";
            }

        }
       
        
    }



var array = function() {
    return a;    
};
//textbox generation
function changeIt()
{
    var my_div = document.getElementById('inputTextBox')
    my_div.innerHTML='';
    var counter=1;
    for(var x=1;x<=name.length;x++)
    {
        
       
        my_div.innerHTML = my_div.innerHTML +"<br><input type='text' id= '"+counter+"' class='textbox'  maxlength='1' onkeyup='validation(this.id)'>";
        counter++;
    }
   
    
}


//levels
function UserInput(){
  
   // for(var j=0;j<name1.length;j++)
    {
        
        name=name1[0];
        document.getElementById('description').innerHTML = "<p>Description:<br> The Car named as the Car of the Decade by BBC programme Top Gear- quite the endorsement!. This iconic car was the fastest street legal car for some time, with the Super Sport model having a top speed of 267.8mph. <br>Models:veryon</p>";
        changeIt();
       
        
    }
}
window.onload=UserInput;

function myFunction() {
    if(sub==name.length)
    {
        
        audio1.play(); 
    alert("Wow!..Completed, CLICK OK");
    

    document.getElementById('repeated').value='';
    document.getElementById('repeatedval').value='';

    if(j==5)
    {
        window.location.href = "index.html"
    }
    sub=0;
    name=name1[j];
    changeIt();
    if(j==1)
    {
        document.getElementById('description').innerHTML ="<p>Description:<br>It is a German automobile manufacturer specializing in high-performance sports cars, SUVs and sedans. The headquarters is in Stuttgart, and is owned by Volkswagen AG.<br>Models:Cayenne,Panamera,Spyder</p>";  
    }
    else
    if(j==2)
    {
        document.getElementById('description').innerHTML ="<p>Description:<br>It is a American automotive designer, racing driver, entrepreneur, and author. It is best known for his involvement with the AC Cobra and Mustang for Ford Motor Company,<br>Models:Cobra</p>";  
    }
    if(j==3)
    {
        document.getElementById('description').innerHTML ="<p>Description:<br>It is an Italian luxury sports car manufacturer based in Maranello. Founded by Enzo in 1939 out of Alfa Romeo's race division as Auto Avio Costruzioni, the company built its first car in 1940.<br>Models:Portofino,GTC4 </p>";  
    }
    if(j==4)
    {
        document.getElementById('description').innerHTML ="<p>Description:<br>It is a British manufacturer and marketer of luxury cars and SUVs—and a subsidiary of the Volkswagen Group since 1998.<br>Models:Mulsanne,Continental GT</p>";  
    }
    j++;
    return true;
    }
    else
    {
        alert("Not yet completed..Click Ok to continue");
        return false;
    }
    
  }


