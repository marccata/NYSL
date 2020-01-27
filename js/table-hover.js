/*
$("tr").hover(function() {

    $el = $(this);
    
    $el.parent().addClass("hover");
  
    if ($el.parent().has('td').length == 4)
      
        $el
        .parent()
        .prevAll('tr:has(td[rowspan]):first')
        .find('td[rowspan]')
        .addClass("hover");
  
  }, function() { 
        
    $el
      .parent()
      .removeClass("hover")
      .prevAll('tr:has(td[rowspan]):first')
      .find('td[rowspan]')
      .removeClass("hover");
  
  });