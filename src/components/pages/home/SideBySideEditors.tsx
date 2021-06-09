import * as React from "react"
import { EditorWidget } from "../../widgets/EditorWidget"

export function SideBySideEditors() {
  return (
    <div className="container text-center">
      <div className="d-flex flex-wrap justify-content-center">
        <EditorWidget
          editorTitle="Desired Redux State"
          editorSettings={[
            {
              fileLabel: "state.ts",
              code: `// Feel free to edit with whatever state you need.
export interface ReduxPlateState {
  firstName: string
  lastName: string
  isLoggedIn: boolean
  roles: Array<string>
}`,
              isActive: true,
            },
          ]}
        />
        <EditorWidget
          editorTitle="Generated Code"
          editorSettings={[
            {
              fileLabel: "types.ts",
              code: `// types.ts`,
              isActive: true,
            },
            {
              fileLabel: "reducers.ts",
              code: `// reducers.ts`,
              isActive: false,
            },
            {
              fileLabel: "actions.ts",
              code: `// actions.ts`,
              isActive: false,
            },
          ]}
        />
      </div>
    </div>
  )
}
