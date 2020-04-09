let name1=["renault","suzuki","kia","mahindra","tata"];
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

          k++;
        
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
        document.getElementById('description').innerHTML = "<p>Description:<br>The company produces a range of cars and vans, and in the past has manufactured trucks, tractors, tanks, buses/coaches, aircraft and aircraft engines, and autorail vehicles.<br>Models:Kwid,Captur,Triber</p>";  
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
        window.location.href = "medium.html";
    }
    sub=0;
    name=name1[j];
    changeIt();
    if(j==1)
    {
        document.getElementById('description').innerHTML ="<p>Description:<br>It is a Japanese multinational corporation headquartered in Minami-ku, Hamamatsu.It manufactures automobiles, four-wheel drive vehicles, motorcycles, all-terrain vehicles (ATVs), outboard marine engines, wheelchairs. <br>Models:Nexa Series</p>";  
    }
    else
    if(j==2)
    {
        document.getElementById('description').innerHTML ="<p>Description:<br>It is a South Korean multinational automotive manufacturer headquartered in Seoul<br>Models:Sektos,Carnival</p>" ;  
    }
    if(j==3)
    {
        document.getElementById('description').innerHTML ="<p>Description:<br>It is an Indian multinational car manufacturing corporation headquartered in Mumbai, Maharashtra, India.<br>Models:Verito,Marrazzo,Alturas</p>"; 
    }
    if(j==4)
    {
        document.getElementById('description').innerHTML ="<p>Description:<br>is an Indian multinational conglomerate holding company headquartered in Mumbai, Maharashtra, India.<br>Models:Harrier,Altroz</p>";  
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


