import { configUrl } from '../../content/configs/defaultValues';
import { fileExtension } from '../../content/configs/regex';
import { errorHandler } from '../utils/errorHandler';
import { extract } from '../utils/regexWrappers';
/**
 * @param  {string} url
 * Will use this string to read file
 * @param  {string} configFileUrl
 * Will use this string to fetch config file
 */
export function readScript(url, configFileUrl = configUrl) {
  fetch(url)
    .then(res => res.text())
    .then(text =>
      console.log(
        text,
        configInterpreter(configFileUrl, extract(url, fileExtension)),
      ),
    )
    .catch(error => errorHandler(error));
}
/**
 * @param  {string} url
 * Will use this string to fetch config file
 * @param  {string} fileExtension
 * Will search for this extension in the url's jsON
 */
function configInterpreter(url, fileExtension) {
  fetch(url)
    .then(res => res.json())
    .then(json => console.log(json.extensions[fileExtension] + '.js'))
    .catch(ex => console.log(ex));
}
