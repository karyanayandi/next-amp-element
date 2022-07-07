import Head from "next/head"
import type { AmpElementProps } from "./AmpElement"

export const AmpTemplate = (props: AmpElementProps) => {
  return (
    <Head>
      <script
        async
        custom-template={props.name}
        src={
          "https://cdn.ampproject.org/v0/" +
          props.name +
          "-" +
          props.version +
          ".js"
        }
        key={props.name}
      />
    </Head>
  )
}
