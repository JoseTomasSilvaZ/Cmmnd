# ↗️✨ Cmmnd
Cmmnd is a dynamic Tailwind powered React component tailored for presenting keyboard shortcuts in the web.
<br/><br/>
![rec-tab-_3_-ezgif com-crop](https://github.com/JoseTomasSilvaZ/Cmmnd/assets/58149194/0d44b538-5376-467f-aa7b-012abbe04536)

## Usage

There are a few ways to include the cmmnd styles

#### Including the styles in your css file 
```css
// index.css

@import 'cmmnd/dist/style.css'
```

#### Or including it in your tailwind.config.js file

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    //... ,
    './node_modules/cmmnd/dist/**/*.{js,jsx,ts,tsx}'
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

Then, use it wherever you want

```tsx
import {Command} from 'cmmnd'

function App() {
  return (
    <>
    //...
        <Command variant='light' triggerKeys={['Control', 'Shift']} />
    //...
    </>
  )
}
```

## Props

Cmmnd provides some props to make the component flexible and adjustable to your needs.

#### variant = 'light' | 'default'
```tsx
<Command variant='light'/>
```
#### triggerKeys = string[]
Trigger cmmnd only when shortcuts starts with the keys provided in the array
```tsx
<Command triggerKeys={['Control', 'Shift']}/>
```
#### side = 'bottom' | 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft'

Decide where cmmnd is placed, bottom as default.
```tsx
<Command side='bottomRight'/>
```

#### repeatKeys = boolean
Allow repeated keys to be shown in cmmnd. False as default.

```tsx
<Command repeatKeys/>
```

#### disappearAfter = number --> in ms
Decide how much time cmmnd is shown after is triggered. 2 seconds as default

```tsx
<Command disappearAfter={4000}/>
```


