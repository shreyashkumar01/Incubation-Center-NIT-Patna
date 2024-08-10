export const Email = {
  send: function (a) {
    return new Promise(function (resolve, reject) {
      a.nocache = Math.floor(1e6 * Math.random() + 1);
      a.Action = "Send";
      var data = JSON.stringify(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", data, function (response) {
        if (response === "OK") {
          resolve(response); // Resolve the promise if the response is "OK"
        } else {
          reject("Failed to send email: " + response); // Reject the promise with the error message
        }
      });
    });
  },
  ajaxPost: function (url, data, callback) {
    var xhr = Email.createCORSRequest("POST", url);
    if (xhr) {
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onload = function () {
        var response = xhr.responseText;
        callback(response); // Pass the response to the callback
      };
      xhr.onerror = function () {
        callback("Network error"); // Handle network errors
      };
      xhr.send(data);
    } else {
      callback("CORS not supported"); // Handle cases where CORS is not supported
    }
  },
  createCORSRequest: function (method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      xhr.open(method, url, true); // Standard CORS request
    } else {
      xhr = null; // CORS not supported
    }
    return xhr;
  }
};
