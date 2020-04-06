### Usage

npm install johnny-dark-mode --save

import DarkMode from 'johnny-dark-mode'

```javascript

  new DarkMode({mode:'auto',callback:function (dark) {
      console.log(dark)
    }})


```

```css
.dark-mode{
        background: black;
        color: azure;
    }
```


### Options

div:string default 'html' 

mode:string 'auto'|'light'|'dark' default 'auto'

class:string default 'dark-mode' 