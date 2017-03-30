import * as React from "react";

export interface LikeButtonState {
    likeCount: number;
    displayText: string;
}

export class LikeButton extends React.Component<undefined, LikeButtonState> {

    constructor(props: any, context: any) {
        super(props, context);
        this.state = {
            likeCount: 0,
            displayText: "Like",
        }
    }

    render() {
        return <div className="like-container">
            <a onClick={this.handleClicked.bind(this)}><i className="fa fa-thumbs-up" aria-hidden="true"></i>
                <span >{this.state.displayText}</span></a>
        </div>;
    }

    handleClicked(e) {
        e.preventDefault();

        let likeCount = this.state.likeCount + 1;
        let text = likeCount > 0 ? likeCount + " likes" : "";
        this.setState({
            likeCount: likeCount,
            displayText: text
        });
    }
}