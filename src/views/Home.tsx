import * as React from 'react';
import {
	TabContent,
	TabPane,
	Nav,
	NavItem,
	NavLink,
	Card,
	Button,
	CardTitle,
	CardText,
	Row,
	Col,
	Container
} from 'reactstrap';
import classnames from 'classnames';

interface Props {}
interface State {
	activeTab: string;
}

export default class Home extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			activeTab: '1'
		};
	}

	toggle(tab: string) {
		if (this.state.activeTab !== tab) {
			this.setState({
				activeTab: tab
			});
		}
	}
	render() {
		return (
			<Container className="home-container">
				<Nav tabs>
					<NavItem>
						<NavLink
							className={classnames({
								active: this.state.activeTab === '1'
							})}
							onClick={() => {
								this.toggle('1');
							}}
						>
							Trending Projects
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink
							className={classnames({
								active: this.state.activeTab === '2'
							})}
							onClick={() => {
								this.toggle('2');
							}}
						>
							My Projects
						</NavLink>
					</NavItem>
				</Nav>
				<TabContent activeTab={this.state.activeTab}>
					<TabPane tabId="1">
						<Row>
							<Col sm="12">
								<h4>Tab 1 Contents</h4>
							</Col>
						</Row>
					</TabPane>
					<TabPane tabId="2">
						<Row>
							<Col sm="6">
								<Card body>
									<CardTitle>
										Special Title Treatment
									</CardTitle>
									<CardText>
										With supporting text below as a natural
										lead-in to additional content.
									</CardText>
									<Button>Go somewhere</Button>
								</Card>
							</Col>
							<Col sm="6">
								<Card body>
									<CardTitle>
										Special Title Treatment
									</CardTitle>
									<CardText>
										With supporting text below as a natural
										lead-in to additional content.
									</CardText>
									<Button>Go somewhere</Button>
								</Card>
							</Col>
						</Row>
					</TabPane>
				</TabContent>
			</Container>
		);
	}
}
