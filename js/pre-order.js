$(document).ready(function () {
  function sendResponse(successStatus = false, message = "") {
    console.log(message);
    if (!successStatus) alert(message);
    return successStatus;
  }

  $("#preorder").submit(function (e) {
    const username = $("#username").val();
    const email = $("#email").val();
    const password = $("#password").val();
    const address = $("#address").val();
    const quantity = $("#quantity").val();
    const type = $("#type").val();
    const eula = $("#eula").val();

    if (!validateUsername(username)) {
      e.preventDefault();
      return;
    }

    if (!validateEmail(email)) {
      e.preventDefault();
      return;
    }

    if (!validatePassword(password)) {
      e.preventDefault();
      return;
    }

    if (!validateAddress(address)) {
      e.preventDefault();
      return;
    }

    if (!validateQuantity(quantity)) {
      e.preventDefault();
      return;
    }

    if (!validateType(type)) {
      e.preventDefault();
      return;
    }

    console.log(eula);
    if (!eula) {
      e.preventDefault();
      return;
    }

    alert("Success");
  });

  function validateUsername(username) {
    console.log("username");

    if (!notEmpty(username)) return sendResponse(false, "Username must be filled");
    else if (!length(username, 5, 20)) return sendResponse(false, "Username must between 5 and 20 alphabet");
    else return true;

  }

  function validateEmail(email) {
    console.log("email");

    if (!notEmpty(email)) return sendResponse(false, "Email must be filled");

    return true;
  }

  function validatePassword(password) {
    console.log("password");
    console.log(password);
    if (!notEmpty(password)) return sendResponse(false, "Password must be filled");
""
    if (!minLength(password, 8)) return sendResponse(false, "Password must higher than 8");

    return true;
  }

  function validateAddress(address) {
    console.log(address);
    if (!notEmpty(address)) return sendResponse(false, "Address must be filled");
    return true;
  }

  function validateQuantity(qty) {
    if (!isNumber(qty)) return sendResponse(false, "Quantity must be number");

    if (!isSafeNumber(qty)) return sendResponse(false, "Quantity not safe, please input again");

    return true;
  }

  function validateType(type) {
    if (!notEmpty(type)) return sendResponse(false, "Type must be filled");
    if (!onlyType(type)) return sendResponse(false, "Must be type");
    return true;
  }

  function isNumber(string) {
    return !Number.isNaN(parseInt(string))
      ? sendResponse(true)
      : false;
  }

  function isSafeNumber(string) {
    return parseInt(string) < Number.MAX_SAFE_INTEGER
      ? sendResponse(true)
      : false;
  }

  function notEmpty(val) {
    if (val === "" || !val) {
      return false;
    }
    return sendResponse(true);
  }

  function onlyType(type) {
    const types = new Set(["regular", "collector", "deluxe"]);
    return types.has(type)
      ? sendResponse(true)
      : false;
  }

  function minLength(string, length) {
    return string.length >= length
      ? sendResponse(true)
      : false;
  }
  
  function length(string, minLength, maxLength) {
    return (string.length >= minLength && string.length <= maxLength)
      ? sendResponse(true)
      : false;
  }
});
