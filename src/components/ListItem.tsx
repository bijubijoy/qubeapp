import * as React from "react";
import { Row, Col, ListGroupItem } from "reactstrap";
import Octicon, { Eye, Star, Zap } from '@githubprimer/octicons-react'
interface Props { item: RepositoryItem }

export default function ListItem(props: Props) {
    return (
        <ListGroupItem className="tab-item">
            <a className="link-git" href={props.item.html_url}>
                <Row>
                    <Col
                        xs="12"
                        md="2"
                        className="repo-image"
                        style={{ backgroundImage: `url(${props.item.owner.avatar_url})` }}>
                    </Col>
                    <Col
                        xs="12"
                        md="10"
                        className="text-details">
                        <Row className="name">{props.item.full_name}</Row>
                        <Row><span>{props.item.description}</span></Row>
                        <Row className="details">
                            <span><Octicon icon={Eye} />{props.item.watchers_count} watchers</span>
                            <span><Octicon icon={Star} />{props.item.stargazers_count} stars</span>
                            <span><Octicon icon={Zap} />{props.item.forks_count} forks</span>
                        </Row>
                    </Col>
                </Row>
            </a>
        </ListGroupItem>
    )
}