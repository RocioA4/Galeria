
const handlerBarsContext = {
    "/index.html": {
        "gallery":[
            {
                imgSrc:"public/besocupido.png",
                title:"BESO DE CUPIDO",
                price:"Lps 100 ",
            },

            {
                imgSrc:"public/Bobba.png",
                title:"BOBBA ",
                price:"Lps 100 ",
            },

            {
                imgSrc:"public/cafe1.png",
                title:"CAFE ",
                price:"Lps 100",
            },

            {
                imgSrc:"public/cafe2.png",
                title:" CAFE",
                price:"Lps 100  ",
            },

            {
                imgSrc:"public/cafe3.png",
                title:"CAFE ",
                price:"Lps 100  ",
            },

            {
                imgSrc:"public/choco2.png",
                title:"CHOCOLATE ",
                price:"Lps 100  ",
            },

            {
                imgSrc:"public/chocolate.png",
                title:"CHOCOLATE ",
                price:"Lps 100  ",
            },

            {
                imgSrc:"public/combo1.png",
                title:"COMBO 1",
                price:"Lps 100  ",
            },

            {
                imgSrc:"public/croa dulce.png",
                title:"CROASSAINT ",
                price:"Lps 100  ",
            },

            {
                imgSrc:"public/frozen chai.png",
                title:"FROZEN CHAI ",
                price:"Lps 100  ",
            },

            {
                imgSrc:"public/waffle.png",
                title:"WAFFLE ",
                price:"Lps 100  ",
            },

            {
                imgSrc:"public/bowl saludable.png",
                title:"BOWL SALUDABLE ",
                price:" Lps 100 ",
            },

            {
                imgSrc:"public/croa dulce.png",
                title:"DULCE ",
                price:"Lps 100 ",
            },
        ],
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;