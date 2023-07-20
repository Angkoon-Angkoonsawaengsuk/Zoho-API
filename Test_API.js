// Declaration

let redirect_url = "http://www.zoho.com/in/crm"; //the URL of this script
let client_id = "1000.QRKMIX0GOO7KX9EJKGJC98OZSF128C"; //from Zoho
let client_secret = "1c85af12a40e1c22ce9d79987c1ccb905a2f074c1a"; //from Zoho

function authorization() {
    console.log("Authorization Debug")
    window.open(`https://accounts.zoho.com/oauth/v2/auth?scope=ZohoCRM.org.ALL,ZohoCRM.modules.quotes.ALL,ZohoCRM.modules.products.ALL,ZohoCRM.modules.accounts.ALL,ZohoCRM.modules.deals.ALL,ZohoCRM.modules.contacts.ALL,ZohoCRM.users.ALL,ZohoCRM.org.ALL,ZohoCRM.settings.roles.ALL&client_id=${client_id}&response_type=code&access_type=offline&redirect_uri=${redirect_url}&state=a`);
}

let result_token;
let grant_code;

function get_grant_code() {
    grant_code = document.getElementsByClassName("grant_code").value
    alert(this.grant_code)
}

function get_token() {
    let formData = {
        grant_type: 'authorization_code',
        client_id: client_id,
        client_secret: client_secret,
        redirect_uri: redirect_url,
        code: grant_code
    }

    console.log("FormData - " + formData)

    let options = {
        method: 'post',
        payload: formData
    }

    console.log("Options - " + options)

    const response = fetch('https://accounts.zoho.com/oauth/v2/token', options).then(result => console.log("Token Result - " + result)).then(result => result_token = result);
}