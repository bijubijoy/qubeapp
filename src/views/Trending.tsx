import * as React from "react";
import { Row, Modal, ListGroup, Button, Input, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import TabItem from "../components/ListItem";
import * as Api from "../api";
import LoadingOverlay from 'react-loading-overlay';

interface Props { }
interface State {
    repos: RepositoryItem[];
    searchValue: string;
    loading: boolean;
}

export default class TrendingItems extends React.Component<Props, State> {

    page: number;
    searchedValue: string;

    constructor(props: Props) {
        super(props);
        this.state = {
            repos: [],
            searchValue: "",
            loading: true,
        }
        this.page = 1;
        this.searchedValue = "language:javascript";
    }

    componentDidMount = async () => {
        const data = await Api.popularJSFrameWorks();
        this.setState({ repos: data.items, loading: false })
    }

    updateSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ searchValue: e.target.value });
    }

    Search = (page = 1) => {
        this.setState({ loading: true }, async () => {
            const data = await Api.searchRepositories(this.searchedValue, page);
            this.setState({ repos: data.items, loading: false });
        });
    }

    onSearchClick = () => {
        if (!this.state.loading) {
            this.searchedValue = this.state.searchValue;
            this.Search();
        }
    }

    onNextPress = async (e: any) => {
        e.preventDefault();
        this.page += 1;
        this.Search(this.page);
    };

    onPrevPage = async (e: any) => {
        e.preventDefault();
        if (this.page > 1) this.page -= 1;
        this.Search(this.page);
    }

    render() {
        return (
            <div className="trending-container">
                <Row className="search-container justify-content-end">
                    <Col sm="auto">
                        <Input
                            type="text"
                            onChange={this.updateSearchValue}
                            name="searcher"
                            placeholder="Search Repositories" />
                    </Col>
                    <Col sm={1} >
                        <Button onClick={this.onSearchClick} >Search</Button>
                    </Col>
                </Row>
                <ListGroup>
                    {this.state.repos.map((repo, index) => <TabItem key={index} item={repo} />)}
                </ListGroup>
                <Row className="pagination">
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink onClick={this.onPrevPage} previous href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink onClick={this.onNextPress} next href="#" />
                        </PaginationItem>
                    </Pagination>
                </Row>
                <Modal centered isOpen={this.state.loading} >
                    <LoadingOverlay
                        active={true}
                        spinner
                        text='Loading your content...'
                    >
                    </LoadingOverlay>
                </Modal>
            </div >
        )
    }
}
