
var models = [
    {
        name : 'Bmw X5',
        image : 'img/bmw.jpg',
        link : 'http://www.arabalar.com.tr/bmw/2-serisi/2022/216d-1-5-active-tourer'
    },

    {
        name : 'Mazda Cx',
        image : 'img/mazda.jpg',
        link : 'http://www.arabalar.com.tr/ford/focus/2022/1-5-ecoblue-titanium-at'
    },

    {
        name : 'Honda ASD',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/citroen/c5-aircross/2022/1-5-hdi-feel-bold-at'
    },

    {
        name : 'Skoda qwe',
        image : 'img/skoda.jpg',
        link : 'http://www.arabalar.com.tr/ford/focus/2022/1-5-ecoblue-titanium-at'
    },

    {
        name : 'volvo V40',
        image : 'img/volvo.jpg',
        link : 'http://www.arabalar.com.tr/bmw/2-serisi/2022/216d-1-5-active-tourer'
    }
]
var index = 0;
var slaytCount = models.length;
var settings = {
    duration : '2000',
    random : true
}
var interval;

init(settings);

function init(settings)
{
    var prevIndex;
    interval = setInterval(function() {
        if(!settings.random)
        {
            do{
                index = Math.floor(Math.random() * slaytCount)
            }while(index == prevIndex)
            prevIndex = index;
        }
        else
        {
            if(slaytCount == index+1)
            {
                index = -1;
            }
            showSlide(index);
            index++;
        }
    },settings.duration)
    
}

document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseenter',function() {
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseleave',function() {
        init(settings);
    })
});

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    console.log(index);
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    console.log(index);
    showSlide(index);
});

function showSlide(i)
{
    index = i;
    if(i <0)
    {
        index = slaytCount-1;
    }

    if(i >=slaytCount)
    {
        index = 0;
    }

    

    document.querySelector('.card-title').textContent = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}