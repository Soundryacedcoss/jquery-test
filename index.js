
    var user=[
        {Id:1,name:"p1",Email:"123@",password:"123",city:"c1",role:"Admin"},
        {Id:2,name:"p2",Email:"1234@",password:"1234",city:"c2",role:"Admin"},
        {Id:3,name:"p3",Email:"124@",password:"124",city:"c3",role:"Guest"}
    ]
    // console.log(user.name)
    
   
   $(document).ready(function(){
   $("#bt1").click(function(){
    var username=$("#username").val();
    var password=$("#password").val();
       
    const ids = user.map((obj) => {
    if(username==obj.name && password==obj.password && obj.role=="Guest"){
        console.log(obj.name);
       $("p").text("welcome " + username );
    } else if(username==obj.name && password==obj.password && obj.role=="Admin"){
        display();
    }
})
 function display(){
    var table= '<table border=1px><tr><th>Name</th><th>Id</th><th>Action</th></tr> '
        user.forEach(element => {
            table='<tr><td>'+
                element.name+
                '</td><td>'+
                    element.Id+
                    '</td><td>'+
                '<a href="">Delete</a>'
                '</td></tr>'
                // table+='</table>';
            });
        table+='</table>';
        $("p").text( "welcome" +table);
}
})   
})
