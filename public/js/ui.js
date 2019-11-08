const alertboxClasses = ["show", "error", "success", "info", "warning"];

/* 
* handler: It is used to point the timer function setTimeout
* Use: It is used to clear any active previous timer function.
* Importance: The alert boxes are cancellable and it is possible 
* that it is cancelled before the time interval of the timer function.
* So to clear the timer handler is passed to clearTimeout to clear 
* timer. It helps to handle the unexpected behaviour which may arise 
* when new alert box is rendering.
*/
let handler = undefined;

/**
 * @function renderAlertMessage
 * @summary 
 * This will render alertbox
 * 
 * @param {string} [msg="Something went wrong"] Message to display in alertbox.
 * @param {string} [variant="error"] Variants are error, success, info, and warning. <br>
 * Variants will change the appearance of the alertbox. Only the border and the icon change.<br>
 * error: red left border<br>
 * info: blue left border<br>
 * warning: yellow left border<br>
 * success: green left border
 * @param {integer} [time=4000] milliseconds for which alertbox will appear
 * @example 
 * renderAlertMessage("Successful registration", "success", 5000)
 * renderAlertMessage() //Default alertbox will render
 */
function renderAlertMessage(msg, variant, time) {

  if(handler !== undefined) clearAlertMessage(handler);
  if(msg === undefined) msg = "Something went wrong";
  if(variant === undefined) variant = "error";
  if(time === undefined) time = 4000;

  const element = document.getElementById("alertbox");
  
  element.classList.add(alertboxClasses[0], variant);
  handler = setTimeout(clearAlertMessage, time);
  
  element.innerHTML = `
  <svg class="icon icon-lg ${variant}"><use xlink:href="#icon-${variant}"></use></svg>
  <div class="alert-msg">
  ${msg}
  </div>
  <div class="alert-close" onclick="wizard.clearAlertMessage(${handler})">
  <svg class="icon"><use xlink:href="#icon-cross"></use></svg>
  </div>
  `
  
}

/**
 * @function clearAlertMessage
 * @summary This will close the alertbox.
 * @param {function} [h] timer function
 * @example
 * clearAlertMessage() //This means no timer function is active.
 * clearAlertMessage(h) //This means h(timer function) is active.
 */
function clearAlertMessage(h) {
  if(h !== undefined) clearTimeout(h);
  const element = document.getElementById("alertbox");

  alertboxClasses.forEach(function(c){
    element.classList.remove(c)
  })
  
  /*
  * Resetting handler. After this handler is not pointing to any
  * timer function. This means no alertbox is active.
  */
  handler = undefined;
}

/**
 * 
 * @function removeChildren
 * @summary This function will remove all the child node of the parent node.
 * @param {object} node Parent node.
 * @example
 * var parent = document.getElementById("id-of-parent")
 * removeChildren(parent)
 */
function removeChildren(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

/**
 * 
 * @function replaceText
 * @summary This will first remove all the text present in the element and the update that element with the new text.
 * @param {object} elemId Target element.
 * @param {string} text Updated text node of element.
 * @example
 * var parent = document.getElementById("id-of-parent")
 * replaceText(parent, "This is updated message")
 */
function replaceText(elemId, text) {
  var elem = document.getElementById(elemId);
  var textNode = document.createTextNode(text);
  removeChildren(elem);
  elem.appendChild(textNode);
}


export {
  clearAlertMessage,
  renderAlertMessage,
  removeChildren,
  replaceText
}
