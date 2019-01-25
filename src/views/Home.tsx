import * as React from 'react';
import { Container } from 'reactstrap';
import Trending from "./Trending";
import MyProjects from "./MyProjects";
import Tabs from "../components/Tabs";
import * as Api from "../api";

interface Props { }
interface State { }

export default class Home extends React.Component<Props, State> {
	renderTabData() {
		return [
			{ heading: "Trending", content: <Trending /> },
			{ heading: "My Projects", content: <MyProjects /> }
		]
	}
	async componentDidMount() {
		const data = await Api.popularJSFrameWorks();
	}
	render() {
		return (
			<Container className="home-container">
				<div className="heading">Github Projects</div>
				<Tabs tabData={this.renderTabData()} />
			</Container>
		);
	}
}
