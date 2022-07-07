import { AmpElement } from "./AmpElement"

export interface AmpScriptProps {
  id?: string
  children?: React.ReactNode
  layout?: string
  width?: string
  height?: string
  script?: Function | string
  src?: string
}

const generateInlineScript = (script: Function | string) => {
  if (typeof script === "function") {
    return `${script.toString()}()`
  }
  return String(script)
}

export const AmpScript: React.FunctionComponent<AmpScriptProps> = (props) => {
  const { id, script, children, ...rest } = props

  return (
    <>
      <AmpElement name="amp-script" version="0.1" />
      <amp-script script={id} {...rest}>
        {children}
      </amp-script>
      {script && (
        <script
          id={id}
          type="text/plain"
          target="amp-script"
          dangerouslySetInnerHTML={{
            __html: generateInlineScript(script),
          }}
        />
      )}
    </>
  )
}
