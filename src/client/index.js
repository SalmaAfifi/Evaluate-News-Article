
// TODO: include your scss file here

// TODO: get the button for submit
// TODO: add event listener to it when the click to call handleSubmit function
/**
 * TODO: Get Value of the input for URL
 *  TODO: Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */

import {handleSubmit} from './js/formHandler';
import {checkForURL} from './js/urlChecker';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/resets.scss';

alert("It's working");

export {handleSubmit, checkForURL};

