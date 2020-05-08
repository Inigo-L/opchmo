//webkitURL is deprecated but nevertheless
URL = window.URL || window.webkitURL;

function formHandler(){
            //get input names from form
            
            var field1 = document.getElementById("field1").name;
            var field2 = document.getElementById("field2").name;
            var field3 = document.getElementById("field3").name;
            var field4 = document.getElementById("field4").name;


            //get inputs from form
            
            var userId = document.getElementById("userId").value;
            var input1 = document.getElementById("field1").value;
            var input2 = document.getElementById("field2").value;
            var input3 = document.getElementById("field3").value;
            var input4 = document.getElementById("field4").value;
            
            
            //write inputs to database

            function writeUserData(userId, input1, input2, input3, input4) {
              db.collection("demo").doc(userId).set({
                "userId": userId,  
                field1: input1,
                field2: input2,
                field3: input3,
                field4: input4,
              }/*, {merge: true}*/ )  //uncomment out this if you don't want to overwrite -e.g. if the same user is uploading additional info. Have left out for now so all data has same shape
                then(function() {
                  //write whatever you want to handle success here
                        console.log("data successfully uploaded!");
                    })
                    .catch(function(error) {
                  //write whatever you want on error here
                        console.error("Error uploading data: ", error);
                    });
            }
            };
