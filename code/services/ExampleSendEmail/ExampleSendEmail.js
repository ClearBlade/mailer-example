function ExampleSendEmail(req, resp){
    
    // TODO
    const ORIGIN_EMAIL_ADDRESS ="<ORIGIN_EMAIL_ADDRESS" // ex. youremail@gmail.com
    const ORIGIN_EMAIL_PASSWORD = "<ORIGIN_EMAIL_PASSWORD>" // ex. "K1LL3RPW"
    const RECIPIENT_EMAIL_ADDRESS = "<RECIPIENT_EMAIL_ADDRESS>" // ex. "recipient@gmail.com"
    const host = "<HOST>" // ex. "smtp.gmail.com"
    const port = "<PORT>" // ex. "587"
    
    // Example Subject and Text
    var subject = "Geofence Breach - Sector Z - " + new Date()
    var text = "This is a test alert for your IoT solution powered by ClearBlade Platform"
    
    var transportConfig = {
        host,
        port
    }
    
    var emailConfig = {
        from: ORIGIN_EMAIL_ADDRESS,
        password:ORIGIN_EMAIL_PASSWORD,
        to: RECIPIENT_EMAIL_ADDRESS,
        subject,
        text
    }
    
    var transport = mailer().createTransport(transportConfig);
    transport.sendMail(emailConfig, callback);
    
    function callback(err, data){
        transport.close();
        if(err){
            resp.error("Failed to send email: " + JSON.stringify(err))
        }
        resp.success("Thank you! Your request has been submitted: " + JSON.stringify(data))
    }
}