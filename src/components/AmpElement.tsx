import Head from "next/head"

export interface AmpElementProps {
  name: string
  version: string
}

export const AmpElement = (props: AmpElementProps) => {
  return (
    <Head>
      <script
        async
        custom-element={props.name}
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
