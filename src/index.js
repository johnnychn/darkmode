/**
 * Created by johnny on 2020/04/07.
 */

import extend from 'johnny-extend'

function DarkMode(opt) {
    opt = extend({div: 'html',mode:'auto', class: 'dark-mode'}, opt);
    function callback(dark) {

        if (opt.callback) {
            opt.callback(dark)
        }
    }
    let div = document.querySelector(opt.div);
    let media = window.matchMedia('(prefers-color-scheme: dark)');
    let internal_callback = (e) => {
        let prefersDarkMode = e.matches;
        if (opt.mode === 'light') {
            prefersDarkMode=false
        } else if (opt.mode === 'dark') {
            prefersDarkMode=true
        }

        if (prefersDarkMode) {
            div.classList.add(opt.class);
            callback(true)
        } else {
            div.classList.remove(opt.class);
            callback(false)
        }
    };

    if (typeof media.addEventListener === 'function') {
        media.addEventListener('change', internal_callback);
    } else if (typeof media.addListener === 'function') {
        media.addListener(internal_callback);
    }
    internal_callback(media)

}

window.DarkMode=DarkMode;


export default DarkMode
