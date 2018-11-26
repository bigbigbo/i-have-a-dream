import { h, Fragment, Component, Text } from "ink";

import Box from "ink-box";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";
import Select from "ink-select-input";
import Divider from "ink-divider";

const options = [
    {
        label: "查看往期开奖结果",
        value: "/award-result"
    },
    {
        label: "机选一下，一夜暴富",
        value: "/random"
    },
    {
        label: "打赏一下",
        value: "/tip"
    }
];

class Home extends Component {
    handleSelect = ({ value }) => {
        const { history } = this.props;
        history.push(value);
    };

    render() {
        return (
            <Fragment>
                <Box borderColor="cyan" padding={1}>
                    <Gradient name="rainbow">
                        <BigText text="i have a" />
                    </Gradient>
                    <Gradient name="rainbow">
                        <BigText text="dream" />
                    </Gradient>
                </Box>
                <br />
                <Divider dividerChar="=" title="请选择" />
                <Select items={options} onSelect={this.handleSelect} />
            </Fragment>
        );
    }
}

export default Home;
