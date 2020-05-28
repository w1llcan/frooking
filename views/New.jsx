const React = require('react');
const show = console.log;
const Default = require('./Default.jsx');


class New extends React.Component {
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
                <h1>Frooking (<strong>FR</strong><span class="dark">iends</span><span class="dark"> c</span><strong>OOKING</strong>)</h1>
                <h2 class="rec">New Recipe:</h2>
                </div>
                {/* User name is not appearing now.  I will work on it later */}
                <div class="log">
                <h3>{this.props.username}</h3>
                {this.props.username ? logout : ''}
                </div>
                </div>
                <div class="main">
                <div class="addform">
                <div class="center">
              <h1>Add A New Recipe</h1>
                    <form action="/recipes" method="POST">
                     <input type="text" name="rname" placeholder="Enter the name of your recipe" /><br/><br/>
                     <select name = "rtype">
                     <option value=" ">Add the style/diet of your recipe</option>
                         <option value="Asian Heritage">Asian Heritage Diet</option>
                         <option value="Carnivore">Carnivore</option>
                         <option value="DASH Diet">DASH Diet</option>
                         <option value="Flexitarian">Flexitarian</option>
                         <option value="Fruitarian">Fruitarian</option>
                         <option value="Mayo">Mayo Clinic Diet</option>
                         <option value="Mediterranean">Mediterranean Diet</option>
                         <option value="MIND">MIND Diet</option>
                         <option value="Nordic">Nordic Diet</option>
                         <option value="Nutritarian">Nutritarian Diet</option>
                         <option value="Ornish">Ornish Diet</option>
                         <option value="Paleo">Paleo</option>
                         <option value="Pegan">Pegan</option>
                         <option value="Pescatarian">Pescatarian</option>
                         <option value="Raw Food">Raw Food</option>
                         <option value="South Beach">South Beach Diet</option>
                         <option value="TLC Diet">TLC Diet</option>
                         <option value="Vegan">Vegan</option>
                         <option value="Vegetarian">Vegetarian</option>
                         <option value="Volumetrics">Volumetrics Diet</option>
                     </select><br/><br/>
                     <input type="text" name="calories" placeholder="# of calories per serving" /><br/><br/>
                     <input type="text" name="portions" placeholder="# of portions" /><br/><br/>
                     <select name = "allergy">
                     <option value="" selected default hidden>Contains:</option>
                         <option value="Cow's Milk">Cow's Milk</option>
                         <option value="Eggs">Eggs</option>
                         <option value="Nuts">Nuts</option>
                         <option value="Shellfish">Shellfish</option>
                         <option value="Wheat">Wheat</option>
                         <option value="Soy">Soy</option>
                         <option value="Fish">Fish</option>
                    </select><br/><br/>
                    <input type="text" name="oventemp" placeholder="If cooked, what temperature?" /><br/><br/>
                    <input type="text" name="howlong" placeholder="Cook for how long?" /><br/>
                    <h4>Directions to create your dish:</h4>
                    <input type="text" name="rsteps1" placeholder="Step 1 to create your recipe" /><br/>
                    <input type="text" name="rsteps2" placeholder="Step 2 to create your recipe, if needed" /><br/>
                    <input type="text" name="rsteps3" placeholder="Step 3 to create your recipe, if needed" /><br/>
                    <input type="text" name="rsteps4" placeholder="Step 4 to create your recipe, if needed" /><br/>
                    <input type="text" name="rsteps5" placeholder="Step 5 to create your recipe, if needed" /><br/>
                    <input type="text" name="rsteps6" placeholder="Step 6 to create your recipe, if needed" /><br/>
                    <input type="text" name="rsteps7" placeholder="Step 7 to create your recipe, if needed" /><br/>
                    <input type="text" name="rsteps8" placeholder="Step 8 to create your recipe, if needed" /><br/>
                    <input type="text" name="rsteps9" placeholder="Step 9 to create your recipe, if needed" /><br/>
                    <input type="text" name="rsteps10" placeholder="Step 10 to create your recipe, if needed" /><br/>
                    <input type="text" name="rsteps11" placeholder="Step 11 to create your recipe, if needed" /><br/>
                    <input type="text" name="rsteps12" placeholder="Step 12 to create your recipe, if needed" /><br/>
                    <input type="text" name="rsteps13" placeholder="Step 13 to create your recipe, if needed" /><br/>
                    <input type="text" name="rsteps14" placeholder="Step 14 to create your recipe, if needed" /><br/>
                    <input type="text" name="rsteps15" placeholder="Step 15 to create your recipe, if needed" /><br/><br/>

                  <input class="create" type="submit" name="" value="Add Recipe"/>
                    </form>
                    </div>
                    </div>
                  </div>
                </body>
          </Default>
          );
    }
  }
 
  module.exports = New;