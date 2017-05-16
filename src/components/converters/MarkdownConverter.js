import React from 'react';
import Converter from '../converter/Converter'

const MarkdownConverter = (props) => {
    return (
        <Converter header="convert Youtube url to markdown">
            <p>Hi, my name is <a href="https://sviridovserg.github.io">Sergei</a> I love delivering great product to the customer and help teams to grow! I'm using markdown files to write my blog and to put project documentation on GitLab or GitHub a lot. I find it hard to remember how to embed Youtube video to markdown files. So, I created this simple tool that converts Youtube video URI to the embeddable markup that can be simply copy-pasted to GitLab or GitHub or to my blogposts.</p>
        </Converter>
    )
}

export default MarkdownConverter;