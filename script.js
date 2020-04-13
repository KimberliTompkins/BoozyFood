
// on load call the init function which will call the getRecipe function
// to pre-populate the recipe accordion with pork chop recipes
window.onload = function () {
    this.init()

}

function init() {
    getRecipe('pork chops')
}

var searchDrink = "";
function createDrinkDiv() {
    $("#drinksDiv").empty();
    $("#drinkPicDiv").empty();
    $("#drinkDisc").empty();
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var drinkInst = response.drinks[0].strInstructions;
        var drinkImg = response.drinks[0].strDrinkThumb
        var drinkGlass = response.drinks[0].strGlass;
        if (response.drinks[0].strIngredient1 !== null) {
            var drinkIng1 = response.drinks[0].strIngredient1;
        }
        if (response.drinks[0].strIngredient2 !== null) {
            var drinkIng2 = response.drinks[0].strIngredient2;
        }
        if (response.drinks[0].strIngredient3 !== null) {
            var drinkIng3 = response.drinks[0].strIngredient3;
        }
        if (response.drinks[0].strIngredient4 !== null) {
            var drinkIng4 = response.drinks[0].strIngredient4;
        }
        if (response.drinks[0].strIngredient5 !== null) {
            var drinkIng5 = response.drinks[0].strIngredient5;
        }
        if (response.drinks[0].strIngredient6 !== null) {
            var drinkIng6 = response.drinks[0].strIngredient6;
        }
        if (response.drinks[0].strIngredient7 !== null) {
            var drinkIng7 = response.drinks[0].strIngredient7;
        }
        if (response.drinks[0].strIngredient8 !== null) {
            var drinkIng8 = response.drinks[0].strIngredient8;
        }

        var drinkMeasure1 = response.drinks[0].strMeasure1;
        var drinkMeasure2 = response.drinks[0].strMeasure2;
        var drinkMeasure3 = response.drinks[0].strMeasure3;
        var drinkMeasure4 = response.drinks[0].strMeasure4;
        var drinkMeasure5 = response.drinks[0].strMeasure5;
        var drinkMeasure6 = response.drinks[0].strMeasure6;
        var drinkMeasure7 = response.drinks[0].strMeasure7;
        var drinkMeasure8 = response.drinks[0].strMeasure8;


        var currentDiv = document.getElementById("drinksDiv");
        var drinkNameDiv = document.createElement("h2");
        var drinkGlassDiv = document.createElement("h3");
        var drinkDis = document.getElementById("drinkDisc");


        // Create For Loops for Ingredients if possible
        if (response.drinks[0].strIngredient1 !== null) {
            var drinkIngList1 = document.createElement("li");
        }
        if (response.drinks[0].strIngredient2 !== null) {
            var drinkIngList2 = document.createElement("li");
        }
        if (response.drinks[0].strIngredient3 !== null) {
            var drinkIngList3 = document.createElement("li");
        }
        if (response.drinks[0].strIngredient4 !== null) {
            var drinkIngList4 = document.createElement("li");
        }
        if (response.drinks[0].strIngredient5 !== null) {
            var drinkIngList5 = document.createElement("li");
        }
        if (response.drinks[0].strIngredient6 !== null) {
            var drinkIngList6 = document.createElement("li");
        }
        if (response.drinks[0].strIngredient7 !== null) {
            var drinkIngList7 = document.createElement("li");
        }
        if (response.drinks[0].strIngredient8 !== null) {
            var drinkIngList8 = document.createElement("li");
        }
        var drinkInstList = document.createElement("p");
        var drinkImage = document.createElement("p");
        drinkImage.id = "drinkPic";




        // console.log("final ingredients array:", ingredients);
        drinkNameDiv.textContent = response.drinks[0].strDrink;
        drinkGlassDiv.textContent = ("Glass: " + drinkGlass);
        if (response.drinks[0].strIngredient1 !== null) {
            drinkIngList1.textContent = (drinkIng1 + ": " + drinkMeasure1);
        }
        if (response.drinks[0].strIngredient2 !== null) {
            drinkIngList2.textContent = (drinkIng2 + ": " + drinkMeasure2);
        }
        if (response.drinks[0].strIngredient3 !== null) {
            drinkIngList3.textContent = (drinkIng3 + ": " + drinkMeasure3);
        }
        if (response.drinks[0].strIngredient4 !== null) {
            drinkIngList4.textContent = (drinkIng4 + ": " + drinkMeasure4);
        }
        if (response.drinks[0].strIngredient5 !== null) {
            drinkIngList5.textContent = (drinkIng5 + ": " + drinkMeasure5);
        }
        if (response.drinks[0].strIngredient6 !== null) {
            drinkIngList6.textContent = (drinkIng6 + ": " + drinkMeasure6);
        }
        if (response.drinks[0].strIngredient7 !== null) {
            drinkIngList7.textContent = (drinkIng7 + ": " + drinkMeasure7);
        }
        if (response.drinks[0].strIngredient8 !== null) {
            drinkIngList8.textContent = (drinkIng8 + ": " + drinkMeasure8);
        }
        drinkInstList.textContent = drinkInst;
        drinkImage.innerHTML = ("<img src='" + drinkImg + "'>");






        currentDiv.appendChild(drinkNameDiv);
        currentDiv.appendChild(drinkGlassDiv);
        if (response.drinks[0].strIngredient1 !== null) {
            currentDiv.appendChild(drinkIngList1);
        }
        if (response.drinks[0].strIngredient2 !== null) {
            currentDiv.appendChild(drinkIngList2);
        }
        if (response.drinks[0].strIngredient3 !== null) {
            currentDiv.appendChild(drinkIngList3);
        }
        if (response.drinks[0].strIngredient4 !== null) {
            currentDiv.appendChild(drinkIngList4);
        }
        if (response.drinks[0].strIngredient5 !== null) {
            currentDiv.appendChild(drinkIngList5);
        }
        if (response.drinks[0].strIngredient6 !== null) {
            currentDiv.appendChild(drinkIngList6);
        }
        if (response.drinks[0].strIngredient7 !== null) {
            currentDiv.appendChild(drinkIngList7);
        }
        if (response.drinks[0].strIngredient8 !== null) {
            currentDiv.appendChild(drinkIngList8);
        }
        drinkDis.appendChild(drinkInstList);
        drinkPicDiv.appendChild(drinkImage);


    });

}
$(".recipe-btn").on("click", function () {
    var userSearchTerm = $("#searchBar").val();
    getRecipe(userSearchTerm)
});

