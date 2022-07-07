## Getting Started
Add amp element easily.

### Install

#### npm
```bash
npm install next-amp-element    
```

#### pnpm
```bash
pnpm add next-amp-element
```

#### yarn
```bash
yarn add next-amp-element
```

## Example

### AmpState
```jsx
import { AmpState } from "next-amp-element"

const App = () => {
  return (
    <>
      <AmpState id="testState">
        <>
          {{
            message: "Hello World",
          }}
        </>
      </AmpState>
      <button
        on="tap:AMP.setState({
            hello: testState.message
            })"
      >
        Click
      </button>
      <span data-amp-bind-text="hello" />
    </>
  )
}
```

### AmpScript
```jsx
import { AmpScript } from "next-amp-element"

const App = () => {
  return (
    <AmpScript
      src={`your-script-url-or-path`}
    />
  )
}


```

### AmpCustomElement
```jsx
import { AmpVideo } from "next-amp-element"

const App = () => {
  return <AmpVideo>Your Video</AmpVideo>
}
```

You can check [here](https://github.com/yopundotcom/next-amp-element/blob/main/src/components/AmpCustomElements.tsx) to see all amp custom elements.