$( "#Welcome-Dialog" ).dialog({
autoOpen: true,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
            modal: true,
      buttons: {
        Ok: function() {
          $( this ).dialog( "close" );
        }
});