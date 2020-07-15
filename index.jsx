import { css } from "uebersicht"

export const command = "finger `whoami` | awk -F: '{ print $3 }' | head -n1 | sed 's/^ // '"

export const refreshFrequency = false

const profileContaienr = css`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
`

const profileInner = css``


const profilePic = css`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #fff;
  margin: auto;
  display: block;
  box-shadow: 0 3px 6px rgba(0,0,0,0.08), 0 3px 6px rgba(0,0,0,0.12);
`

const profileName = css`
  font-family: "Avenir Next";
  font-weight: 400;
  text-align: center;
  color: #fff;
  text-shadow: 0 3px 6px rgba(0,0,0,0.08), 0 3px 6px rgba(0,0,0,0.12);
`



export const render = ({ output }) => (
//   <h1 className={test}>{output}</h1>
    <div className={profileContaienr}>
        <div className={profileInner}>
            <img className={profilePic} src="/profile.widget/profile.jpg" alt=""/>
            <h1 className={profileName}>{output}</h1>
        </div>
    </div>
)
