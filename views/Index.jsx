const React = require('react');
const show = console.log;
const Default = require('./Default.jsx');

class Index extends React.Component {
    render() {
        
        const logout = (
        <form class="logout" action="/sessions/?_method=delete" method="post">
            <input class="logout" type="submit" value="Log out" />
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
                <h1>Frooking (<strong>FR</strong><span class="dark">iends</span><span class="dark"> c</span><strong>OOKING</strong>)</h1>
                <h2 class="rec">Recipes:</h2>
                </div>
                <div class="log">
                <h3>{this.props.username}</h3>
                {this.props.username ? logout : ''}
                </div>
                </div>
            <div class="main">
                
                <nav>
                    <br/>
                    <div class="button">
                    <a class="text-over" href="/recipes/new">Create a New Recipe</a>
                    </div>
                </nav>
                  
                <ul>
                    {
                        recipes.map((recipes, i) => {
                            show(recipes._id)
                            return (
                                <div class="card">
                                <li>
                                    <a class="larger" href={`/recipes/${recipes._id}`}>{recipes.rname}</a><br/><br/>                    
                                    <h2 class="diet">         
                                    {recipes.rtype}</h2>
                                    <h3 class="calories">Calories:&nbsp;{recipes.calories}</h3>
                                    <h3 class="portions">Portions:&nbsp;{recipes.portions}</h3>
                                    <h3 class="allergy">Contains:&nbsp;{recipes.allergy}</h3>
                                    <h3>Oven Temp(if cooked):&nbsp;{recipes.oventemp}</h3><br/><br/>
                                    <h3>Cook Time:&nbsp;{recipes.howlong}</h3><br/>
                                    <h3>Directions:</h3>
                                    <p class="rsteps">{recipes.rsteps1}</p>
                                    <p class="rsteps">{recipes.rsteps2}</p>
                                    <p class="rsteps">{recipes.rsteps3}</p>
                                    <p class="rsteps">{recipes.rsteps4}</p>
                                    <p class="rsteps">{recipes.rsteps5}</p>
                                    <p class="rsteps">{recipes.rsteps6}</p>
                                    <p class="rsteps">{recipes.rsteps7}</p>
                                    <p class="rsteps">{recipes.rsteps8}</p>
                                    <p class="rsteps">{recipes.rsteps9}</p>
                                    <p class="rsteps">{recipes.rsteps10}</p>
                                    <p class="rsteps">{recipes.rsteps11}</p>
                                    <p class="rsteps">{recipes.rsteps12}</p>
                                    <p class="rsteps">{recipes.rsteps13}</p>
                                    <p class="rsteps">{recipes.rsteps14}</p>
                                    <p class="rsteps">{recipes.rsteps15}</p>

                                    <p class="edit"><a href={`/recipes/edit/${recipes._id}`}><br/>
                                    
                                     EDIT {recipes.name}</a></p><br/>
                                    <form action={`/recipes/${recipes._id}?_method=DELETE`}method="post"><br/>
                                        <input type="submit" value="DELETE" />
                                        <br/>
                                    </form>
                                </li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
            </body>
            </Default>
        )
    }
}

module.exports = Index;