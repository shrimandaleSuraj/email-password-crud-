const cl = console.log;

 const loginform = document.getElementById('loginform');
 const emailControl = document.getElementById('email');
 const passwordControl = document.getElementById('password');



  const db = [
        {
          email: 'jhon@gmail.com',
          password : "suraj",
        }
  ]
   const onlogin = (eve) => {
          eve.preventDefault();
        
          let promise = new Promise((resolve,reject)=>{
            
            setTimeout(() => {
                let error = true;
                    let emailvalue = emailControl.value;
                    let passwordvalue = passwordControl.value;
                      

                  db.forEach(obj=>{
                     if(obj.email === emailvalue && obj.password === passwordvalue){
                         error = false;
                     }
                  })
                    if(!error){
                       resolve('login succesfully')
                    }else{
                      reject('invalid username or password')
                    }
              }, 1000);
          })
            promise 

                
                .then((resp)=>{
                  Swal.fire({
                   
                    icon: 'success',
                     text : 'succesfully login',
                    
                  })
                })
                 .catch((err)=>{
                  Swal.fire({
                    icon: 'error',
                    
                    text: 'invalid username & password ',
                    
                    
                  })
                 })
                 .finally(()=>{
                  loginform.reset()
                 })
   }
   loginform.addEventListener('submit',onlogin)






