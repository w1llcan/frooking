const React = require('react');
const show = console.log

const Default = (props) => {
    return (
        <html>
            <head>
                <title>Frooking (FRiends cOOKING)</title>
                <link rel="stylesheet" type="text/css" href="/css/style.css" />
                {/* <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.6.3/css/foundation-float.min.css" /> */}
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" /> */}
                <body>
                    {/* <h1>Recipes:</h1> */}
                    {/* <h1>{props.title}</h1> */}
                    <main>
                        {props.children}
                    </main>
                </body>
            </head>
        </html>
    )
}

module.exports = Default;