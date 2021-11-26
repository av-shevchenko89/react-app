import React from 'react'

interface Html {
    scripts: string[];
}

export function Html({ children, scripts }: React.PropsWithChildren<Html>) {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,maximum-scale=1,initial-scale=1" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&display=swap" rel="stylesheet"></link>
                <title>Movie App</title>
                <link href="main.css" rel="stylesheet" type="text/css"></link>
            </head>
            <body>
                <div id="root">{children}</div>
                {scripts.map((script, index) => <script src={script} key={index} />)}
            </body>
        </html>
    )
}
