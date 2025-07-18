import React, { useState } from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useTypewriter } from 'react-simple-typewriter'

const TypeWriterComponent = (textForType) => {
    const [text] = useTypewriter({
        typeSpeed: 5,
        words: [`
        java -cp PersonalSiteGreeting.java "Java" "C#, JS, Python" "React, Angular" 

Hi! I’m a developer from Russia.
Why is this site was created? Just why not.
Primary language: Java.
And also: C#, JS, Python. And some frontend: React, Angular.
`],
        loop: 1
    })

    return (
        <SyntaxHighlighter style={docco}>
            {text}
        </SyntaxHighlighter>
    )
}

export default TypeWriterComponent;