import * as React from 'react';

export interface FacebookProps {
}

export interface FacebookState {
    comments: Comment[];
}

export interface Comment {
    author: string;
    content: string;
}

export class Facebook extends React.Component<FacebookProps, FacebookState> {

    refs: {
        commentInput: (HTMLInputElement)
    }

    constructor(props: FacebookProps, context: FacebookState) {
        super(props, context);
        this.state = {
            comments: [
                {
                    author: "hugo",
                    content: "hello world"
                }
            ]
        };
    }

    renderComments() {

        return this.state.comments.map(comment =>
            <div className="comment">
                <div className="comment-author">{comment.author}</div>
                <div className="comment-content">{comment.content}</div>
            </div>);
    }

    render() {
        return <div className="posting">
            <div className="posting-container">
                <div className="posting-author">Tymon</div>
                <div className="posting-content"> wrote something on facebook!</div>
            </div>
            <div className="like-container">
                <i className="fa fa-thumbs-up" aria-hidden="true"></i> <span >Like</span>
            </div>

            <div className="comments">

                {this.renderComments()}

                <div className="comment-new">
                    <form onSubmit={this.handleFormSubmitted.bind(this)}>
                        <input type="text" className="comment-input" placeholder="write a comment" ref="commentInput" />
                    </form>
                </div>
            </div>
        </div>;
    }

    handleFormSubmitted(e) {
        e.preventDefault();

        let comment: Comment = {
            author: "Tymon",
            content: this.refs.commentInput.value
        };

        this.state.comments.push(comment);
        this.setState(this.state);
        this.refs.commentInput.value = "";
    }
}