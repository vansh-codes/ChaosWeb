function redirectBasedOnTime() {
    const currentTime = new Date().getHours();
                
    if (currentTime >= 1 & currentTime<6) {
        window.location.href = "night_time.html"; 
        } else {
             window.location.href = "ContactUs.html";    
            }
}