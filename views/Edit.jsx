const React = require('react');
const show = console.log;
const Default = require('./Default.jsx');

class Edit extends React.Component {
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
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" /> */}
                </head>
                <body>
                <div class="header">
                <div class="frook">
                <h1>Frooking (<strong>FR</strong><span class="dark">iends</span><span class="dark"> c</span><strong>OOKING</strong>)
                <br/><br/>Edit Recipe:</h1>
                </div>
                <div class="log">
                <h3>{this.props.username}</h3>
                {this.props.username ? logout : ''}
                </div>
                </div>
            <div class="main">
                <div class="card">
                <div class="center">
              <h1>Edit Your Recipe</h1>
                    <form action={`/recipes/edit/${recipes._id}?_method=put`}method="POST">
                     <input type="text" name="rname" value={recipes.rname} /><br/><br/>
                     <select name = "rtype">
                         <option value={recipes.rtype}>{recipes.rtype}</option>
                         <option value="Asian Heritage">Asian Heritage Diet</option>
                         <option value="Carnivore">Carnivore</option>
                         <option value="DASH DIET">DASH Diet</option>
                         <option value="Flexitarian">Flexitarian</option>
                         <option value="Fruitarian">Fruitarian</option>
                         <option value="Mayo">Mayo Clinic Diet</option>
                         <option value="Mediterranean">Mediterranean Diet</option>
                         <option value="MIND Diet">MIND Diet</option>
                         <option value="Nordic">Nordic Diet</option>
                         <option value="Nutritarian">Nutritarian Diet</option>
                         <option value="Ornish">Ornish Diet</option>
                         <option value="Paleo">Paleo</option>
                         <option value="Pegan">Pegan</option>
                         <option value="Pescatarian">Pescatarian</option>
                         <option value="Raw Food">Raw Food</option>
                         <option value="South Beach Diet">South Beach Diet</option>
                         <option value="TLC Diet">TLC Diet</option>
                         <option value="Vegan">Vegan</option>
                         <option value="Vegetarian">Vegetarian</option>
                         <option value="Volumetrics">Volumetrics Diet</option>
                     </select><br/><br/>
                     <input type="text" name="calories" value={recipes.calories} /><br/><br/>
                     <input type="text" name="portions" value={recipes.portions} /><br/><br/>
                     <select name = "allergy">
                         <option value={recipes.allergy}>{recipes.allergy}</option>
                         <option value="None">None</option>
                         <option value="Cow's Milk">Cow's Milk</option>
                         <option value="Eggs">Eggs</option>
                         <option value="Nuts">Nuts</option>
                         <option value="Shellfish">Shellfish</option>
                         <option value="Wheat">Wheat</option>
                         <option value="Soy">Soy</option>
                         <option value="Fish">Fish</option>
                      </select><br/><br/>
                      <input type="text" name="oventemp" value={recipes.oventemp} /><br/><br/>
                      <p><input type="text" name="rsteps1" value={recipes.rsteps1} /></p>
                      <p><input type="text" name="rsteps2" value={recipes.rsteps2} /></p>
                      <p><input type="text" name="rsteps3" value={recipes.rsteps3} /></p>
                      <p><input type="text" name="rsteps4" value={recipes.rsteps4} /></p>
                      <p><input type="text" name="rsteps5" value={recipes.rsteps5} /></p>
                      <p><input type="text" name="rsteps6" value={recipes.rsteps6} /></p>
                      <p><input type="text" name="rsteps7" value={recipes.rsteps7} /></p>
                      <p><input type="text" name="rsteps8" value={recipes.rsteps8} /></p>
                      <p><input type="text" name="rsteps9" value={recipes.rsteps9} /></p>
                      <p><input type="text" name="rsteps10" value={recipes.rsteps10} /></p>
                      <p><input type="text" name="rsteps11" value={recipes.rsteps11} /></p>
                      <p><input type="text" name="rsteps12" value={recipes.rsteps12} /></p>
                      <p><input type="text" name="rsteps13" value={recipes.rsteps13} /></p>
                      <p><input type="text" name="rsteps14" value={recipes.rsteps14} /></p>
                      <p><input type="text" name="rsteps15" value={recipes.rsteps15} /></p>

                  <input class="create" type="submit" name="" value="Update"/>
                    </form>
                    </div>
                    </div>
                    </div>
                </body>
          </Default>
          );
    }
  }
  
  module.exports = Edit;
