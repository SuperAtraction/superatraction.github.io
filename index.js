$("#LND").load("news/lastest/index.html");

$( "#Welcome-Dialog" ).dialog({
autoOpen: true,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      },
          modal: true
});

$("#LND").dialog({
  autoOpen: true,
  show: {
    effect: "blind",
    duration: 1000
  },

  hide: {
    effect: "explode",
    duration: 1000
  },
      modal: true
})

    $( "#Lastest-News" ).on( "click", function() {
      $( "#LND" ).dialog( "open" );
    });