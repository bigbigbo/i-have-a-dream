import { h, render, Component, Fragment, Color, Bold, Underline } from "ink";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const routeConfig = [
    {
        path: "/",
        component: Home
    }
];

function renderRoute(path, ctx) {
    const [routeConf] = routeConfig.filter(item => item.path === path);

    const history = {
        push: url => ctx.setState({ currentUrl: url })
    };

    if (!routeConf) {
        return <NotFound history={history} />;
    }

    const Route = props => {
        return <routeConf.component {...props} history={history} />;
    };

    return <Route />;
}

class App extends Component {
    constructor() {
        super();

        this.state = {
            currentUrl: "/"
        };
    }

    render() {
        const { currentUrl } = this.state;
        return <Fragment>{renderRoute(currentUrl, this)}</Fragment>;
    }
}

export default App;
