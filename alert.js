document.addEventListener("DOMContentLoaded", () => {
  
    let alertID = "top-yellow";
  
    // Show alert
    let alertClosed = window.sessionStorage.getItem('alert-closed');
        if (alertClosed == null){
        document.getElementById(alertID).classList.add("alert-banner-visible");
    }
      
    // On click event for closing alert
    let alertCloseBtn = document.querySelector(".alert-banner-close");
  
    alertCloseBtn.onclick = function(){ 
    
    document.getElementById(alertID).style.display = "none";
    window.sessionStorage.setItem("alert-closed", alertID);
  
  }

});