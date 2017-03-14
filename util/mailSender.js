const fs = require('fs');
const googleAuth = require('google-auth-library');
const google = require('googleapis');

const getOAuth2Client = function(cb) {
  // Load client secrets
  fs.readFile('client_secret.json', function(err, data) {
    if (err) {
      return cb(err);
    }
    var credentials = JSON.parse(data);
    var clientSecret = credentials.installed.client_secret;
    var clientId = credentials.installed.client_id;
    var redirectUrl = credentials.installed.redirect_uris[0];
    var auth = new googleAuth();
    var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

    // Load credentials
    fs.readFile('gmail-credentials.json', function(err, token) {
      if (err) {
        return cb(err);
      } else {
        oauth2Client.credentials = JSON.parse(token);
        return cb(null, oauth2Client);
      }
    });
  });
};

const doSendEmail = function(auth, emailData, cb){
  var gmailClass = google.gmail('v1');

  var email_lines = [];

  emailData.message = emailData.message.replace(/\n/g, '<br />');

  email_lines.push('To: juank.memphis@gmail.com');
  email_lines.push('Content-type: text/html;charset=iso-8859-1');
  email_lines.push('MIME-Version: 1.0');
  email_lines.push('Subject: Juan Morales Resume - Contact Form Message');
  email_lines.push('');
  email_lines.push(`<p><b>User Name:</b> ${emailData.name}</p>`);
  email_lines.push(`<p><b>User Email:</b> ${emailData.email}</p>`);
  email_lines.push(`<p><b>User Message:</b><br/><br/> ${emailData.message}</p>`);

  var email = email_lines.join('\r\n').trim();

  var base64EncodedEmail = new Buffer(email).toString('base64');
  base64EncodedEmail = base64EncodedEmail.replace(/\+/g, '-').replace(/\//g, '_');

  gmailClass.users.messages.send({
    auth: auth,
    userId: 'me',
    resource: {
      raw: base64EncodedEmail
    }
  }, cb);
};

exports.sendMail = function(emailData, callback) {

  getOAuth2Client(function(err, oauth2Client) {
    if (err) {
      console.log('err:', err);
    } else {
      doSendEmail(oauth2Client, emailData, callback);
    }
  });

};
