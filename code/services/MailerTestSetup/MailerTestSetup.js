/**
 * This service just ensures whether the MailgunConstants are set or not.
 */

function MailerTestSetup(req, resp) {

    function checkConstants() {
        var checkConstantEmpty = function (constant) {
            if (constant === "") {
                return true;
            } else {
                return false;
            }
        }

        var response = {
            err: false,
            messages: []
        };

        var sendResponse = function () {
            if (response.err) {
                resp.error(response)
            } else {
                resp.success(response);
            }
        };

        if (checkConstantEmpty(ORIGIN_EMAIL_ADDRESS)) {
            response.err = true;
            response.messages.push("ORIGIN_EMAIL_ADDRESS not set in MailerConstants Library");
        }
        if (checkConstantEmpty(ORIGIN_EMAIL_PASSWORD)) {
            response.err = true;
            response.messages.push("ORIGIN_EMAIL_PASSWORD not set in MailerConstants Library");
        }
        if (checkConstantEmpty(RECIPIENT_EMAIL_ADDRESS)) {
            response.err = true;
            response.messages.push("RECIPIENT_EMAIL_ADDRESS not set in MailerConstants Library");
        }
        if (checkConstantEmpty(host)) {
            response.err = true;
            response.messages.push("host not set in MailerConstants Library");
        }
        if (checkConstantEmpty(port)) {
            response.err = true;
            response.messages.push("port not set in MailerConstants Library");
        }
        sendResponse();

    }

    checkConstants();
}