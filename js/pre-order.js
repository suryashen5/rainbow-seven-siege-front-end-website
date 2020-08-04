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
    if (!notEmpty(username)) return false;

    if (!minLength(username, 5) || !maxLength(username, 20)) return false;
    console.log(!minLength(username, 5) && !maxLength(username, 20));
    return true;
  }

  function validateEmail(email) {
    console.log("email");

    if (!notEmpty(email)) return false;

    return true;
  }

  function validatePassword(password) {
    console.log("password");
    console.log(password);
    if (!notEmpty(password)) return false;

    if (!minLength(password, 8)) return false;

    return true;
  }

  function validateAddress(address) {
    console.log(address);
    if (!notEmpty(address)) return false;
    return true;
  }

  function validateQuantity(qty) {
    if (!isNumber(qty)) return false;

    if (!isSafeNumber(qty)) return false;

    return true;
  }

  function validateType(type) {
    if (!notEmpty(type)) return false;
    if (!onlyType(type)) return false;
    return true;
  }

  function isNumber(string) {
    return !Number.isNaN(parseInt(string))
      ? sendResponse(true)
      : sendResponse(false, "Not a number");
  }

  function isSafeNumber(string) {
    return parseInt(string) < Number.MAX_SAFE_INTEGER
      ? sendResponse(true)
      : sendResponse(false, "Not safe");
  }

  function notEmpty(val) {
    if (val === "" || !val) {
      return sendResponse(false, "must not be empty");
    }
    return sendResponse(true);
  }

  function onlyType(type) {
    const types = new Set(["regular", "collector", "deluxe"]);
    return types.has(type)
      ? sendResponse(true)
      : sendResponse(false, "Must be in type");
  }

  function minLength(string, length) {
    return string.length >= length
      ? sendResponse(true)
      : sendResponse(false, `Must not be lower than ${length}`);
  }

  function maxLength(string, length) {
    return string.length <= length
      ? sendResponse(true)
      : sendResponse(false, `Must not be higher than ${length}`);
  }
});
