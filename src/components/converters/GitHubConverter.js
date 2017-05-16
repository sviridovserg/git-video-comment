import React from 'react';
import Converter from '../converter/Converter'

const GitHubConverter = (props) => {
    return (
        <Converter header="convert Youtube url to GitHub comment">
            <p>Hi, my name is <a href="https://sviridovserg.github.io">Sergei</a> I love delivering great product to the customer and help teams to grow! I'm using GitHub a lot. It is hard to embed Youtube video to GitHub markdown when you adding comment to pull request on GitHub or changing markdown files. So, I created this simple tool that converts Youtube video URI to the embeddable markup that can be simply copy-pasted to GitHub.</p>
        </Converter>
    )
}

export default GitHubConverter;