function getRecipe(searchTerm) {
    var rapidKey = 'd1d0cc0aa9msh27c01f986905339p1b0d72jsn919cceaeb7ba'
    var queryUrl = `https://api.spoonacular.com/food/products/search?query=${searchTerm}&apiKey=${rapidKey}`
    $('#accordion').empty()

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ignorePantry=false&ingredients=${searchTerm}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "d1d0cc0aa9msh27c01f986905339p1b0d72jsn919cceaeb7ba"
        }
    }



    //first call
    $.ajax(settings).then(function (response) {
        for (var i = 0; i < 5; i++) {
            console.log(response);
            if (response.length == 0) {
                var h2 = $(`<h3>"Sorry, there are no results that match your request"</h3>`);
                var content2 = $(`<div><img src="images/yoda_try_again.jpg"></div>`);
                $("#accordion").append(h2, content2);
                $("#accordion").accordion("refresh");
                return
            } console.log(i)
            var recipeID = response[i].id

            var newSettings = {
                "async": true,
                "crossDomain": true,
                "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeID}/information?includeNutrition=false`,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                    "x-rapidapi-key": "d1d0cc0aa9msh27c01f986905339p1b0d72jsn919cceaeb7ba",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
                }
            }

            //second call
            $.ajax(newSettings).then(function (results) {
                var h3 = $(`<h3>${results.title}</h3>`)
                var content = $('<div>')
                content.append(`<img src="${results.image}" alt="${results.title}">`)
                var content = $(`<div><img src="${results.image}" alt="${results.title}"></div>`)
                // get the ingredients
                var inDiv = $("<div>")
                $(inDiv).addClass("columns")

                for (var i = 0; i < results.extendedIngredients.length; i++) {
                    inDiv.append(`<div class="column">
                       
                       <p><center>${results.extendedIngredients[i].amount} ${results.extendedIngredients[i].unit}</p>
                        <img src="https://spoonacular.com/cdn/ingredients_100x100/${results.extendedIngredients[i].image}"</p>
                        <p>${results.extendedIngredients[i].name}</p>
                    </div>`)
                    content.append(inDiv)
                    console.log(inDiv)
                }


                //get the instructions
                content.append(`<p><strong>STEPS:</strong></p>`)
                for (var i = 0; i < results.analyzedInstructions[0].steps.length; i++) {


                    content.append(`<p><strong>${results.analyzedInstructions[0].steps[i].number}</strong> ${results.analyzedInstructions[0].steps[i].step}`)
                }

                $("#accordion").append(h3, content)
                $("#accordion").accordion("refresh");



            })

        }

    });

}

$("#accordion").accordion();
