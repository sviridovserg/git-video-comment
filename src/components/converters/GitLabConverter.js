import React from 'react';
import Converter from '../converter/Converter'

const GitLabConverter = (props) => {
    return (
        <Converter header="convert Youtube url to GitLab comment">
            <p>Hi, my name is <a href="https://sviridovserg.github.io">Sergei</a> I love delivering great product to the customer and help teams to grow! I'm using GitLab a lot. It is hard to embed Youtube video to GitLab markdown when you adding comment to pull request on GitLab or changing markdown files. So, I created this simple tool that converts Youtube video URI to the embeddable markup that can be simply copy-pasted to GitLab.</p>
        </Converter>
    )
}

export default GitLabConverter;