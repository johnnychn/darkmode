### Usage
npm 
``` bash
$ npm install johnny-dark-mode --save
```

```javascript
import DarkMode from 'johnny-dark-mode'
function change(isDark) {
    console.log(isDark)
}
new DarkMode({mode:'auto',callback:change})
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

callback:function(isDark) default null

isDark 是否是暗黑模式
