/**
 * This is an example service to send email using clearblade's core library mailer.
 */
function MailerExampleSend(req, resp){
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