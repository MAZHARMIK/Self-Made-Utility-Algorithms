#Algorithm for converting any nested object in the format which is accepted by jquery-ui Accordion

$(document).ready(function(){
  //sample nested object
  var obj  = {
              "A": {
                  "id": "0",
                  " B": {
                      "id": "1",
                      "some_value" : "2"
                  },
                  " C": {
                    "id": "2"
                  },
                  " D": {
                    "id": "3"
                  }
              }	
            };


      //This will find the object length
      function ObjLength(obj) {
        return Object.keys(obj).length;
      }

      // creatorAccordion function 
      function creatorAccordion(Main){
        var accordion_string = '';
        $.each(Main , function(key1 , value1){
          if(key1 !== 'id')
          {
            accordion_string += '<h1>'+ key1 +'</h1>';
            if(ObjLength(value1)==1) {
              accordion_string += '<div></div>'; 
            }
            else {
              accordion_string += '<div><div id="accordion">';
              accordion_string +=  creatorAccordion(value1);
              accordion_string += '</div></div>'; 
            }
          }
          });

        return accordion_string;
      }




      // DriverAccordion function
      function DriverAccordion(obj) {
        var accordion_string = '<div class="accordion">'
          accordion_string += creatorAccordion(obj);
        accordion_string += '</div>';

        return accordion_string;
      }

      //calling the function
      $("#tree").html(DriverAccordion(obj));

      $( "#accordion" ).accordion({
          event: "click",
          collapsible: true,
          heightStyle: "content",
          active: false,
          icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
      });

});
