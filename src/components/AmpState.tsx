import { AmpElement } from "./AmpElement"

export interface AmpStateProps {
  id?: string
  src?: string
  children?: React.ReactNode
}

export const AmpState: React.FunctionComponent<AmpStateProps> = (props) => {
  const { id, src, children } = props
  return (
    <>
      <AmpElement name="amp-bind" version="0.1" />
      <amp-state id={id} src={src}>
        {children && (
          <script
            type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(children),
            }}
          />
        )}
      </amp-state>
    </>
  )
}
