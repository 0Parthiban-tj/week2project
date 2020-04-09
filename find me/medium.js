let name1=["benz","audi","volvo","jaguar","skoda"];
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
        document.getElementById('description').innerHTML = "<p>Description:<br> It is a German global automobile marque and a division of Daimler AG. It is known for luxury vehicles, vans, trucks, buses, coaches and ambulances.<br>Models:C class, G class</p>";
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
        window.location.href = "hard.html";
    }
    sub=0;
    name=name1[j];
    changeIt();
    if(j==1)
    {
        document.getElementById('description').innerHTML ="<p>Description:<br>It is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. It is a member of the Volkswagen Group.Models:A series, Q series</p>";  
    }
    else
    if(j==2)
    {
        document.getElementById('description').innerHTML ="<p>Description:<br>It is a Swedish multinational manufacturing company headquartered in Gothenburg. While its core activity is the production, distribution and sale of trucks, buses and construction equipment<br>Models:XC60,S60</p>";  
    }
    if(j==3)
    {
        document.getElementById('description').innerHTML ="<p>Description:<br>It is a British multinational car manufacturer with its headquarters in Whitley, Coventry, England.<br>Models:F-Pace,XF </p>" ; 
    }
    if(j==4)
    {
        document.getElementById('description').innerHTML ="<p>Description:<br>It is a Czech automobile manufacturer founded in 1895 as Laurin & Klement and headquartered in Mladá Boleslav, Czech Republic.It became a wholly owned subsidiary of the Volkswagen Group<br>Models:Kodiaq,Carlo,Octavia</p>";  
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


