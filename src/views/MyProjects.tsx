import * as React from "react";
import { Row, Button, Input, Col, ListGroup } from "reactstrap";
import * as Api from "../api";
import ListItem from "../components/ListItem";
import LoadingOverlay from 'react-loading-overlay';

interface Props { }
interface State {
    userName: string;
    projects: RepositoryItem[];
    loading: boolean;
}

export default class MyProjects extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            userName: "bijubijoy",
            projects: [],
            loading: false,
        }
    }


    componentDidMount = async () => {
        this.getUserProjects();
    }

    updateUserName = (e: any) => {
        this.setState({
            userName: e.target.value
        })
    }

    getUserProjects = () => {
        this.setState({ loading: true }, async () => {
            const userProjects = await Api.getMyRepos(this.state.userName);
            this.setState({
                projects: userProjects
            })
        })
    }


    render() {
        return (
            <div className="trending-container">
                <Row className="search-container justify-content-end">
                    <Col sm="auto">
                        <Input
                            type="text"
                            onChange={this.updateUserName}
                            name="username"
                            placeholder="Enter username" />
                    </Col>
                    <Col sm={2} >
                        <Button onClick={this.getUserProjects} >Get Repos</Button>
                    </Col>
                </Row>
                <ListGroup>
                    {this.state.projects.map((repo, index) => <ListItem key={index} item={repo} />)}
                </ListGroup>
            </div>

        )
    }

}