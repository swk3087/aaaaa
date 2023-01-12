

var encrypt=()=>{

  var password=document.getElementById('password').value;

  var numpassword=new Array();

  var encrypt=new Array();

  let i,j;

    for(i=0;i<password.length;i++){

        numpassword[i]=password.charCodeAt(i);

    }

    var value='';

    for(j=0;j<password.length;j++){

        let data=numpassword[j]-6+j;

        value+=String.fromCharCode(data);

  }

   

   if(password!=""){ 

   document.getElementById('encrypted').style.color="white"; document.getElementById('encrypted').value=value;

   }

   else{

 document.getElementById('encrypted').style.color="red"; document.getElementById('encrypted').value="Enter your password !";

   }

}

var decrypt=()=>{

   

   if(document.getElementById('encrypted').value!="암호"){

    var encrypt=document.getElementById('encrypted').value;

    var numpassword=new Array();

    var decrypt=new Array();

    var i;

    for(i=0;i<encrypt.length;i++){

        numpassword[i]=encrypt.charCodeAt(i);

    }

    var value="";

    for(i=0;i<encrypt.length;i++){

        let data=numpassword[i]+6-i;

        value+=String.fromCharCode(data);

    }

    document.getElementById('decrypt').value=value;

}

else{

    document.getElementById('encrypted').value="";

}

}
