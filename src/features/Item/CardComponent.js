import { Card } from "antd"
import logo from "../logo.svg"

const { Meta } = Card

function CardComponent(props) {
    return (
        <Card cover={<img alt="logo" src={logo} />} >
            <Meta title="Redux" description="https://redux.js.org/" />
        </Card>
    )
}

export default CardComponent
