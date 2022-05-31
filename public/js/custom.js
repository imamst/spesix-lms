$(document).ready(function(){
    /*-------------------------------------
      jquery Scollup activation code
    -------------------------------------*/
    $("#preloader").fadeOut("slow", function () {
      $(this).remove();
    });
    /*-------------------------------------
        All Checkbox Checked
    -------------------------------------*/
    $(".checkAll").on("click", function () {
      $(this).parents('.table').find('input:checkbox').prop('checked', this.checked);
    });

    /*-------------------------------------
          Select 2 Init
      -------------------------------------*/
      if ($.fn.select2 !== undefined) {
        $('.select2').select2({
          width: '100%'
        });
      }

    $(".clickable-row").on("click",function() {
        window.location = $(this).data("href");
    });

    $(".radio-label").on("click", function(){
      $(".radio-label").css("background-color","");
      $(this).css("background-color","#C9F5A5");
    });

    $(function () {
      $('[data-toggle="popover"]').popover({
        html: true,
      });
    });

    document.addEventListener('click', e => {

      const isDropdownButton = e.target.matches('[data-dropdown-button]')
  
      if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return
  
      let currentDropdown
      if(isDropdownButton) {
          currentDropdown = e.target.closest('[data-dropdown]')
          currentDropdown.classList.toggle('show')
      }
  
      document.querySelectorAll('[data-dropdown].show').forEach(dropdown => {
          if(dropdown == currentDropdown) return
          dropdown.classList.remove('show')
      })
    })
    
    const menuTriggerOpen = document.getElementById("menuTriggerOpen")
    const menuTriggerClose = document.getElementById("menuTriggerClose")
    
    function toggleNav(clickedElement = null){
        menuTriggerClose.classList.toggle('d-none')
        menuTriggerOpen.classList.toggle('d-none')
        document.querySelector('[data-nav]').classList.toggle('open')
    }
});