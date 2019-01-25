import * as React from "react";
import {
    TabContent,
    TabPane,
    Nav,
    Container
} from 'reactstrap';
import TabNavigator from "./TabNav";


interface Props { tabData: TabData[] }
interface State { activeTab: number }

export default class Tab extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    changeTab = (e: number) => this.setState({ activeTab: e })

    render() {
        const { activeTab } = this.state;
        const { tabData } = this.props;
        return (
            <Container>
                <Nav tabs>
                    {tabData.map((item: TabData, index: number) =>
                        <TabNavigator
                            key={index}
                            onClick={() => this.changeTab(index)}
                            activeTab={activeTab == index}
                            text={item.heading}
                        />)}
                </Nav>
                <TabContent activeTab={activeTab}>
                    {tabData.map((item, index) =>
                        <TabPane
                            key={index}
                            tabId={index} >
                            {item.content}
                        </TabPane>
                    )}
                </TabContent>
            </Container >
        )
    }

}