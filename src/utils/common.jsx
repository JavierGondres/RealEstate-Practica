//Estas seran las propiedades de nuestro swiper, se va a destructurar dentro del componente swiper

export const sliderSettings  = {
    slidesPerView : 1,
    spaceBetween: 50,
    breakpoints: {
        480: {            
            slidesPerView: 1
        },
        600:{
            slidesPerView: 2
        },

        750:{
            slidesPerView:3
        },

        1100:{
            slidesPerView:4
        }

    }
}