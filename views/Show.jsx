const React = require('react');
const show = console.log
const Default = require('./Default.jsx');

class Show extends React.Component {
    render() {
        
        const logout = (
        <form class="logout" action="/sessions/?_method=delete" method="post">
            <input type="submit" value="Log out" />
        </form>
        )
        const { recipes } = this.props;
        return (
            <Default>
                <head>
                <link rel="stylesheet" type="text/css" href="/css/style.css" />
                </head>
                <body>
                <div class="header">
                <div class="frook">
                <h1>Frooking (<strong>FR</strong><span class="dark">iends</span><span class="dark"> c</span><strong>OOKING</strong>)
                <br/><br/>Recipes:</h1>
                </div>
                <div class="log">
                <h3>{this.props.username}</h3>
                {this.props.username ? logout : ''}
                </div>
                </div>
                <br/>
                <div class="main">
                <div class="button">
                    <a class="text-over" href="/recipes">Back to the Index</a>
                    </div>
                  <div class="card">
                    <h1>{recipes.rname}</h1>
                    <h2 class="diet">{recipes.rtype}</h2>
                    <h2>Calories:&nbsp;{recipes.calories}</h2>
                    <h2>Portions:&nbsp;{recipes.portions}</h2>
                    <h2 class="allergy">Allergy:&nbsp;{recipes.allergy}</h2>
                    <h2>Oven Temperature:&nbsp;{recipes.oventemp}</h2>
                    <h2>Cooking Time:&nbsp;{recipes.howlong}</h2>
                    <h4>Directions:</h4>
                    <p>{recipes.rsteps1}</p>
                    <p>{recipes.rsteps2}</p>
                    <p>{recipes.rsteps3}</p>
                    <p>{recipes.rsteps4}</p>
                    <p>{recipes.rsteps5}</p>
                    <p>{recipes.rsteps6}</p>
                    <p>{recipes.rsteps7}</p>
                    <p>{recipes.rsteps8}</p>
                    <p>{recipes.rsteps9}</p>
                    <p>{recipes.rsteps10}</p>
                    <p>{recipes.rsteps11}</p>
                    <p>{recipes.rsteps12}</p>
                    <p>{recipes.rsteps13}</p>
                    <p>{recipes.rsteps14}</p>
                    <p>{recipes.rsteps15}</p>
                    </div>
                    </div>
                </body>
            </Default>
        )
    }
}

module.exports = Show;