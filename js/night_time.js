function redirectBasedOnTime() {
const currentHour = new Date().getHours(); 
    
    if (currentHour >= 2 && currentHour < 5) { 
        window.location.href = 'night_time.html'; 
        } 
    else {
        window.location.href = 'index.html'; 
        }
    }
    redirectBasedOnTime();
    setTimeout(redirectBasedOnTime, 60000);
   