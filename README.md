# ↗️✨ Cmmnd
Cmmnd is a dynamic Tailwind powered React component tailored for presenting keyboard shortcuts in the web.
<br/><br/>
![rec-tab-_3_-ezgif com-crop](https://github.com/JoseTomasSilvaZ/Cmmnd/assets/58149194/0d44b538-5376-467f-aa7b-012abbe04536)

## Install
Install
```
npm install cmmnd
```

## Usage
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


## Styling

Cmmnd is bundled with wonderful and minimal styles out of the box. Although, if you want to customize it, you can do it with [TailwindCSS classes](https://tailwindcss.com/). <br/>

This feature is powered by [clsx](https://www.npmjs.com/package/clsx) and [Tailwind merge](https://www.npmjs.com/package/tailwind-merge)

Assuming that you have tailwind installed and configured in your app:

```jsx

<Command wrapperClassName='bg-zinc-800 rounded-xl' keysClassName='text-white bg-zinc-600'/>

```

## Props

Cmmnd provides some props to make the component flexible and adjustable to your needs.

#### variant = 'light' | 'default'
```jsx
<Command variant='light'/>
```
#### triggerKeys = string[]
Trigger cmmnd only when shortcuts starts with the keys provided in the array
```jsx
<Command triggerKeys={['Control', 'Shift']}/>
```
#### side = 'bottom' | 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft'

Decide where cmmnd is placed, bottom as default.
```jsx
<Command side='bottomRight'/>
```

#### repeatKeys = boolean
Allow repeated keys to be shown in cmmnd. False as default.

```jsx
<Command repeatKeys/>
```

#### disappearAfter = number --> in ms
Decide how much time cmmnd is shown after is triggered. 2 seconds as default

```jsx
<Command disappearAfter={4000}/>
```

#### wrapperClassName = string 
Add tailwind classes to the wrapper
```jsx

<Command wrapperClassName='bg-zinc-800 rounded-xl'/>

```

#### keysClassName = string
Add tailwind classes to the pressed keys

```jsx

<Command keysClassName='text-white bg-zinc-600'/>

```


